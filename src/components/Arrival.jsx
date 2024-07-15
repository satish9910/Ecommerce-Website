import React from 'react';
import Heading from '../common/Heading';
import ProductCard from '../common/ProductCard';

const Arrival = ({ products, searchQuery }) => {
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className='p-8 overflow-hidden text-center relative bg-gray-50 z-0'>
        <Heading title="New Arrival" description="Shop the new collection of new arrival at our store. Fill out your wishlist items." />
      </div>
      <div className="container mx-auto p-4 bg-gray-50">
        <div className="flex flex-col justify-center items-center gap-6 lg:flex-row lg:flex-wrap md:flex-row md:flex-wrap">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Arrival;
