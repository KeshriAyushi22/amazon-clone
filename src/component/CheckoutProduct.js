import React, { forwardRef } from 'react'
import "./CheckoutProduct.css"
import { useStateValue } from '../context/StateProvider';
import LocalizedStrings from 'react-localization';
import { intl } from '../utils/localised';


const CheckoutProduct = forwardRef(
    ({ id, image, title, price, rating }, ref) => {

        const [{ basket, lang }, dispatch] = useStateValue();


        const removeFromBasket = () => {
            dispatch({
                type: "REMOVE_FROM_BASKET",
                id: id
            });
        };

        return (
            <div ref={ref} className="checkoutProduct">
                <img className="checkoutProduct__image" src={image} />
                <div className="checkoutProduct__info">
                    <p className="checkoutProduct__title">{title}</p>
                    <p className="checkoutProduct__price">
                        <small>$</small>
                        <strong>{price}</strong>
                    </p>

                    <div className="checkoutProduct__rating">
                        {Array(rating).fill().map((_, i) => <p>star  </p>)}
                    </div>

                    <button onClick={removeFromBasket}>Remove from basket</button>
                </div>
            </div>
        )
    })

export default CheckoutProduct
