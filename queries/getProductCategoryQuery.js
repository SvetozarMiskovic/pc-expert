import { get, onValue, ref, equalTo } from "firebase/database";
import { db } from "../config/firebase";

const getProductCategoryQuery = async category => {
  const productsRef = ref(db, "products/" + category);

  const snap = await get(productsRef);
  // console.log(productsRef.equalTo("product", category));
  const products = snap.val();

  // console.log(`produkti iz ${category}`, products);
  //   console.log("Products iz query", products);
  // if (!user) {
  //   const user2 = await get(userRef).then(snapshot => {
  //     const value = snapshot.val();
  //     return value;
  //   });

  //   return user2;
  // }

  return products ? products : [];
};

export { getProductCategoryQuery };
