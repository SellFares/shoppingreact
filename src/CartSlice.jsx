import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [], // Initialize items as an empty array
    },
    reducers: {
        addItem: (state, action) => {
            const { name, image, cost } = action.payload; // Destructure product details
            const existingItem = state.items.find(item => item.name === name);
            if (existingItem) {
                existingItem.quantity++; // Increase quantity if item exists
            } else {
                state.items.push({ name, image, cost, quantity: 1 }); // Add new item with quantity 1
            }
        },
        removeItem: (state, action) => {
            state.items = state.items.filter(item => item.name !== action.payload); // Remove item by name
        },
        updateQuantity: (state, action) => {
            const { name, quantity } = action.payload; // Destructure name and quantity
            const itemToUpdate = state.items.find(item => item.name === name);
            if (itemToUpdate) {
                itemToUpdate.quantity = quantity; // Update quantity
            }
        },
    },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;