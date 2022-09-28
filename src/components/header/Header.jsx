import React from 'react'
import './header.css'
import reducer, { initialState } from '../reducer';
import { useStateValue } from '../StateProvider';

import { FaBasketballBall, FaSearch } from 'react-icons/fa';
import { MdShoppingBasket } from 'react-icons/md';

function Header() {
  const [state, dispatch] = useStateValue(reducer, initialState);

  console.log("header State", state)
  return (
    <div className='header'>
      <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <FaSearch className="header__searchIcon" />
      </div>
      <div className="header__icons">
        <div className="header__option">
          <span className="header__option1">
            Hello Guest
          </span>
          <span className="header__option2">
            Sign In
          </span>
        </div>
        <div className="header__option">
          <span className="header__option1">
            Return&
          </span>
          <span className="header__option2">
            Orders
          </span>
        </div>
        <div className="header__option">
          <span className="header__option1">
            Your
          </span>
          <span className="header__option2">
            Prime
          </span>
        </div>

        <div className="header__optionBasket">
          <MdShoppingBasket className="header__basketIcon" />
          <span className="header__option2 header__basketCount">{state.basket.length}</span>
        </div>
      </div>
    </div>
  )
}

export default Header