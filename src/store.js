// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice.js';  // ← use the correct filename

export default configureStore({
  reducer: {
    cart: cartReducer,
  },
});
