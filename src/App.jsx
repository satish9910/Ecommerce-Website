import React from 'react'
import { Route, BrowserRouter as Router,Routes } from 'react-router-dom'
import Header from './common/Header'
import Footer from './common/Footer'
import Home from './pages/Home'
import Features from './pages/Features'
import Product from './pages/Product'
import Check from './pages/Check'

const App = () => {
  return (
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/feature' element={<Features/>}/>
          <Route path='/product/:id' element={<Product/>}/>
          <Route path='/products' element={<Product/>}/>
          <Route path='/shoppingCart' element={<Check/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  )
}

export default App
