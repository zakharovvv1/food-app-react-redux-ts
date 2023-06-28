import { createSlice } from "@reduxjs/toolkit";

// Состояние корзины
export const buySlice = createSlice({
  name: "buySlice",
  initialState: [] as any[],
  reducers: {
    addToBuy: (state, action) => {
      debugger;
      if (state.some((f) => f.id === action.payload.id)) {
        const index = state.findIndex((item) => item.id === action.payload.id);
        if (index !== -1) {
          state.splice(index, 1);
        }
      } else {
        state.push(action.payload);
      }
    },
  },
});

export default buySlice.reducer;
