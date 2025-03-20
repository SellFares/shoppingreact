import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      const existingItem = state.items.find((item) => item.name === name);
      if (existingItem) {
        existingItem.quantity++; // Incrementa a quantidade se o item já existe
      } else {
        state.items.push({ name, image, cost, quantity: 1 }); // Adiciona novo item ao carrinho
      }
    },
    removeItem: (state, action) => {
      const name = action.payload; // O nome do produto a ser removido
      state.items = state.items.filter((item) => item.name !== name); // Remove o item com base no nome
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload; // Nome do produto e nova quantidade
      const existingItem = state.items.find((item) => item.name === name);
      if (existingItem && quantity > 0) {
        existingItem.quantity = quantity; // Atualiza a quantidade para o valor fornecido
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
