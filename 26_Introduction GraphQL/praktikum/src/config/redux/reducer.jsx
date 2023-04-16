import { combineReducers } from "@reduxjs/toolkit";
import { productReducer } from "./product/productSlice";

const reducer = combineReducers({
  product: productReducer,
});

export default reducer;
