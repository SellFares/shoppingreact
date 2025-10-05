import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      // action.payload should be a product object
      const product = action.payload;
      // If the product already exists in cart (by name), increase quantity, else push new
      const existingIndex = state.items.findIndex(item => item.name === product.name);
      if (existingIndex !== -1) {
        state.items[existingIndex].quantity = (state.items[existingIndex].quantity || 1) + 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      const name = action.payload;
      state.items = state.items.filter(item => item.name !== name);
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const idx = state.items.findIndex(item => item.name === name);
      if (idx !== -1) {
        state.items[idx].quantity = quantity;
        if (quantity <= 0) {
          state.items.splice(idx, 1);
        }
      }

    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
