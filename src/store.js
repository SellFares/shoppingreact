import { configureStore } from '@reduxjs/toolkit';
// This path assumes CartSlice.jsx is in the same directory as store.js,
// or that your project is structured such that './CartSlice' resolves correctly.
// If CartSlice.jsx is in 'src/store/CartSlice.jsx' and this store.js is also in 'src/store/',
// then './CartSlice' is correct.
// If CartSlice.jsx is in 'src/CartSlice.jsx' (from your initial screenshot), and store.js is also in src/,
// then './CartSlice' is correct.
import cartReducer from './CartSlice'; // Please verify this path based on your actual file locations

// Create a Redux store using configureStore from Redux Toolkit
const store = configureStore({
    // Define the root reducer object
    reducer: {
        // 'cart' is the name of the slice in the store, and it's managed by cartReducer
        cart: cartReducer,
        // You can add other reducers here if your application grows
        // e.g., products: productsReducer,
    },
});

export default store; // Export the store for use in the app (e.g., in main.jsx: <Provider store={store}>)
