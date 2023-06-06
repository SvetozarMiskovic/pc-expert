import { get, onValue, ref } from "firebase/database";
import { db } from "../config/firebase";
import { userExistsQuery } from "./userExistsQuery";

const getUserRoleQuery = async id => {
  const userRef = ref(db, "users/" + id);
  const usersRef = ref(db, "users");
  let role;
  // userExistsQuery();
  onValue(usersRef, snapshot => {
    const value = snapshot.val();
    if (value) {
      role = value.role;
      console.log("JEBEM TI MAJKU", role);
    }
  });
  console.log("jebem ti majku 2", role);
  return role;
};

export { getUserRoleQuery };
