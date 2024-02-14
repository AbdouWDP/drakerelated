import { configureStore } from "@reduxjs/toolkit";
import albumReducer from "./albumReducer";
import cartReducer from "./cartReducer";

export const store = configureStore({
  reducer: {
    album_project: albumReducer,
    cart: cartReducer,
  },
});
