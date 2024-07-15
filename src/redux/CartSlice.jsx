import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
};

const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      console.log(item.id);
      
      const existingItem = state.cartItems.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...item, quantity: 1 });
      }
    },
    
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeFromCart: (state, action) => {
        state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
      },
 
  
   
  },
});

export const { addToCart, clearCart,removeFromCart } = CartSlice.actions;
export default CartSlice.reducer;
