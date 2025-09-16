import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],   // array of products in cart
  total: 0     // total cart value
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const product = action.payload;
      const existingItem = state.items.find(item => item.name === product.name);

      if (existingItem) {
        // if product already exists, just increase quantity
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }

      state.total += product.cost;
    },

    removeItem: (state, action) => {
      const productName = action.payload;
      const itemIndex = state.items.findIndex(item => item.name === productName);

      if (itemIndex > -1) {
        const item = state.items[itemIndex];
        state.total -= item.cost * item.quantity;
        state.items.splice(itemIndex, 1);
      }
    },

    clearCart: (state) => {
      state.items = [];
      state.total = 0;
    }
  }
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
