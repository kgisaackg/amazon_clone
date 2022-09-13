import React from 'react';
import Product from '../product/Product';
import './home.css';

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <div className="home__row">
          <Product />
          <Product />
        </div>
        <div className="home__row">
          <Product />
          <Product />
          <Product />
        </div>
        <div className="home__row">
          <Product />
        </div>
      </div>
    </div>
  )
}

export default Home