import {
  combineReducers,
  getDefaultMiddleware,
  configureStore,
} from "@reduxjs/toolkit";
import { api } from "../components/API/dadata/dadataApi";
import reducerBuy from "./buySlice/buySlice";
const rootReducer = combineReducers({
  reducerBuy,
  [api.reducerPath]: api.reducer,
});
export const store = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware),
  });
};
