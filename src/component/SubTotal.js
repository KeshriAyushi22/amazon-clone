import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { ShoppingBasket } from "@material-ui/icons";

function SubTotal() {
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => {
                    <>
                        <p>
                            Subtotal ({basket.total} items) :<strong>{`${value}`}</strong>
                            <small className="subtotal__gift">
                                <input type="checkbox" />
                This order conatins a gift
              </small>
                        </p>
                    </>;
                }}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}  //need to fetch it accordingly
            />
            <button>Proceed to Checkout</button>
        </div>
    );
}

export default SubTotal;
