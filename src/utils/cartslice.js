import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    //mutating the state
    addItem: (state, action) => {
      //Redux Toolkit uses immerjs behind the scenes
      //we HAVE to mutate the state
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      // RTK - either mutate the existing state or return a new state
      state.items.length = 0; // or return { items: [] }
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
