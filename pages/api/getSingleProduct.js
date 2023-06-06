import { getAllProducts } from "../../config/firebase";
import { getProductCategoryQuery } from "../../queries/getProductCategoryQuery";

export default async function handler(req, res) {
  const { category } = req.body;
  // const d = await getAllProducts();
  const val = await getProductCategoryQuery(category);
  // console.log("isto produkti samo iz api", val);
  //   console.log("iz api", val, req.body);
  // console.log("Products iz API", val);
  res.send({ data: val });
}
