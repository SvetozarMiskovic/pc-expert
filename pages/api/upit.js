import { transporter } from "../../config/transporterNM";

export default async function handler(req, res) {
  const mailHtml = `
  <h1>Dobili ste novi upit</h1>
  <h2>Detalji upita</h2>
  <ul>
  <li>Ime i prezime: ${req.body.ime_i_prezime}</li>
  <li>Broj telefona: ${req.body.broj_telefona}</li>
  <li>Email: ${req.body.email}</li>
  <li>Naslov upita: ${req.body.kratki_opis}</li>
  <li>Detaljno: ${req.body.detalji}</li>
  </ul>
  `;

  if (req.method === "POST") {
    const mailOptions = {
      from: "PCExpert Webshop Upit <tosve214@gmail.com>",
      to: "tosve214@gmail.com",
      subject: "PCExpert Webshop Upit",
      text: "PCExpert Webshop Upit",
      html: mailHtml,
    };
    transporter.sendMail(mailOptions, (err, data) => {
      if (err) {
        console.log(err);
        res.json({
          error:
            "Upit nije poslan! Pokusajte ponovo ili nas kontaktirajte putem emaila navedenog u opisu stranice!.",
        });
      }
      res.json({
        message:
          "Upit poslan! Bicete kontaktirani od strane PC Expert tima na navedeni email. Hvala vam na povjerenju!",
      });
    });
  }
}
