import React from 'react';
import reducer, { initialState } from '../reducer';
import { useStateValue } from '../StateProvider';
import './product.css';

function Product() {
  const [state, dispatch] = useStateValue(reducer, initialState);

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: "fs",
        image: "hdtewre",
        price: 120,
        rating: "Rating"
      }
    })
  }

  return (
    <div className="product">
      <div className="product__card">
        <p>Lorem, ipsum dolor.</p>
        <p className="product__price">
          <small>R</small>
          <strong>20.00</strong>
        </p>
        <p className="product__rating">⭐</p>
        <img src="https://m.media-amazon.com/images/I/41Ll5WiYZVL.jpg" alt="" className="product__image" />
        <button onClick={() => addToBasket()} className="product__button">Add to Cart</button>
      </div>
    </div>
  )
}

export default Product