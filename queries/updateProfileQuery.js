import { ref, set, update } from "firebase/database";
import { db } from "../config/firebase";

const updateProfileQuery = async (data, id) => {
  const userRef = ref(db, "users/" + id);
  const isUpdated = await update(userRef, data)
    .then(() => true)
    .catch(() => false);

  // console.log(isUpdated);
  return isUpdated;
};

export { updateProfileQuery };
