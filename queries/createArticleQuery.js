import { get, ref, set } from "firebase/database";
import { db } from "../config/firebase";

const createArticleQuery = async (data, category, id) => {
  const articleRef = ref(db, "products/" + category + "/" + id);

  const snap = await set(articleRef, data);
  return snap;
};

export { createArticleQuery };
