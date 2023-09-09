import { getAuth } from "firebase/auth";
import { getDatabase, set, ref } from "firebase/database";

export const checkoutOrder = (deliverInfo) => {
  try {
    const auth: any = getAuth();
    console.log("auth.currentUser", auth.currentUser);
    const userId = auth.currentUser.uid;

    const db = getDatabase();
    debugger;
    set(ref(db, "users/" + userId), {
      deliverInfo: deliverInfo,
    });
  } catch (err) {
    console.log("Ошибка");
  }
};
