import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './FontAwesome';

const Icon = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className='flex'>
      <Link to="/shoppingCart">
        <div className='relative'>
          <FontAwesomeIcon icon="fa-shopping-cart" className='hover:text-red-500  text-2xl' />
          {cartItemCount > 0 && (
            <span className='absolute -top-2 text-white -right-2 bg-red-500 rounded-3xl px-2 text-sm'>
              {cartItemCount}
            </span>
          )}
        </div>
      </Link>
    </div>
  );
};

export default Icon;
