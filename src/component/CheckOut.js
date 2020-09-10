import React from 'react'
import "./Checkout.css"
import SubTotal from "../component/SubTotal"

function CheckOut() {
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout_ad"
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" />
                <div>
                    <h2 className="checkout__title">Your Checkout Basket</h2>
                    {/* basket Items */}
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
