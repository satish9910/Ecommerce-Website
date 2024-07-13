import React from 'react';
import {Link} from 'react-router-dom'

const ProductCard = ({ product }) => {
  console.log(product)
  return (
    <Link to={`/product/${product.id}`}>
    <div className=" cursor-pointer w-80 h-1/2 p-2 mb-8 box-border rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
      <img className="w-full h-48 object-contain" src={product.image} alt={product.title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.title.slice(0,30)}</div>
        <p className="text-gray-700 text-base">
          {product.description.substring(0, 50)}...
        </p>
        <div className="text-gray-900 font-bold text-xl mb-2">${product.price}</div>
      </div>
      {/* <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Category: {product.category}</span>
      </div> */}
    </div>
    </Link>
  );
};

export default ProductCard;
