import { get, onChildChanged, onValue, ref } from "firebase/database";
import { db } from "../config/firebase";

const listenForChangeQuery = id => {
  const userRef = ref(db, "users/" + id);
  const user = onChildChanged(userRef, snapshot => {
    console.log(snapshot.val());
  });
  // if (!user) {
  //   const user2 = await get(userRef).then(snapshot => {
  //     const value = snapshot.val();
  //     return value;
  //   });

  //   return user2;
  // }
  return user;
};

export { listenForChangeQuery };
