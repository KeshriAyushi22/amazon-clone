import React, { useState } from 'react'

import SearchIcon from '@material-ui/icons/Search';
import { ShoppingCart } from '@material-ui/icons'
import LocalizedStrings from 'react-localization';
import { intl } from '../utils/localised'
import Flag from 'react-world-flags'
import { Link } from 'react-router-dom'

import { dropDown } from "../utils/MaterialUtil"
import { langItem } from '../utils/CommonUtil'
import "./Header.css"
import { useStateValue } from '../context/StateProvider';


function Header() {

    const [state, dispatch] = useStateValue();

    console.log(state)
    const setLanguage = (ln) => {
        dispatch({
            type: "CHANGE_LANG",
            lang: ln
        })
    }

    let strings = new LocalizedStrings(intl)
    strings.setLanguage(state.lang);

    return (
        <div className="header">
            <Link to="/">
                <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    className="header__logo" />
            </Link>

            <div className="header__search">
                <input className="header__searchInput" type="text" />
                <SearchIcon className="header__searchIcon" />
            </div>

            <div className="header__optionFlag">
                <Flag code={'IN'} className="country__flag" />
                {dropDown("ln", "lang", state.lang, langItem, e => setLanguage(e.target.value))}
            </div>

            <div className="header__nav">
                <Link to="/login">
                    <div className="header__option">
                        <span className="header__optionOne">{strings.hello}, Guest</span>
                        <span className="header__optionTwo">{strings.signIn}</span>
                    </div>
                </Link>
                <div className="header__option">
                    <span className="header__optionOne">{strings.rewards}</span>
                    <span className="header__optionTwo">{strings.orders}</span>
                </div>
                <div className="header__option">
                    <span className="header__optionOne">{strings.your}</span>
                    <span className="header__optionTwo">{strings.prime}</span>
                </div>
                <div className="header__optionBasket">
                    <Link to="/checkout">
                        <ShoppingCart fontSize="large" />
                    </Link>
                    <div className="header__option">
                        <span className="header__optionOne header__basketCount">{state.basket?.length}</span>
                        <span className="header__optionTwo">{strings.cart}</span>

                    </div>
                </div>
            </div>

        </div >
    )
}

export default Header
