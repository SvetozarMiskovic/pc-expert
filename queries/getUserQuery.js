import { get, onValue, ref } from "firebase/database";
import { db } from "../config/firebase";

const getUserQuery = async id => {
  const userRef = ref(db, "users/" + id);
  const user = await get(userRef).then(snapshot => {
    const value = snapshot.val();
    return value;
  });

  return user;
};

export { getUserQuery };
