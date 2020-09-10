import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../context/StateProvider";

function SubTotal() {

    const [{ basket }, dispatch] = useStateValue();

    const getBasketTotal = () => {
        console.log(basket)
        //need to read the item
    }


    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket} items) :<strong>{`${value}`}</strong>
                            <small className="subtotal__gift">
                                <input type="checkbox" />
                                This order conatins a gift
                            </small>
                        </p>
                    </>
                )}
                decimalScale={2}
                value={() => getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}  //need to fetch it accordingly
            />
            <button>Proceed to Checkout</button>
        </div>
    );
}

export default SubTotal;
