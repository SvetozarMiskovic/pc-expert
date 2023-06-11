import { get, ref } from "firebase/database";
import { db } from "../config/firebase";

const getAllPropertiesQuery = async () => {
  const productsRef = ref(db, "products");

  const products = await get(productsRef).then(snapshot => {
    const value = snapshot.val();
    return value;
  });
  let properties;

  Object?.keys(products).map(key => {
    properties = { ...properties, [key]: Object?.keys(products?.[key]?.[0]) };
  });

  return properties;
};

export { getAllPropertiesQuery };
