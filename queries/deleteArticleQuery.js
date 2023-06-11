import { get, ref, set, remove } from "firebase/database";
import { db } from "../config/firebase";

const deleteArticleQuery = async (id, category) => {
  const articleRef = ref(db, "products/" + category + "/" + id);

  const snap = await remove(articleRef);

  return snap ? true : false;
};

export { deleteArticleQuery };
