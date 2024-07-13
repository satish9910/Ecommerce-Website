
import Heading from '../common/Heading'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../common/ProductCard';
import { Link } from 'react-router-dom';



const Arrival = () => {

  const [products, setProducts] = useState([]);

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
    <>
    <div className='p-8 overflow-hidden text-center relative bg-gray-50 z-0'>
      <Heading title = "New Arrival " description=" Shop the new collection of new arrival at our store. fill out your wishlist items "/>
    </div>
    <div className="container mx-auto p-4  bg-gray-50">
      <div className="flex flex-col justify-center items-center gap-6 lg:flex-row lg:flex-wrap md:flex-row md:flex-wrap">
        {products.map(product => (
        
            <ProductCard key={product.id} product={product} />
      
        ))}
      </div>
    </div>
    </>
  )
}

export default Arrival;
