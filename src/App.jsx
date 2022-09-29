import './App.css'
import Header from './components/header/Header'
import Home from './components/home/Home';
import Checkout from './components/checkout/Checkout'

import {
  Route,
  BrowserRouter,
  Routes
} from "react-router-dom";

function App() {

  return (

    //2:05

    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
