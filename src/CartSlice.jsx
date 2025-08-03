import { createSlice } from '@reduxjs/toolkit';


export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
        const { name, image, cost } = action.payload; // Destructure product details from the action payload

        // Check if the item already exists in the cart by comparing names
        const existingItem = state.items.find(item => plant.name === name);
        if (existingItem) {
            dispatch(addItem({ name: item.name, quantity: item.quantity + 1 }));
          // If item already exists in the cart, increase its quantity
          existingItem.quantity++;
        } else {
          // If item does not exist, add it to the cart with quantity 1
          state.items.push({ name, image, cost, quantity: 1 });
          dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
        } 
    
    },
    removeItem: (state, action) => {
        state.items = state.items.filter(item => plant.name !== action.payload);
    },
    updateQuantity: (state, action) => {
        
            const { name, quantity } = action.payload;
            const itemToUpdate = state.items.find(item => item.name === name);
            if (itemToUpdate) {
                itemToUpdate.quantity = quantity; // If the item is found, update its quantity to the new value
            return {
                ...prevState,
                items: state.items
                    .map(item => 
                        item.name === name
                            ? { ...item, quantity } // Crea una copia del item actualizando solo la cantidad
                            (
                            dispatch(updateQuantity({ name: item.name, quantity: item.quantity =0 }));
                    )
                    
                
            },
        
        };


    
    }
  }
);

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
