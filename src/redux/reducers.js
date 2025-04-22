import { combineReducers } from "@reduxjs/toolkit";
import product from "./sliceRedux/productInfo";
import basket from "./sliceRedux/basket";
export const rootReducer = combineReducers({
  product,
  basket,
});
