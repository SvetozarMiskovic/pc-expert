import { getAllProducts } from "../../config/firebase";
import { getSingleArticleQuery } from "../../queries/getSingleArticleQuery";

export default async function handler(req, res) {
  const { category, id } = req.body;

  const val = await getSingleArticleQuery(category, id);

  res.send({ data: val });
}
