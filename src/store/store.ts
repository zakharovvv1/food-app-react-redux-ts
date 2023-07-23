import {
  combineReducers,
  getDefaultMiddleware,
  configureStore,
} from "@reduxjs/toolkit";
import { api } from "../components/API/dadata/dadataApi";
import reducerBuy from "./buySlice/buySlice";
import currentFoodReducer from "./currentFoodSlice/currentFoodSlice";
const rootReducer = combineReducers({
  reducerBuy,
  currentFoodReducer,
  [api.reducerPath]: api.reducer,
});
export const store = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware),
  });
};
