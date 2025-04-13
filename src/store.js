// store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice'; // adjust path if needed

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
