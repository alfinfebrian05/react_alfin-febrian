import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getProduct = createAsyncThunk("products/getProduct", async () => {
  const res = await axios.get(
    "https://642edb832b883abc6418dbcf.mockapi.io/products"
  );

  return res.data;
});

export const addProduct = createAsyncThunk(
  "products/addProduct",
  async (param) => {
    const res = await axios.post(
      "https://642edb832b883abc6418dbcf.mockapi.io/products",
      param
    );

    return res.data;
  }
);

export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (id) => {
    const res = await axios.delete(
      `https://642edb832b883abc6418dbcf.mockapi.io/products/${id}`
    );

    return res.data;
  }
);

export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async (param) => {
    const res = await axios.put(
      `https://642edb832b883abc6418dbcf.mockapi.io/products/${param.id}`,
      param
    );

    return res.data;
  }
);
