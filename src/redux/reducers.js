import { combineReducers } from "@reduxjs/toolkit";
import product from "./sliceRedux/productInfo";
import basket from "./sliceRedux/basket";
import favourite from "./sliceRedux/favouriteProduct";
export const rootReducer = combineReducers({
  product,
  basket,
  favourite,
});
