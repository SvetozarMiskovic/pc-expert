import { db } from "../../config/prismaClient";

import { sign } from "jsonwebtoken";
import { transporter } from "../../config/transporterNM";

export default async function handler(req, res) {
  const sentEmail = req?.body?.email;

  if (req.method === "POST") {
    const value = await db.korisnici.findFirst({
      where: { email: sentEmail },
    });

    if (value) {
      const { id, email } = value;
      const payload = { id, email };
      const token = sign(payload, process.env.JWT_SECRET, {
        expiresIn: 1800,
      });

      const link =
        process.env.NODE_ENV === "development"
          ? `http://localhost:3000/novalozinka/${token}`
          : `https://pc-expert.vercel.app/novalozinka/${token}`;

      const layout = `
          <h2>Poštovani/na</h2>
          <h4>Ispod se nalazi link koji će vam pomoći da promjenite vašu lozinku.</h4>
          <h4>Klik na link ce vas odvesti na stranicu gdje morate da unesete novu lozinku da završite proces.</h4>
          <h4>Hvala vam na povjerenju.</h4>
          
          <h5>${link}</h5>`;
      const mailOptions = {
        from: "PC Expert <mailer@pcexpert.ba", // sender address
        to: email, // list of receivers
        subject: "Reset lozinke na PC Expert Webshop", // Subject line
        text: `Link za promjenu lozinke!`, // plain text body
        html: layout, // html body
      };

      // send mail with defined transport object
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return console.log(error);
        }
        res.send({ msg: `Link za promjenu lozinke je poslan na "${email}"` });
      });
      res.send({ msg: `Link za promjenu lozinke je poslan na "${email}"` });
    } else {
      res.send({ err: "Email ne postoji!" });
    }
  } else {
    res.send({ err: "Error" });
  }
}
