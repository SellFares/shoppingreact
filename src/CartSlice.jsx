import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find((i) => i.name === item.name);

      if (existingItem) {
        // If the item already exists, update its quantity
        existingItem.quantity += item.quantity;
      } else {
        // If the item does not exist, add it to the cart
        item.quantity = 1 // Ensure quantity is set
        state.items.push(item);
      }

      console.log('Item added to cart:', item);
    },

    removeItem: (state, action) => {
      const itemId = action.payload;
      state.items = state.items.filter((item) => item.name !== itemId);
    },

    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const item = state.items.find((i) => i.name === name);

      if (item) {
        // Update the quantity of the item if it exists
        item.quantity = quantity;
      }
    },

  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
