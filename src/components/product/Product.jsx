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
        <button>Add to cart</button>
      </div>
    </div>
  )
}

export default Product