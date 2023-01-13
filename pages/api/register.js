import { db } from "../../utils/prismaClient";
import { hash, compare } from "bcrypt";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const dataGiven = req.body;
    const hashedPw = await hash(req.body.lozinka, 10);

    dataGiven.lozinka = hashedPw;

    const isDuplicate = await db.korisnici.findUnique({
      where: {
        email: dataGiven.email,
      },
    });

    if (!!isDuplicate) {
      res.json({
        message: "Korisnik sa unesenim emailom vec postoji! Pokusajte ponovo.",
      });
    } else {
      const user = await db.korisnici.create({
        data: {
          ime_i_prezime: dataGiven.ime_i_prezime,
          email: dataGiven.email,
          broj_telefona: Number(dataGiven.broj_telefona),
          adresa: dataGiven.adresa,
          grad: dataGiven.grad,
          ulica: dataGiven.ulica,
          postanski_broj: Number(dataGiven.postanski_broj),
          lozinka: dataGiven.lozinka,
        },
      });

      res.json({ auth: "Uspjesna registracija!" });
    }
  } else {
    res.json("It's GET method!");
  }
}
