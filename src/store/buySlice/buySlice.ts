import { IProps } from "./../../components/Interfaces/IProps";
import { createSlice } from "@reduxjs/toolkit";

import { IShoppingBasket } from "../../components/Interfaces/IShoppingBasket";
import { addToBuy, deleteFromBuy, removeFromBuy } from "./Actions";

// Состояние корзины
export const buySlice = createSlice({
  name: "buySlice",
  initialState: {
    coldAppetizers: [] as IProps[],
    hotAppetizers: [] as IProps[],
    desserts: [] as IProps[],
    beverages: [] as IProps[],
    soups: [] as IProps[],
    specialties: [] as IProps[],
  } as IShoppingBasket,
  reducers: {
    addToBuy: (state, action) => {
      addToBuy(state, action.payload);
    },
    removeFromBuy: (state, action) => {
      removeFromBuy(state, action.payload);
    },
    deleteFromBuy: (state, action) => {
      deleteFromBuy(state, action.payload);
    },
    reset: (state, action) => {
      state.coldAppetizers = [];
      state.hotAppetizers = [];
      state.desserts = [];
      state.beverages = [];
      state.soups = [];
      state.specialties = [];
    },
    // currentFood: (state, action) => {

    // }
  },
});

export default buySlice.reducer;
