import './App.css'
import Header from './components/header/Header'
import Home from './components/home/Home';

import { Route, BrowserRouter, Routes } from "react-router-dom";

function App() {

  return (

    //1:35
    <BrowserRouter>
      <Routes>
        <Route path="/checkout" />
        <Route path='/' element={
          [<Header key={1} />, <Home key={2} />]} 
        />
        <Route path='/home' element={<Home />} />
        <Route path='/checkout' />
      </Routes>
    </BrowserRouter>
  )
}

export default App
