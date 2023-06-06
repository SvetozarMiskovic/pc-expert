import { verify } from "jsonwebtoken";
import { db } from "../../config/prismaClient";

export default async function handler(req, res) {
  const id = req.body?.id;
  const category = req.body?.category;
  const { ...payload } = req.body?.data;
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

  if (jwt) {
    const isValid = verify(jwt, process.env.JWT_SECRET);
    const db_name = translateCategory(category);

    if (isValid) {
      const product = await db[db_name].update({
        where: {
          id: id,
        },
        data: {
          ...payload,
        },
      });

      res.json({
        msg: `Uspjesno uredjen artikl - ${id}`,
        product: product,
      });
    }
  } else {
    res.json(null);
  }
}
