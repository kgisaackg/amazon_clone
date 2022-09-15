import React from 'react';
import './product.css';

function Product() {
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
        <button className="product__button">Add to Cart</button>
      </div>
    </div>
  )
}

export default Product