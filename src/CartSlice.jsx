import { createSlice } from '@reduxjs/toolkit';

// task #2 
export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    
    // reducer adds a new plant item to the "items" array 
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;       // destructive product details from the action payload

      const existingItem = state.items.find(item => item.name === name);    // chcking if the item already exists in the cart  by comparing names
      if(existingItem){
        existingItem.quantity++;    // if item already exists in the cart, increase its quantity
      }else{
        state.items.push({ name, image, cost, quantity: 1 });         // if item does not exist, add it to the cart with quantity 1
      }
    },

    // reducer removes an item from the cart based on its name and gets called when the user wants to remove products from the cart
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.name !== action.payload);
    },

    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;    // Destructive the product name and new quantity from the action payload 

      // *find the item in the cart that matches the given name
      const itemToUpdate = state.items.find(item => item.name === name);
      if(itemToUpdate){
        itemToUpdate.quantity = quantity;       // if item is found, update its quantity to the new value
      }
    
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
