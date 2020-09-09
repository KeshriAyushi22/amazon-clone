import React from 'react'
import "./Header.css"
import SearchIcon from '@material-ui/icons/Search';
import { ShoppingCart } from '@material-ui/icons'

function Header() {
    return (
        <div className="header">
            <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                className="header__logo" />

            <div className="header__search">
                <input className="header__searchInput" type="text" />
                <SearchIcon className="header__searchIcon" />
            </div>
            <div className="header__nav">
                <div className="header__option">
                    {/* language */}
                </div>
                <div className="header__option">
                    <span className="header__optionOne">Hello Guest</span>
                    <span className="header__optionTwo">Sign In</span>
                </div>
                <div className="header__option">
                    <span className="header__optionOne">Rewards</span>
                    <span className="header__optionTwo">& Orders</span>
                </div>
                <div className="header__option">
                    <span className="header__optionOne">Your</span>
                    <span className="header__optionTwo">Prime</span>
                </div>
                <div className="header__optionBasket">
                    <ShoppingCart fontSize="large" />
                    <div className="header__option">
                        <span className="header__optionOne header__basketCount">0</span>
                        <span className="header__optionTwo">Cart</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Header
