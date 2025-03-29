// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice'; // No ../reducers path needed

export default configureStore({
  reducer: {
    cart: cartReducer,
  },
});