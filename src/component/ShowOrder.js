import React from 'react'
import "./ShowOrder.css"
import moment from 'moment'
import CheckoutProduct from './CheckoutProduct'
import CurrencyFormat from 'react-currency-format'
import { getBasketTotal } from '../context/reducer'



function ShowOrder({ order }) {

    return (
        <div className="order">
            <h2>Order</h2>
            <p>{moment.unix(order.data.created).format("MMMM Do YYYY,h:mma")}</p>
            <p className="order_id">
                <small>{order.id}</small>
            </p>
            {order.data.basket?.map(item => (
                <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    rating={item.rating}
                    image={item.image}
                    hideButton
                />
            ))}
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <h3 className="order__total">Order Total : {value}</h3>

                    </>
                )}
                decimalScale={2}
                value={order.data.amount / 100}  //since it was in cents we are diving it here
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}  //need to fetch it accordingly
            />
        </div>
    )
}

export default ShowOrder
