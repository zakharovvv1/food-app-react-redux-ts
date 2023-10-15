import { buySlice } from "./../../store/buySlice/buySlice";
import React, { useEffect } from "react";
import { UserSlice } from "../../store/user/UserSlice";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAuth } from "firebase/auth";
import { getHistoryOfOrders } from "./getHistoryOfOrders";
import { useGetFoodQuery } from "../API/dadata/dadataApi";
export function useSignIn() {
  const effect = useRef(false);
  const dispatch = useDispatch();
  const auth = getAuth();
  const userSlice = useSelector((state) => state.UserSlice);
  const user = JSON.parse(localStorage.getItem("user")) as any;
  const shoppingBasket = JSON.parse(localStorage.getItem("shoppingBasket"));
  let { isLoading, data } = useGetFoodQuery();

  const orderAdress = localStorage.getItem("orderAdress");

  useEffect(() => {
    if (!effect.current && userSlice.order.length === 0) {
      auth.onAuthStateChanged(async (user) => {
        try {
          const { userInfo } = await getHistoryOfOrders(user.uid);
          console.log("userInfoinAwait", userInfo);
          dispatch(UserSlice.actions.setOrder(userInfo.flat()));
        } finally {
          dispatch(buySlice.actions.updateFromeLocalStorege(shoppingBasket));
          dispatch(UserSlice.actions.setOrderAdress(orderAdress));
          if (user !== null) {
            dispatch(UserSlice.actions.setUser(user));
            console.log("userSlice123", userSlice);
          }
        }
      });
    }
    return () => {
      effect.current = true;
    };
  }, []);
  return { isLoading, data };
}
