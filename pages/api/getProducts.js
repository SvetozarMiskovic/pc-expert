import { getAllProducts } from "../../config/firebase";
import { getAllProductsQuery } from "../../queries/getAllProductsQuery";

export default async function handler(req, res) {
  // const d = await getAllProducts();
  const val = await getAllProductsQuery();
  // console.log("Products iz API", val);
  res.send(val);
}
