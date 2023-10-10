import { getAuth } from "firebase/auth";
import { getDatabase, set, ref } from "firebase/database";

export const setOrder = (userSlice) => {
  try {
    const auth: any = getAuth();
    console.log("auth.currentUser", auth.currentUser);
    const userId = auth.currentUser.uid;

    const db = getDatabase();

    set(ref(db, "users/" + userId), {
      userInfo: userSlice.order,
    });
  } catch (err) {
    console.log("Ошибка");
  }
};
