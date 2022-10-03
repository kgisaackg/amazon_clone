import React from 'react';
import reducer, { initialState } from '../reducer';
import { useStateValue } from '../StateProvider';
import './product.css';

function Product({description, price, image}) {
  const [state, dispatch] = useStateValue(reducer, initialState);

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: "fs",
        image: image,
        price: price,
        rating: "Rating",
        description: description
      }
    })
  }

  return (
    <div className="product">
      <div className="product__card">
        <p>{description}</p>
        <p className="product__price">
          <small>R </small>
          <strong>{price}</strong>
        </p>
        <p className="product__rating">⭐</p>
        <img src={image} alt="" className="product__image" />
        <button onClick={() => addToBasket()} className="product__button">Add to Cart</button>
      </div>
    </div>
  )
}

export default Product