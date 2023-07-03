import { IProps } from "../../components/Interfaces/IProps";
import { IShoppingBasket } from "../../components/Interfaces/IShoppingBasket";

export const addToBuy = (state: IShoppingBasket, action: IProps) => {
  if (action.category === "Горячик закуски") {
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
};

export const removeFromBuy = (state: IShoppingBasket, action: IProps) => {
  if (action.category === "Горячик закуски") {
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
};
