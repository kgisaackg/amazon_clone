import React from "react";
import "./CheckoutProduct.css"
import { useStateValue } from "../StateProvider";

function CheckoutProduct() {

  const [state, dispatch] = useStateValue();

  const removeFromBasket = (value) => {
    console.log(value);
    dispatch({
      type: "REMOVE_FROM_BASKET",
      item: {
        id: "fs",
        image: "hdtewre",
        price: 120,
        rating: "Rating"
      }
    })
  }

  return (
    <div className="checkoutProduct">
      <img src="https://m.media-amazon.com/images/I/41Ll5WiYZVL.jpg" alt="" className="checkoutProduct__image" />
      <div className="checkoutProduct__card">
        <p className="checkoutProduct__description">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        <p className="checkoutProduct__rating">⭐</p>
        <button className="checkoutProduct__button" onClick={() => removeFromBasket("value based here.") }>Remove from Cart</button>
      </div>
    </div>
  )
}

export default CheckoutProduct