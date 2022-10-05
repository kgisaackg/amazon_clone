import './App.css'
import Header from './components/header/Header'
import Home from './components/home/Home';
import Checkout from './components/checkout/Checkout'

import {
  Route,
  BrowserRouter,
  Routes
} from "react-router-dom";
import SignIn from './components/signin/SignIn';
import Payment from './components/payment/payment';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

function App() {

  return (

    //4:07
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<><Header /><Home /></>} />
        <Route path='/checkout' element={<><Header /><Checkout /></>} />
        <Route path='/home' element={<Home />} />
        <Route path='/payment' element={<><Header /><Payment /></>} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='*' element={<h1>Error Page Not Found.</h1>} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
