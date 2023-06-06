import { onValue, push, ref, set } from "firebase/database";
import { db } from "../config/firebase";
import { createId } from "@paralleldrive/cuid2";

const registerUserQuery = async data => {
  console.log("OVO DATU DOBIJAM U KVERI ZA REGISTER", data);
  if (data.id) {
    const usersRef = ref(db, "users/" + `${data.id}`);

    console.log("OVO DATU DOBIJAM U KVERI ZA REGISTER", data);
    const isCreated = await set(usersRef, data)
      .then(() => true)
      .catch(error => {
        console.log(error);
        return false;
      });

    console.log("OVO JEL REGISTROVAT U KVERI", isCreated);

    return isCreated;
  }

  // const userId = createId();
  // const usersRef = ref(db, "users/" + `${userId}`);

  // data.id = userId;

  // const isCreated = await set(usersRef, data)
  //   .then(() => true)
  //   .catch(() => false);

  // return isCreated;
};

export { registerUserQuery };
