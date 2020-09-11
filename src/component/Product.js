import React from 'react'
import ReactImageMagnify from 'ReactImageMagnify';
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
            <ReactImageMagnify className="product__image"
                {...{
                    smallImage: {
                        alt: 'Product Image',
                        isFluidWidth: true,
                        src: src.small,
                        srcSet: props.image,
                        sizes: '(max-width: 480px) 100vw, (max-width: 1200px) 30vw, 360px'
                    },
                    largeImage: {
                        src: src.large,
                        width: 1426,
                        height: 2000
                    },
                    lensStyle: { backgroundColor: 'rgba(0,0,0,.6)' }
                }}

            />
            {/* <img src={props.image} /> */}
            <button className="btn" onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product
