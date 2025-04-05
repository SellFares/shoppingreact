import { createSlice } from "@reduxjs/toolkit";
import cartReducer from './CartSlice';

export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const item = state.items.find((item) => item.name === action.payload.name);

      if (item) {
        item.quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.name !== action.payload.name);
    },
    updateQuantity: (state, action) => {
      state.items = state.items.map((item) => {
        if (item.name === action.payload.name) {
          return { ...item, quantity: action.payload.quantity };
        }
        return item;
      });
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
