import React from 'react'
import { MdDelete } from "react-icons/md";

const Check = () => {
  return (
    <div className='w-[80%] mx-auto border m-3'>
      <div className=' grid grid-cols-6 bg-gray-500 font-semibold text-white p-2  justify-items-center'>
        <h2 className='col-span-2'>Item</h2>
        <h2>Price</h2>
        <h2>Quantity</h2>
        <h2>Subtotal</h2>
        <h2>Remove</h2>
      </div>
      <div className='grid grid-cols-6  font-semibold  p-2 mt-2 justify-items-center'>
        <h3 className='col-span-2'><img src=''/>America T-shirt</h3>
        <h3>$40</h3>
        <h3>1</h3>
        <h3>$400</h3>
        <h3><MdDelete /></h3>
      </div>
      <div className='flex justify-end m-3'>
        <button className='bg-blue-500 p-2 rounded text-white hover:bg-black '>Clear Cart</button>
      </div>
      <div className='flex justify-between p-2 m-4 font-semibold'>
        <h3 className=''>Subtotal:</h3>
        <h3>$4000</h3>
      </div>
      <div className='flex justify-between p-2 m-4  font-semibold'>
        <h3 className=''>Shipping Fee:</h3>
        <h3>$40</h3>
      </div>
      <hr/>
      <div className='flex justify-between p-2 m-4 font-semibold'>
        <h3 className=''>Order Totoal:</h3>
        <h3>$4040</h3>
      </div>
    </div>
  )
}

export default Check
