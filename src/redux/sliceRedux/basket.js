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
    incrementQuantity: (state, action) => {
      console.log(action.payload);

      state.find(({ product }) => product.id === action.payload).quantity += 1;
      return state;
    },
    decrementQuantity: (state, action) => {
      state.find(({ product }) => product.id === action.payload).quantity -= 1;
      return state;
    },
  },
});

export const { addToBasket, decrementQuantity, incrementQuantity } =
  basketSlice.actions;
export default basketSlice.reducer;
