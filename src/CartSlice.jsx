// CartSlice.jsx
import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], // Each item shape: { name, image, description?, cost, quantity }
  },
  reducers: {
    // Add item to cart. If exists, increment quantity; otherwise push with quantity 1.
    addItem: (state, action) => {
      const newItem = action.payload;
      const existing = state.items.find((item) => item.name === newItem.name);
      if (existing) {
        existing.quantity += 1;
      } else {
        // Ensure a quantity field exists
        state.items.push({ ...newItem, quantity: 1 });
      }
    },

    // Remove an item completely by name. Expects payload to be the item name (string).
    removeItem: (state, action) => {
      const name = action.payload;
      state.items = state.items.filter((item) => item.name !== name);
    },

    // Update the quantity of an item. Expects payload: { name, quantity }.
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const existing = state.items.find((item) => item.name === name);
      if (existing) {
        existing.quantity = quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;
export default CartSlice.reducer;
