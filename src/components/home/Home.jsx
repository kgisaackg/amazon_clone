import React from 'react';
import Product from '../product/Product';
import './home.css';

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <div className="home__row">
          <Product description="Most people think success comes from good luck or enormous talent, but many successful people achieve their accomplishments in a simpler way: through self-discipline. Brian Tracy knows this firsthand."
            price={180.00} image="https://m.media-amazon.com/images/I/51e6+Tmt0jL.jpg" />
          <Product description="For David Goggins, childhood was a nightmare--poverty, prejudice, and physical abuse colored his days and haunted his nights. But through self-discipline,..."
            price={182.00} image="https://m.media-amazon.com/images/I/51c4H3VBciL.jpg" />
        </div>
        <div className="home__row">
          <Product description="​Don't Sweat the Small Stuff...and It's All Small Stuff is a book that tells you how to keep from letting the little things in life drive you crazy."
            price={190.00} image="https://m.media-amazon.com/images/I/41zRbw3zz2L._SX218_BO1,204,203,200_QL40_FMwebp_.jpg"/>
          <Product description="In his early 20s, Curtis Jackson, known as 50 Cent, rose to the heights of fame and power in the cutthroat music business. A decade ago, the multi-platinum selling rap artist decided to pivot. "
            price={185.00} image="https://m.media-amazon.com/images/I/91SHwBxMJbL._AC_UY327_FMwebp_QL65_.jpg"/>
          <Product description="Based on extensive research and one-on-one interviews with more than 50 of the most legendary financial experts in the world - from Carl Icahn and Warren Buffett, to Ray Dalio and Steve Forbes..."
            price={187.00} image="https://m.media-amazon.com/images/I/91S7IaFislL._AC_UY327_FMwebp_QL65_.jpg" />
        </div>
        <div className="home__row">
          <Product description="This is the story of the only survivor of Operation Redwing, SEAL team leader Marcus Luttrell, and the extraordinary firefight that led to the largest loss of life in American Navy SEAL history. "
            price={175.00} image="https://m.media-amazon.com/images/I/91F19WNp18L._AC_UY327_FMwebp_QL65_.jpg" />
        </div>
      </div>
    </div>
  )
}

export default Home