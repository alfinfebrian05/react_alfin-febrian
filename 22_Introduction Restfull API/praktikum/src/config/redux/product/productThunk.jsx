import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getProduct = createAsyncThunk("products/getProduct", async () => {
  const res = await axios.get(
    "https://642edb832b883abc6418dbcf.mockapi.io/products"
  );

  return res.data;
});
