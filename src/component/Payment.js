import React, { useState } from 'react'
import "./Payment.css"
import { useStateValue } from "../context/StateProvider"
import CheckoutProduct from './CheckoutProduct';
import { Link } from 'react-router-dom';
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js"


function Payment() {

    const [{ user, basket }, dispatch] = useStateValue();
    const [error, setError] = useState(null)
    const [disabled, setDisabled] = useState(null)

    //for card payment system
    const stripe = useStripe();
    const elemnts = useElements();

    const handleSubmit = () => {

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
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Payment
