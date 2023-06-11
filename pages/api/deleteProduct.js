import { verify } from "jsonwebtoken";
import { db } from "../../config/prismaClient";
import { deleteArticleQuery } from "../../queries/deleteArticleQuery";

export default async function handler(req, res) {
  const id = req.body.id;
  const category = req.body.category;
  const token = req.cookies?.authToken;
  const role = req?.body?.role;

  // };

  if (req.method === "POST") {
    if (token && role === "admin") {
      // console.log(id, category, token, role);

      await deleteArticleQuery(id, category);

      res.send({ msg: `Uspješno obrisan artikl ID - ${id}` });
    }
  }
}
