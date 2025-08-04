// src/CartSlice.jsx
import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Stores cart items
  },
  reducers: {
    // Add item to the cart (or increase quantity if it's already in the cart)
    addItem: (state, action) => {
      const existingProduct = state.items.find(item => item.name === action.payload.name);
      
      if (existingProduct) {
        existingProduct.quantity += 1; // Increment quantity if already in the cart
      } else {
        state.items.push({ ...action.payload, quantity: 1 }); // Add new item with quantity 1
      }
    },
    
    // Remove item from the cart
    removeItem: (state, action) => {
      const productName = action.payload;
      state.items = state.items.filter(item => item.name !== productName); // Remove the item by name
    },
    
    // Update the quantity of a specific product
    updateQuantity: (state, action) => {
      const { productName, quantity } = action.payload;
      const product = state.items.find(item => item.name === productName);
      
      if (product) {
        product.quantity = quantity; // Update the quantity
      }
    },
  },
});

// Export actions to use in the components
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

// Export reducer to use in store configuration
export default CartSlice.reducer;
