// import { get, onValue, ref, equalTo } from "firebase/database";
// import { db } from "../config/firebase";
import { db } from "../config/prismaClient";

const getProductCategoryQuery = async (category) => {
  const data = await db?.[category]?.findMany();

  // console.log(await db?.laptopi?.findMany());
  // console.log("kategorija je", category);

  // const array = Object.values(data);
  return data;
  // const productsRef = ref(db, "products/" + category);

  // const snap = await get(productsRef);
  // const products = snap.val();

  // const array = Object.values(products);

  // return array;
  // console.log("odje dobij kategoriju produkta kveri");
};

export { getProductCategoryQuery };
