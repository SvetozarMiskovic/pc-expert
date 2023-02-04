import { compare, hash } from "bcrypt";
import { verify } from "jsonwebtoken";
import { db } from "../../config/prismaClient";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const jwt = req.cookies?.authToken;
    const token = verify(jwt, process.env.JWT_SECRET);
    if (token) {
      const user = await db.korisnici.findUnique({
        where: {
          id: Number(token.sub),
        },
      });

      const isGoodOldPW = await compare(req.body.oldPW, user?.lozinka);

      if (!isGoodOldPW) {
        res.send({ err: "Stara lozinka se ne poklapa! Pokusajte ponovo" });
      } else {
        const newPW = await hash(req.body.newPW, 10);

        const updatedUser = await db.korisnici.update({
          where: {
            id: Number(token.sub),
          },
          data: {
            lozinka: newPW,
          },
        });

        res.send({ msg: "Lozinka uspjesno promjenjena!" });
      }
    }
  }
}
