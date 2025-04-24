import { createSlice } from "@reduxjs/toolkit";

const basketSlice = createSlice({
  name: "basket",
  initialState: [],
  reducers: {
    addToBasket: (state, action) => {
      const { product, quantity } = action.payload;
      const existingItem = state.find((item) => item.product.id === product.id);
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.push({ product, quantity });
      }
    },

    removeFromBasket: (state, action) => {
      const index = state.findIndex(
        (item) => item.product.id === action.payload
      );
      if (index !== -1) {
        state.splice(index, 1);
      }
      return state;
    },

    incrementQuantity: (state, action) => {
      state.find(({ product }) => product.id === action.payload).quantity += 1;
      return state;
    },
    decrementQuantity: (state, action) => {
      state.find(({ product }) => product.id === action.payload).quantity -= 1;
      return state;
    },
  },
});

export const {
  addToBasket,
  removeFromBasket,
  decrementQuantity,
  incrementQuantity,
} = basketSlice.actions;
export default basketSlice.reducer;
