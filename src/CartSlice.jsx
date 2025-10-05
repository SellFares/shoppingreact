import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    // Adds an item to the cart or increments its quantity if it already exists
    addItem: (state, action) => {
      const existingItem = state.items.find(item => item.name === action.payload.name);
      if (existingItem) {
        // If item exists, just increase the quantity
        existingItem.quantity += 1;
      } else {
        // If item doesn't exist, add it to the cart with a quantity of 1
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    // Removes an item from the cart completely
    removeItem: (state, action) => {
      // Filter out the item that matches the name in the payload
      state.items = state.items.filter(item => item.name !== action.payload.name);
    },
    // Updates the quantity of a specific item
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const itemToUpdate = state.items.find(item => item.name === name);
      if (itemToUpdate) {
        // Set the quantity to the new value
        itemToUpdate.quantity = quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;