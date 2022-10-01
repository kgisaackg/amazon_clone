import React from 'react';
import "./payment.css"
function Payment() {

  return (
    <div className="payment">
      <div className="payment__header">
        Checkout<span> ( 1 items)</span>
      </div>
      <div className="payment__address">
        <h3 className="payment__addressTitle">Delivery Address</h3>
        <div className="payment__addressInfo">
          isaaackagmalelele<br />
          123 Lorem, ipsum.<br />
          Johanessburg,
        </div>
      </div>
      <div className="payment__items">
        <h3 className="payment__itemsPrice">Lorem ipsum dolor sit.</h3>
        <img className="payment__itemImage" src="" alt="" />
        <div className="payment__itemsDescription">
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.2</h3>
          <p>
            <small>R </small>
            <strong>120.00</strong>
          </p>
          <p >⭐</p>
          <button>Add to Cart</button>
        </div>
      </div>
      <div>
        <h3>Payment Method</h3>
        <div>
          <h3>Card Details</h3>
          <div>
            <p>Card Number</p>
            <p>MM / YY CVC</p>
          </div>
          <div>
            <h3>Order Total:
              <small>R </small>
              <strong>120.00</strong>
            </h3>
            <button>Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment