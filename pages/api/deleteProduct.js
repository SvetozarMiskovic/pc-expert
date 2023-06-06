import { verify } from "jsonwebtoken";
import { db } from "../../config/prismaClient";

export default async function handler(req, res) {
  const id = req.body.id;
  const category = req.body.category;
  const jwt = req.cookies?.authToken;

  const translateCategory = cat => {
    switch (cat) {
      case "laptop":
        return "laptopi";
      case "monitor":
        return "monitori";
      case "tv":
        return "televizori";
      case "phone":
        return "telefoni";
      case "component":
        return "komponente";
      case "preifery":
        return "periferija";
      case "computer":
        return "racunari";
      case "mining":
        return "mining";
    }
  };

  if (req.method === "POST") {
    if (jwt) {
      const isValid = verify(jwt, process.env.JWT_SECRET);
      const db_name = translateCategory(category);

      if (isValid) {
        const product = await db[db_name].delete({
          where: {
            id: id,
          },
        });

        res.json({
          msg: `Uspjesno obrisan artikl - ${id}`,
          product: product,
        });
      }
    } else {
      res.json(null);
    }
  }
}
