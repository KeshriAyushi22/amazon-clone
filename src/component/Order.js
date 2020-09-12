import React, { useState, useEffect } from 'react'
import "./Order.css"
import { db } from "../firebase"
import { useStateValue } from '../context/StateProvider';
import ShowOrder from './ShowOrder';
import LocalizedStrings from 'react-localization';
import { intl } from '../utils/localised'

function Order() {
    const [orders, setOrders] = useState();
    const [{ user, basket, lang }, dispatch] = useStateValue();
    let strings = new LocalizedStrings(intl)
    strings.setLanguage(lang);

    useEffect(() => {

        /**
         * 1)going to that user db
         * 2) then fetch the data of its uid
         * 3)then inside the doc get the db name as order
         * 4)then order by created date, all the orders we made
         * 5)as the orders table have the secretKey array with data so we need to iterate it
         * 6) save all the orders in descending order, so the most recent at the top in order page.
         */

        console.log(user)
        if (user) {
            db.collection('users')
                .doc(user?.uid)
                .collection('orders')
                .orderBy("created", "desc")
                .onSnapshot(snapshot => (
                    setOrders(snapshot.docs.map(doc => ({
                        data: doc.data(),
                        id: doc.id
                    })))
                ))
        } else { setOrders([]) }


    }, [user])


    return (

        <div className="order">
            {console.log(orders)}
            <h1>{LocalizedStrings.Your_Orders}</h1>
            <div className="orders_order">
                {orders?.map(order =>
                    <ShowOrder order={order} />
                )}
            </div>

        </div>
    )
}

export default Order
