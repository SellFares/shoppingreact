// CartSlice.jsx
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: []
  },
  reducers: {
    // ADD ITEM TO CART
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.name === newItem.name);

      if (!existingItem) {
        state.items.push({ ...newItem, quantity: 1 });
      } else {
        existingItem.quantity += 1; // Optional: update quantity if already added
      }
    },

    // REMOVE ITEM FROM CART
    removeItem: (state, action) => {
      const nameToRemove = action.payload;
      state.items = state.items.filter(item => item.name !== nameToRemove);
    },

    // UPDATE ITEM QUANTITY
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const itemToUpdate = state.items.find(item => item.name === name);

      if (itemToUpdate && quantity > 0) {
        itemToUpdate.quantity = quantity;
      }
    }
  }
});

// Export action creators
export const { addItem, removeItem, updateQuantity } = cartSlice.actions;

// Export reducer for store.js
export default cartSlice.reducer;
