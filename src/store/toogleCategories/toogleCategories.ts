import { createSlice } from "@reduxjs/toolkit";

// Состояние корзины
export const toogleCategories = createSlice({
  name: "buySlice",
  initialState: {
    category: null,
  },
  reducers: {
    toggleCategories: (state, action) => {
      state.category = action.payload;
    },
  },
});

export default toogleCategories.reducer;
