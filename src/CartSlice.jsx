import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;       // destructive product details from the action payload

      const existingItem = state.items.find(item => item.name === name);    // chcking if the item already exists in the cart  by comparing names
      if(existingItem){
        existingItem.quantity++;    // if item already exists in the cart, increase its quantity
      }else{
        state.items.push({ name, image, cost, quantity: 1 });         // if item does not exist, add it to the cart with quantity 1
      }
      
    },
    removeItem: (state, action) => {
    },
    updateQuantity: (state, action) => {

    
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
