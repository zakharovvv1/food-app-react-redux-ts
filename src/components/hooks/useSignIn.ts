import React, { useEffect } from "react";
import { UserSlice } from "../../store/user/UserSlice";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAuth } from "firebase/auth";
import { getHistoryOfOrders } from "./getHistoryOfOrders";
import { buySlice } from "../../store/buySlice/buySlice";
export function useSignIn() {
  const effect = useRef(false);
  const dispatch = useDispatch();
  const auth = getAuth();
  const userSlice = useSelector((state) => state.UserSlice);
  const user = JSON.parse(localStorage.getItem("user")) as any;
  const shoppingBasket = localStorage.getItem("shoppingBasket");
  console.log(
    "🚀 ~ file: useSignIn.ts:15 ~ useSignIn ~ shoppingBasket:",
    shoppingBasket
  );

  useEffect(() => {
    (() => {
      if (!effect.current && userSlice.order.length === 0) {
        auth.onAuthStateChanged(async (user) => {
          const { userInfo } = await getHistoryOfOrders(user.uid);
          console.log("userInfoinAwait", userInfo);
          dispatch(UserSlice.actions.setOrder(userInfo.flat()));
          dispatch(
            buySlice.actions.updateFromeLocalStorege(JSON.parse(shoppingBasket))
          );
        });
      }
    })();
    dispatch(
      UserSlice.actions.setUser(JSON.parse(localStorage.getItem("user")))
    );
    return () => {
      effect.current = true;
    };
  }, []);
}
