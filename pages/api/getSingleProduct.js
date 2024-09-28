// import { getAllProducts } from "../../config/firebase";
import { getProductCategoryQuery } from "../../queries/getProductCategoryQuery";

export default async function handler(req, res) {
  const { category } = req.body;

  const val = await getProductCategoryQuery(category);
  // console.log("VAL IZ GET SINGLE PRODUCT", val);
  res.send({ data: val });
}
