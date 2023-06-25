import { createSlice } from "@reduxjs/toolkit";

export const buySlice = createSlice({
  name: "buySlice",
  initialState: [] as any[],
  reducers: {
    addToBuy: (state, action) => {
      state.push(action.payload);
    },
    removeFromBuy: (state, action) => {
      state.splice(action.payload, 1);
    },
  },
});

export default buySlice.reducer;
