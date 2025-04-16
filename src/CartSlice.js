// CartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'cart',
  initialState: { items: [] },
  reducers: {
    addItem: (s, a) => {
      const plant = a.payload;
      const found = s.items.find(i => i.name === plant.name);
      if (found) found.quantity += 1;
      else s.items.push({ ...plant, quantity: 1 });
    },
    removeItem: (s, a) => {
      s.items = s.items.filter(i => i.name !== a.payload);
    },
    updateQuantity: (s, a) => {
      const { name, quantity } = a.payload;
      const it = s.items.find(i => i.name === name);
      if (it) it.quantity = quantity;
    },
  },
});

export const { addItem, removeItem, updateQuantity } = slice.actions;
export default slice.reducer;
