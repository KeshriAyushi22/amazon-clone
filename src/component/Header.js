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


function Header() {
    //need to make it on context api
    const [lang, setLang] = useState('hin');
    console.log(lang);

    let strings = new LocalizedStrings(intl)
    strings.setLanguage(lang);
    console.log(strings)


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
                {dropDown("ln", "lang", lang, langItem, e => setLang(e.target.value))}
            </div>

            <div className="header__nav">
                <div className="header__option">
                    <span className="header__optionOne">{strings.hello}, Guest</span>
                    <span className="header__optionTwo">{strings.signIn}</span>
                </div>
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
                        <span className="header__optionOne header__basketCount">0</span>
                        <span className="header__optionTwo">{strings.cart}</span>

                    </div>
                </div>
            </div>

        </div >
    )
}

export default Header
