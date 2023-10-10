import { get, getDatabase, onValue, ref } from "firebase/database";

export async function getHistoryOfOrders(userId) {
  const db = getDatabase();

  try {
    // const starCountRef = ref(db, "users/" + userId);
    // return onValue(starCountRef, (snapshot) => {
    //   const data = snapshot.val();
    //   console.log("data из базы данных", data);
    //   return data;
    // });
    const snapshot = await get(ref(db, "/users/" + userId));

    const orders = snapshot.val();

    return orders;
  } catch (err) {
    console.log("error", err);
  }
}
