import React from 'react'
import "./Product.css"
import "../App.css"
import { useStateValue } from '../context/StateProvider'
import { Snackbar, Fade } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import MangnifyImage from "./MangnifyImage"

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

function Product(props) {
    const classes = useStyles();

    //Similar like useState , dispatch will work for setting the data
    const [state, dispatch] = useStateValue();

    const [open, setOpen] = React.useState(false);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const addToBasket = () => {
        setOpen(true);
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
        <>
            <div className='product card'>
                <div className="product__info" id={props.id}>
                    <p>{props.title}</p>
                    <p className="product__price">
                        <small>$</small>
                        <strong>{props.price}</strong>
                    </p>
                    <div className="product__rating">
                        {Array(props.rating).fill().map((_, i) => (<p>⭐</p>))}
                    </div>

                </div>
                <img src={props.image} />
                <button className="btn" onClick={addToBasket}>Add to Basket</button>
            </div>
            <Snackbar
                open={open}
                onClose={handleClose}
                autoHideDuration={600}
                anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
            >
                <Alert onClose={handleClose} severity="success">
                    Added To Cart!
         </Alert>

            </Snackbar>
            {/* <MangnifyImage /> */}
        </>
    )
}

export default Product
