import { verify } from "jsonwebtoken";
import { hash } from "bcrypt";
import { db } from "../../config/prismaClient";
import { NextResponse } from "next/server";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const refererArray = req?.headers?.referer?.split("/");
    const token = refererArray[refererArray?.length - 1];
    const isValid = verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return false;
      } else {
        return decoded;
      }
    });

    if (isValid) {
      const pw = req?.body?.lozinka;
      const newPw = await hash(pw, 10);

      const updatePW = await db.korisnici.update({
        where: {
          email: isValid?.email,
        },
        data: {
          lozinka: newPw,
        },
      });

      res.send({
        msg: "Uspjesno promjenjena lozinka! Prijavite se sa novom lozinkom.",
      });
    } else {
      res.send({
        err: "Vremenski period od 30 minuta je istekao! Ponovo unesite email i pritisnite 'Resetuj lozinku'",
      });
    }
  }
}
