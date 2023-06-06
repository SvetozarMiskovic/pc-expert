import { getAllProducts } from "../../config/firebase";
import { getSingleArticleQuery } from "../../queries/getSingleArticleQuery";

export default async function handler(req, res) {
  const { category, id } = req.body;

  // const d = await getAllProducts();
  const val = await getSingleArticleQuery(category, id);
  // console.log("isto produkti samo iz api", val);
  //   console.log("iz api", val, req.body);
  // console.log("Products iz API", val);
  res.send({ data: val });
}
