import { configureStore } from "@reduxjs/toolkit";
import addToCart from "./addToCart";

export const store = configureStore({
  reducer: {
    addToCart,
  },
});
