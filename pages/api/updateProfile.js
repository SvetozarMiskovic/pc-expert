import { db } from "../../config/prismaClient";
import { updateProfileQuery } from "../../queries/updateProfileQuery";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { userInfo, id } = req.body;

    const response = await updateProfileQuery(userInfo, id);
    res.send(response);
    // const user = req.body;

    // const updatedProfile = await db.korisnici.update({
    //   where: {
    //     email: user.email,
    //   },
    //   data: {
    //     ime_i_prezime: user?.ime_i_prezime,
    //     ulica: user?.ulica,
    //     grad: user?.grad,
    //     postanski_broj: Number(user?.postanski_broj),
    //     broj_telefona: Number(user?.broj_telefona),
    //     adresa: user?.adresa,
    //   },
    // });

    // if (updatedProfile.id) {
    //   res.send({ msg: "Izmjene snimljene!" });
    // } else {
    //   res.send({
    //     err: 'Postoji problem! Vase izmjene nisu snimljene! Kontaktirajte nas na "info@pcexpert.ba"!',
    //   });
    // }
  }
}
