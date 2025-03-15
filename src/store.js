import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';
 const store = configureStore({
    reducer: {
        cart: cartReducer,  // cart is the key and cartReducer is the value
    },
});
export default store
