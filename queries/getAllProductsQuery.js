import { get, ref } from "firebase/database";
import { db } from "../config/firebase";

const getAllProductsQuery = async () => {
  const productsRef = ref(db, "products");

  const products = await get(productsRef).then(snapshot => {
    const value = snapshot.val();
    return value;
  });

  let final = {};

  Object.keys(products).map(key => {
    // let obj = { [key]:  };
    final[key] = Object.values(products?.[key]);
  });
  // console.log(final);
  return final;
};

export { getAllProductsQuery };
