import React from "react";
import './checkout.css'

function Checkout() {

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img 
        src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" 
        alt="not_found" className="checkout__add" />
        <p className="checkout__header">Your Shopping Basket</p>
        {/*The bellow should be a component*/}

        <div className="checkout__items">
          <img src="https://m.media-amazon.com/images/I/41Ll5WiYZVL.jpg" alt="" className="item__image" />
          <div className="item__card">
            <p className="item__description">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <p className="item__rating">⭐</p>
            <button className="item__button">Add to Cart</button>
          </div>
        </div>
      </div>
      <div className="checkout__right">
        <p>Subtotal (2 items): <strong>R 2500.00</strong></p>
        <p>
          <input type="checkbox" name="" id="" /> This order contains a gift
        </p>
        <button className="item__button item__buttonCheckout">Proceed to Checkout</button>
      </div>
    </div>
  )
}

export default Checkout