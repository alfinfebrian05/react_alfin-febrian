import { createSlice } from "@reduxjs/toolkit";
import {
  addProduct,
  getProduct,
  deleteProduct,
  updateProduct,
} from "./productThunk";

//#region INITIAL STATE
const productInitialState = {
  products: [],
  isEdit: false,
  productById: [],
  type: "",
};
//#endregion

const productSlice = createSlice({
  name: "product",
  initialState: productInitialState,
  reducers: {
    setIsEdit: (state, action) => {
      return {
        ...state,
        isEdit: action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProduct.fulfilled, (state, action) => {
        return {
          ...state,
          products: action.payload,
          type: action.type,
        };
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        return {
          ...state,
          type: action.type,
        };
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        return {
          ...state,
          products: state.products.filter(
            (product) => product.id !== action.payload
          ),
          type: action.type,
        };
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        return {
          ...state,
          type: action.type,
        };
      });
  },
});

export const { actions: productAction, reducer: productReducer } = productSlice;
