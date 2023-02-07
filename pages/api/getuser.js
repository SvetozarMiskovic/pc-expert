import { db } from "../../config/prismaClient";
import { verify } from "jsonwebtoken";

export default async function handler(req, res) {
  const jwt = req.cookies?.authToken;

  if (jwt) {
    const isValid = verify(jwt, process.env.JWT_SECRET);

    if (!!isValid) {
      const userObj = await db.korisnici.findFirst({
        where: {
          id: isValid.sub,
        },
      });

      if (userObj) {
        delete userObj.lozinka;

        res.json(userObj);
      } else {
        res.json({ message: "Niste ulogovani!" });
      }
    }
  } else {
    res.json({ message: "Niste ulogovani!" });
  }
}
