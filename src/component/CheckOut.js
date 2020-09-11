import React from 'react'
import "./Checkout.css"
import SubTotal from "../component/SubTotal"
import LocalizedStrings from "react-localization";
import { intl } from '../utils/localised'
import { useStateValue } from '../context/StateProvider';
import CheckoutProduct from './CheckoutProduct';
import FlipMove from 'react-flip-move';

function CheckOut() {
    const [{ basket, user, lang }, dispatch] = useStateValue();
    let strings = new LocalizedStrings(intl)
    strings.setLanguage(lang);

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout_ad"
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" />
                <div>
                    <h3>Hello , {user?.email}</h3>
                    <h2 className="checkout__title">{strings.checkout}</h2>
                    <FlipMove easing="ease-in" duration={500} staggerDurationBy={20} staggerDelayBy={20}>
                        {basket.map(item => {
                            return (
                               
                                    <CheckoutProduct
                                        key={item.id}
                                        id={item.id}
                                        image={item.image}
                                        title={item.title}
                                        price={item.price}
                                        rating={item.rating}

                                    />
                               
                            )
                        }
                        )}
                    </FlipMove>
                </div>
            </div>
            <div className="checkout__right">
                {/* subtotal Component */}
                <SubTotal />
            </div>
        </div>
    )
}

export default CheckOut
