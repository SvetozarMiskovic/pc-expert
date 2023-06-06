import { get, onValue, ref } from "firebase/database";
import { db } from "../config/firebase";

const getAllProductsQuery = async () => {
  const productsRef = ref(db, "products");

  const products = await get(productsRef).then(snapshot => {
    const value = snapshot.val();
    return value;
  });

  //   console.log("Products iz query", products);
  // if (!user) {
  //   const user2 = await get(userRef).then(snapshot => {
  //     const value = snapshot.val();
  //     return value;
  //   });

  //   return user2;
  // }

  return products;
};

export { getAllProductsQuery };
