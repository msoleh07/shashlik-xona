import { createSlice } from "@reduxjs/toolkit";

export const addToCart = createSlice({
  name: "addToCart",
  initialState: JSON.parse(localStorage.getItem("cart")) || [],
  reducers: {
    ADD_TO_CART: (state, acton) => {
      const newItem = acton.payload.product;
      const id = newItem.id;
      const find = state.find((item) => item.id === id);
      const items = [...state, newItem];
      const newData = state.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      );
      localStorage.setItem("cart", JSON.stringify(find ? newData : items));
      return find ? newData : items;
    },
    DecrementCart: (state, action) => {
      const dec = state.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            quantity: item.quantity <= 1 ? 1 : item.quantity - 1,
          };
        } else {
          return item;
        }
      });

      localStorage.setItem("cart", JSON.stringify(dec));
      return dec;
    },

    IncrementCart: (state, action) => {
      const inc = state.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            quantity: item.quantity < 1 ? 1 : item.quantity + 1,
          };
        } else {
          return item;
        }
      });

      localStorage.setItem("cart", JSON.stringify(inc));
      return inc;
    },

    RemoveFromCart: (state, action) => {
      let id = action.payload;
      console.log(id);
      let res = (state = state.filter((i) => i.id !== id));
      localStorage.setItem("cart", JSON.stringify(res));

      return res;
    },
  },
});

export const { ADD_TO_CART, IncrementCart, DecrementCart, RemoveFromCart } =
  addToCart.actions;

export default addToCart.reducer;
