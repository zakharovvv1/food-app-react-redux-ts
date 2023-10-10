import { useSelector } from "react-redux";
import { IStateBuy } from "../Interfaces/IStateBuy";

export const UseCurrentFood = () => {
  const localCurrentFood = localStorage.getItem("currentFood");
  if (localCurrentFood === null) {
    const currentFood = useSelector((state) => state as IStateBuy)
      .currentFoodReducer.currentFoodItem;
    return currentFood;
  } else {
    return JSON.parse(localCurrentFood);
  }
};
