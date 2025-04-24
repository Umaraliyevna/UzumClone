import { createSlice } from "@reduxjs/toolkit";

const favouriteProduct = createSlice({
  name: "favourite",
  initialState: [],
  reducers: {
    addToFavouriteProduct: (state, action) => {
      state.push(action.payload);
      return state;
    },
  },
});

export const { addToFavouriteProduct } = favouriteProduct.actions;
export default favouriteProduct.reducer;
