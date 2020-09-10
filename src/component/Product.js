import React from 'react'
import "./Product.css"
import { useStateValue } from '../context/StateProvider'

function Product(props) {

    //Similar like useState , dispatch will work for setting the data
    const [state, dispatch] = useStateValue();
    const addToBasket = () => {
        //dispatch(send) the item to data Layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: props.id,
                title: props.title,
                price: props.price,
                image: props.image,
                rating: props.rating
            }
        })
    }


    return (
        <div className='product'>
            <div className="product__info" id={props.id}>
                <p>{props.title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{props.price}</strong>
                </p>
                <div className="product__rating">
                    {Array(props.rating).fill().map((_, i) => (<p>star</p>))}
                </div>

            </div>
            <img src={props.image} />
            <button className="btn" onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product
