// import { get, ref, set } from "firebase/database";
// import { db } from "../config/firebase";

const createArticleQuery = async (
  data = { 1: "sveto" },
  category = "sveto",
  id = "sveto"
) => {
  // const articleRef = ref(db, "products/" + category + "/" + id);

  // const snap = await set(articleRef, data);
  // return snap;
  console.log("odje kriejt artikl kveri");
};

export { createArticleQuery };
