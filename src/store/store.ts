import {
  combineReducers,
  getDefaultMiddleware,
  configureStore,
} from "@reduxjs/toolkit";
import { api } from "../components/API/dadata/dadataApi";
const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
});
export const store = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware),
  });
};
