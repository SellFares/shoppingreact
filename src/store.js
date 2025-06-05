// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice'; // Correct path if CartSlice.jsx is in src/

// Create a Redux store using configureStore from Redux Toolkit
const store = configureStore({
    // Define the root reducer object
    reducer: {
        // 'cart' is the name of the slice in the store, and it's managed by cartReducer
        cart: cartReducer,
        // You can add other reducers here if your application grows
    },
    // Redux DevTools Extension is enabled by default in development mode with configureStore
});

export default store;
