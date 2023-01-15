import { transporter } from "../../config/transporterNM";

export default async function handler(req, res) {
  const mailHtml = `
  <h1>Dobili ste novu narudzbu</h1>
  <h2>Detalji narudzbe</h2>
  <ul>
  <li>Ime i prezime: ${req.body.ime_i_prezime}</li>
  <li>Broj telefona: ${req.body.broj_telefona}</li>
  <li>Email: ${req.body.email}</li>
  <li>Adresa: ${req.body.adresa}</li>
  <li>Grad: ${req.body.grad}</li>
  <li>Ulica: ${req.body.ulica}</li>
  <li>Postanski broj: ${req.body.postanski_broj}</li>
  <li>Kratki opis: ${req.body.kratki_opis}</li>
  <li>Detaljno: ${req.body.detalji}</li>
  </ul>
  `;

  if (req.method === "POST") {
    const mailOptions = {
      from: "PCExpert Webshop Narudzba <tosve214@gmail.com>",
      to: "tosve214@gmail.com",
      subject: "PCExpert Webshop Narudzba",
      text: "PCExpert Webshop Narudzba",
      html: mailHtml,
    };
    transporter.sendMail(mailOptions, (err, data) => {
      if (err) {
        console.log(err);
        res.json({
          error:
            "Narudzba nije poslana! Pokusajte ponovo ili nas kontaktirajte putem emaila navedenog u opisu stranice!",
        });
      }
      res.json({
        message:
          "Narudzba poslana! Bicete kontaktirani od strane PC Expert tima na navedeni email. Hvala vam na povjerenju!",
      });
    });
  }
}
