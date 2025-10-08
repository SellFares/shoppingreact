import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';
import reducer from './CartSlice';


 const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});
export default store
