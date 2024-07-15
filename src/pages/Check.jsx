import React from 'react';
import { MdDelete } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart, removeFromCart } from '../redux/CartSlice';

const Check = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const subtotal = calculateSubtotal();
  const shippingFee = 30; // Example shipping fee
  const orderTotal = subtotal + shippingFee;

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="w-full md:w-[80%] mx-auto border m-2">
      <div className="grid grid-cols-6 bg-gray-500 font-semibold text-white p-2 justify-items-center">
        <h2 className="col-span-2">Item</h2>
        <h2>Price</h2>
        <h2>Quantity</h2>
        <h2>Subtotal</h2>
        <h2>Remove</h2>
      </div>
      {cartItems.map((item) => (
        <div key={item.id} className="grid grid-cols-6 font-semibold p-2 mt-2 justify-items-center">
          <h3 className="col-span-2">
            <img src={item.image} alt={item.title} className="w-8 h-8 inline-block mr-2" />
            {item.title}
          </h3>
          <h3>${item.price}</h3>
          <h3>{item.quantity}</h3>
          <h3>${item.price * item.quantity}</h3>
          <h3 onClick={() => handleRemoveItem(item.id)}>
            <MdDelete />
          </h3>
        </div>
      ))}
      <div className="flex justify-end m-3">
        <button onClick={() => dispatch(clearCart())} className="bg-blue-500 p-2 rounded text-white hover:bg-black">
          Clear Cart
        </button>
      </div>
      <div className="flex justify-between p-2 m-4 font-semibold">
        <h3>Subtotal:</h3>
        <h3>${subtotal}</h3>
      </div>
      <div className="flex justify-between p-2 m-4 font-semibold">
        <h3>Shipping Fee:</h3>
        <h3>${shippingFee}</h3>
      </div>
      <hr />
      <div className="flex justify-between p-2 m-4 font-semibold">
        <h3>Order Total:</h3>
        <h3>${orderTotal}</h3>
      </div>
    </div>
  );
};

export default Check;
