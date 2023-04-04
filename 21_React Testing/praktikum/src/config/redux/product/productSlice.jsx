import { createSlice } from "@reduxjs/toolkit";

//#region INITIAL STATE
const productInitialState = {
  products: [
    {
      productUuid: "e7ce2b97-d0c1-4a75-9c1d-e6dfc8441836",
      productName: "John",
      productCategory: "Doe",
      productFreshness: "Doe",
      productImage: "Doe",
      productDescription: "Doe",
      productPrice: "Doe",
    },
  ],
};
//#endregion

const productSlice = createSlice({
  name: "product",
  initialState: productInitialState,
  reducers: {
    add: (state, action) => {
      return {
        ...state,
        products: action.payload,
      };
    },
    delete: (state, action) => {
      return {
        ...state,
        products: action.payload,
      };
    },
  },
});

export const { actions: productAction, reducer: productReducer } = productSlice;
