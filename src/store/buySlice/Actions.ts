import { IProps } from "../../components/Interfaces/IProps";
import { IShoppingBasket } from "../../components/Interfaces/IShoppingBasket";
import { current } from "@reduxjs/toolkit";
export const addToBuy = (state: IShoppingBasket, action: IProps) => {
  if (action.category === "Горячие закуски") {
    const isExists = state.hotAppetizers.some((f) => f.id === action.id);
    if (isExists) {
      state.hotAppetizers.forEach((f) => {
        if (f.id === action.id) {
          f.count += 1;
        }
      });
    } else {
      state.hotAppetizers.push(action);
    }
    console.log("Тек состояние", state.hotAppetizers);
  }
  if (action.category === "Холодные закуски") {
    const isExists = state.coldAppetizers.some((f) => f.id === action.id);
    if (isExists) {
      state.coldAppetizers.forEach((f) => {
        if (f.id === action.id) {
          f.count += 1;
        }
      });
    } else {
      state.coldAppetizers.push(action);
    }
  }
  if (action.category === "Десерты") {
    const isExists = state.desserts.some((f) => f.id === action.id);
    if (isExists) {
      state.desserts.forEach((f) => {
        if (f.id === action.id) {
          f.count += 1;
        }
      });
    } else {
      state.desserts.push(action);
    }
  }
};

export const removeFromBuy = (state: IShoppingBasket, action: IProps) => {
  if (action.category === "Горячие закуски") {
    state.hotAppetizers.find((f) => {
      if (f.id === action.id) {
        debugger;
        if (f.count > 1) {
          f.count -= 1;
        } else {
          state.hotAppetizers.splice(state.hotAppetizers.indexOf(f), 1);
        }
      }
    });
  }
  if (action.category === "Холодные закуски") {
    state.coldAppetizers.find((f) => {
      if (f.id === action.id) {
        debugger;
        if (f.count > 1) {
          f.count -= 1;
        } else {
          state.coldAppetizers.splice(state.coldAppetizers.indexOf(f), 1);
        }
      }
    });
  }
  if (action.category === "Десерты") {
    state.desserts.find((f) => {
      if (f.id === action.id) {
        debugger;
        if (f.count > 1) {
          f.count -= 1;
        } else {
          state.desserts.splice(state.desserts.indexOf(f), 1);
        }
      }
    });
  }
};

export const deleteFromBuy = (state: IShoppingBasket, action: IProps) => {
  debugger;
  let filterState = Object.values(current(state)).map((el: any[]) => {
    if (el.length === 0) {
      return el;
    } else {
      return el.filter((food: IProps) => {
        if (food.id !== action.id) {
          return food;
        }
      });
    }
  });
  state.coldAppetizers = filterState[0];
  state.hotAppetizers = filterState[1];
  state.desserts = filterState[2];
  console.log("newState", filterState);
  // console.log("state", state);
};
