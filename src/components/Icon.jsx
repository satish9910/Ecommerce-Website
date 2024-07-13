import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './FontAwesome';
import { Link } from 'react-router-dom';

const Icon = () => {
  return (
    <div className='flex'>
    <Link to="/shoppingCart">
    <div className='relative'>
      <FontAwesomeIcon icon="fa-shopping-cart" className='hover:text-red-500  text-2xl '/>
      <span className='absolute -top-2 text-white -right-2 bg-red-500 rounded'>0</span>
      </div>
      </Link>
    </div>
  )
}

export default Icon
