import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize the cart array as an empty array
  },
  reducers: {
    addItem: (state, action) => {
        const { name, image, cost } = action.payload;
        const existingItem = state.items.find(item => item.name === name);
        if (existingItem) {
          existingItem.quantity++;
        } else {
          state.items.push({ name, image, cost, quantity: 1 });
        }
      },
    updateQuantity: (state, action) => {
        const { name, quantity } = action.payload;
        const itemToUpdate = state.items.find(item => item.name === name);
        if (itemToUpdate) {
          itemToUpdate.quantity = quantity;
        }
    },
    removeItem: (state, action) => {
        state.items = state.items.filter(item => item.name !== action.payload);
    },
  },
});

export const { addItem, updateQuantity, removeItem } = cartSlice.actions;
export default cartSlice.reducer;