import React, { useState, useEffect } from 'react'
import "./Payment.css"
import { useStateValue } from "../context/StateProvider"
import CheckoutProduct from './CheckoutProduct';
import { Link, useHistory } from 'react-router-dom';
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js"
import { getBasketTotal } from '../context/reducer';
import CurrencyFormat from 'react-currency-format';
import axios from '../axios';


function Payment() {

    const [{ user, basket }, dispatch] = useStateValue();
    const [error, setError] = useState(null)
    const [disabled, setDisabled] = useState(null)
    const [succeeded, setSucceeded] = useState(null)
    const [processing, setProcessing] = useState(null)

    //for card payment system
    const stripe = useStripe();
    const elements = useElements();

    const [clientSecret, setClientSecret] = useState(true)
    const history = useHistory()

    useEffect(() => {
        //generate the special stripe secret which allows us to charge cutomer and as cart changes reload this effect
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                //stripe expect you a total in currency subunits so * by 100
                url: '/payments/create?total=${ getBasketTotal(basket) *100}'
            })
            setClientSecret(response.data.clientSecret)
        }

        getClientSecret();
    }, [basket])

    console.log("the secret key is >>>>", clientSecret)


    const handleSubmit = async (event) => {
        event.preventDefault();
        setProcessing(true); //stop the buy now btn to click more than once

        //it uses the client secret to know how much to charge a customer
        //and send that payload to stripe.
        //card elemnts are all no, cvv,dd/mm
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            //paymentIntent means the confirmation from stripe
            setSucceeded(true)
            setError(null)
            setProcessing(false)
            history.replace('/orders')
        })
    }

    const handleChange = (event) => {
        //Listen for change in card element
        //and display any error as the customer types in their detail
        setDisabled(event.empty)
        setError(event.error ? event.error.message : "")
    }

    return (
        <div className="payment">
            <div className="payment__container">
                <h1>
                    Checkout(<Link to="/checkout">{basket?.length} items</Link>)
                </h1>
                {/* payment address */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>123 react lane</p>
                        <p>Uttar Pradesh, India</p>
                    </div>
                </div>

                {/* items list */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and Delivery</h3>
                    </div>
                    <div className="payment__items">
                        {/* all the product */}
                        {basket.map(item => (
                            <CheckoutProduct
                                key={item.id}
                                id={item.id}
                                image={item.image}
                                title={item.title}
                                price={item.price}
                                rating={item.rating}

                            />

                        ))}
                    </div>
                </div>

                {/* payment method */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        {/* stripe for payment */}
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />
                            <div className="payment__priceContainer">
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <h3>Order Total : {value}</h3>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                />
                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                </button>
                            </div>
                            {error && <div>{error}</div>}
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Payment
