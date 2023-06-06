import { verify } from "jsonwebtoken";
import { db } from "../../config/prismaClient";

export default async function handler(req, res) {
  // console.log(req.body);
  const data = req.body?.product;
  const jwt = req.cookies?.authToken;
  const cat = req.body.cat;

  console.log(data, jwt, cat);
  //   const category = req.body.category;
  //   const jwt = req.cookies?.authToken;

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
      const db_name = translateCategory(cat);

      if (isValid) {
        const product = await db[db_name].create({
          data: data,
        });

        res.json({
          msg: `Uspjesno krerian artikl - ${data?.id}`,
          product: product,
        });
      }
    } else {
      res.json({ err: "Niste autorizovani da kreirate artikl!" });
    }
  }
}
