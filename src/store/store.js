import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice'; // Update path as needed

export default configureStore({
  reducer: {
    cart: cartReducer
  }
});