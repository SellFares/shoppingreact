// store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';

// Configure Redux store
const store = configureStore({
  reducer: {
    // 'cart' slice is managed by cartReducer
    cart: cartReducer,
  },
  // Optional: add middleware or devTools configuration if needed
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  // devTools: process.env.NODE_ENV !== 'production',
});

export default store;
