import { buySlice } from "./../../store/buySlice/buySlice";
import React, { useEffect } from "react";
import { UserSlice } from "../../store/user/UserSlice";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAuth } from "firebase/auth";
import { getHistoryOfOrders } from "./getHistoryOfOrders";
export function useSignIn() {
  const effect = useRef(false);
  const dispatch = useDispatch();
  const auth = getAuth();
  const userSlice = useSelector((state) => state.UserSlice);
  console.log("🚀 ~ file: useSignIn.ts:15 ~ useSignIn ~ buySlice:", buySlice);
  console.log("🚀 ~ file: useSignIn.ts:13 ~ useSignIn ~ userSlice:", userSlice);
  const user = JSON.parse(localStorage.getItem("user")) as any;
  const shoppingBasket = localStorage.getItem("shoppingBasket");

  console.log(
    "🚀 ~ file: useSignIn.ts:16 ~ useSignIn ~ shoppingBasket:",
    JSON.parse(shoppingBasket)
  );
  const orderAdress = localStorage.getItem("orderAdress");
  console.log(
    "🚀 ~ file: useSignIn.ts:16 ~ useSignIn ~ orderAdress:",
    orderAdress
  );

  useEffect(() => {
    if (!effect.current && userSlice.order.length === 0) {
      auth.onAuthStateChanged(async (user) => {
        const { userInfo } = await getHistoryOfOrders(user.uid);
        console.log("userInfoinAwait", userInfo);
        dispatch(UserSlice.actions.setOrder(userInfo.flat()));
      });
    }

    dispatch(
      buySlice.actions.updateFromeLocalStorege(JSON.parse(shoppingBasket))
    );
    dispatch(UserSlice.actions.setOrderAdress(orderAdress));
    if (user !== null) {
      dispatch(UserSlice.actions.setUser(user));
    }
    return () => {
      effect.current = true;
    };
  }, []);
}