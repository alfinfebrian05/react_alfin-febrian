import { createSlice } from "@reduxjs/toolkit";
import { getProduct } from "./productThunk";

//#region INITIAL STATE
const productInitialState = {
  products: [],
  type: "",
};
//#endregion

const productSlice = createSlice({
  name: "product",
  initialState: productInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProduct.fulfilled, (state, action) => {
      return {
        ...state,
        products: action.payload,
        type: action.type,
      };
    });
  },
});

export const { actions: productAction, reducer: productReducer } = productSlice;
