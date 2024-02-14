import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCart = createAsyncThunk(
  "cartReducer/fetchCart",
  async (id) => {
    const res = await axios.get("https://dummyjson.com/carts/" + id);
    return res;
  }
);

export const addToCart = createAsyncThunk(
  "cartReducer/addToCart",
  async (product, userId) => {
    const params = {
      userId: userId,
      product: product,
    };
    const res = await axios.post("https://dummyjson.com/carts/add", params, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res;
  }
);

const cartReducer = createSlice({
  name: "cartReducer",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCart.fulfilled, (state, action) => {
      return (state = action.payload);
    });
    builder.addCase(addToCart.fulfilled, (state, action) => {
      return (state = action.payload);
    });
  },
});

export const {} = cartReducer.actions;

export default cartReducer.reducer;
