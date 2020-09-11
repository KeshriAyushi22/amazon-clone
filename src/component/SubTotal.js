import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../context/StateProvider";
import LocalizedStrings from "react-localization";
import { intl } from '../utils/localised'
import { getBasketTotal } from "../context/reducer";
import { useHistory } from 'react-router-dom'

function SubTotal() {

    const [{ basket, lang }, dispatch] = useStateValue();
    let strings = new LocalizedStrings(intl)
    strings.setLanguage(lang);

    const history = useHistory();


    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>{console.log(value)}
                        <p>
                            {strings.subtotal} ({basket?.length} {strings.item}) :<strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" />
                            {strings.gift} 🎁
                        </small>

                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}  //need to fetch it accordingly
            />
            <button onClick={e => history.push('/payment')}>{strings.proceed_pay}</button>
        </div>
    );
}

export default SubTotal;
