import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import cookie from "cookie";
import { db } from "../../config/prismaClient";

export default async function handler(req, res) {
  const data = req.body;

  if (req.method === "POST") {
    // Find user with email entered on Login component
    const value = await db.korisnici.findFirst({
      where: { email: data.email },
    });

    if (!!value) {
      const isGood = await compare(data.lozinka, value.lozinka);

      const payload = { sub: value.id, role: value.role };
      const jwt = sign(payload, process.env.JWT_SECRET);

      delete value.lozinka;

      if (isGood) {
        res.setHeader(
          "Set-Cookie",
          cookie.serialize("authToken", jwt, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== "development",
            sameSite: "strict",
            path: "/",
          })
        );

        res.json({ auth: "Uspjesno ulogovan!" });
      } else {
        res.json({ message: "Podaci se ne podudaraju! Pokusajte ponovo." });
      }
    } else {
      res.json({ message: "Podaci se ne podudaraju! Pokusajte ponovo." });
    }

    // For GET method
  } else {
    res.json("Nothing to see here...");
  }
}
