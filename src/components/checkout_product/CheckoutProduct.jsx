import React from "react";
import "./CheckoutProduct.css"
import { useStateValue } from "../StateProvider";

function CheckoutProduct({description, price, image}) {

  const [state, dispatch] = useStateValue();

  const removeFromBasket = (value) => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      item: {
        id: "fs",
        image: "hdtewre",
        price: 120,
        rating: "Rating",
        description: "lorem dfafda fdfda"
      }
    })
  }

  return (
    <div className="checkoutProduct">
      <img src={image} alt="" className="checkoutProduct__image" />
      <div className="checkoutProduct__card">
        <p className="checkoutProduct__description">{description}</p>
        <p className="checkoutProduct__rating">⭐</p>
        <button className="checkoutProduct__button" onClick={() => removeFromBasket("value based here.") }>Remove from Cart</button>
      </div>
    </div>
  )
}

export default CheckoutProduct