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
    reset: (state) => {
      state.coldAppetizers = [];
      state.hotAppetizers = [];
      state.desserts = [];
      state.beverages = [];
      state.soups = [];
      state.specialties = [];
    },
    updateFromeLocalStorege: (state, action) => {
      state.coldAppetizers = action.payload.coldAppetizers;
      state.hotAppetizers = action.payload.hotAppetizers;
      state.desserts = action.payload.desserts;
      state.beverages = action.payload.beverages;
      state.soups = action.payload.soups;
      state.specialties = action.payload.specialties;
    },
    // currentFood: (state, action) => {

    // }
  },
});

export default buySlice.reducer;
