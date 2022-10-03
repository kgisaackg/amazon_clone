import React from 'react';
import Product from '../product/Product';
import './home.css';

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <div className="home__row">
          <Product description="This is going to be first product"
            price="80.00" image="https://m.media-amazon.com/images/I/41Ll5WiYZVL.jpg" />
          <Product description="This is going to be second product"
            price="98.00" image="https://m.media-amazon.com/images/I/41Ll5WiYZVL.jpg" />
        </div>
        <div className="home__row">
          <Product description="This is going to be first product"
            price="200.00" image="https://m.media-amazon.com/images/I/41Ll5WiYZVL.jpg"/>
          <Product description="This is going to be first product"
            price="200.00" image="https://m.media-amazon.com/images/I/41Ll5WiYZVL.jpg"/>
          <Product description="This is going to be first product"
            price="200.00" image="https://m.media-amazon.com/images/I/41Ll5WiYZVL.jpg" />
        </div>
        <div className="home__row">
          <Product description="This is going to be first product"
            price="200.00" image="https://m.media-amazon.com/images/I/41Ll5WiYZVL.jpg" />
        </div>
      </div>
    </div>
  )
}

export default Home