import { createSlice } from "@reduxjs/toolkit";

const productInfoSlice = createSlice({
  name: "product",
  initialState: {
    id: 0,
    image: "",
    title: "",
    reyting: "",
    perMonthSum: "",
    changedSum: "",
    realSum: "",
  },
  reducers: {
    showProductInfo(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { showProductInfo } = productInfoSlice.actions;
export default productInfoSlice.reducer;
