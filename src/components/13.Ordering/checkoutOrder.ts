import { getAuth } from "firebase/auth";
import { getDatabase, set, ref } from "firebase/database";

export const checkoutOrder = async (shoppingBag, deliverInfo) => {
  try {
    const auth: any = getAuth();
    console.log("auth.currentUser", auth.currentUser);
    const userId = auth.currentUser.uid;

    const db = getDatabase();
    debugger;
    set(ref(db, "users/" + userId), {
      shoppingBag: shoppingBag,
      deliverInfo: deliverInfo,
    });

    return new Promise((res, rej) => {
      if (shoppingBag) {
        res("Выполнено");
      } else {
        rej("Отклонено");
      }
    });
  } catch (err) {
    console.log("Ошибка");
  }
};
