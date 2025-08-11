import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';

// Configure the Redux store
const store = configureStore({
  reducer: {
    // cart slice of state managed by cartReducer
    cart: cartReducer,
  },
});

// Exporting the store so it can be used across the app
export default store;
