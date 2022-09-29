import React, { useEffect, useState } from "react";
import CheckoutProduct from "../checkout_product/CheckoutProduct";
import reducer, { initialState } from '../reducer';
import { useStateValue } from '../StateProvider';

import './checkout.css'

function Checkout() {

  const [state, dispatch] = useStateValue(reducer, initialState);

  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    console.log("Hello world", state.basket.length);
  }, [])

  const calculateTotalPrice = (state) => {
    let total = 0
    state.basket.forEach(basketItem => {
      total += basketItem.price;
    });

    console.log(total)
    return total;
  }

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="not_found" className="checkout__add" />
        <p className="checkout__header">Your Shopping Basket</p>

        {
          state.basket.map((basket, index) => {
            return <CheckoutProduct />
          })
        }
      </div>
      <div className="checkout__right">
        <p>Subtotal ({state.basket.length} items): <strong>R {calculateTotalPrice(state)}</strong></p>
        <p>
          <input type="checkbox" name="" id="" /> This order contains a gift
        </p>
        <button className="item__button item__buttonCheckout">Proceed to Checkout</button>
      </div>
    </div>
  )
}

export default Checkout