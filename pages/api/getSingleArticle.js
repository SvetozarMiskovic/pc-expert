import { getSingleArticleQuery } from "../../queries/getSingleArticleQuery";

export default async function handler(req, res) {
  const { category, id } = req.body;

  const val = await getSingleArticleQuery(category, id);

  console.log("VRACEN IZ KVERIJA U API", val);
  res.send({ data: val });
}
