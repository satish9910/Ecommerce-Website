import React from 'react'
import { Route, BrowserRouter as Router,Routes } from 'react-router-dom'
import Header from './common/Header'
import Footer from './common/Footer'
import Home from './pages/Home'
import Features from './pages/Features'
import Product from './pages/Product'
import Check from './pages/Check'
import { useState,useEffect } from 'react'
import axios from 'axios';
import { Provider } from 'react-redux';
import store from './redux/Store';

const App = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching the products", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <Provider store={store}>
      <Router>
        <Header   searchQuery={searchQuery} setSearchQuery={setSearchQuery}  />
        <Routes>
          <Route path='/' element={<Home   products={products} searchQuery={searchQuery} />}/>
          <Route path='/feature' element={<Features/>}/>
        
          <Route path='/product/:id' element={<Product/>}/>
          <Route path='/shoppingCart' element={<Check/>}/>
         
        </Routes>
        <Footer/>
      </Router>
      </Provider>
    </div>
  )
}

export default App
