import { get, onValue, ref, equalTo } from "firebase/database";
import { db } from "../config/firebase";

const getProductCategoryQuery = async category => {
  const productsRef = ref(db, "products/" + category);

  const snap = await get(productsRef);
  const products = snap.val();

  const array = Object.values(products);

  return array;
};

export { getProductCategoryQuery };
