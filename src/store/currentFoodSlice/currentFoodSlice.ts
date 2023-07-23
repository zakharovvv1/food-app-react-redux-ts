import { createSlice } from "@reduxjs/toolkit";
import { IProps } from "../../components/Interfaces/IProps";

export const currentFoodSlice = createSlice({
  name: "currentFoodSlice",
  initialState: { currentFoodItem: {} as IProps },
  reducers: {
    setCurrentFoodItem: (state, action) => {
      state.currentFoodItem = action.payload;
    },
  },
});

export default currentFoodSlice.reducer;
