import { get, ref, set, update } from "firebase/database";
import { db } from "../config/firebase";

const updateArticleQuery = async (id, category, data) => {
  const articleRef = ref(db, "products/" + category + "/" + id);

  const snap = await update(articleRef, data);

  return snap ? true : false;
};

export { updateArticleQuery };
