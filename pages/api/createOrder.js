import { compare, hash } from "bcrypt";
import { verify } from "jsonwebtoken";
import { db } from "../../config/prismaClient";
import { transporter } from "../../config/transporterNM";
import { T1 as logo } from "../../public/static/T1.png";
import { formatPrice } from "../../helpers/formatPrice";
export const config = {
  api: {
    externalResolver: true,
  },
};

export default async function handler(req, res) {
  if (req.method === "POST") {
    const isUser = req.body?.isUser;
    const order = req.body?.order;
    const JWT = req.cookies?.authToken;
    const total = req.body?.total;

    const isValid = verify(JWT, process.env.JWT_SECRET, (err, data) => {
      if (err) return false;
      return data;
    });

    const currDate = new Date();

    const y = currDate.getFullYear();
    const m = currDate.getMonth() + 1;
    const d = currDate.getDate();

    const str = `${d}.${m}.${y}`;

    if (isUser && isValid) {
      const main = async () => {
        // console.log(order);

        const mailOptions = {
          from: "PC Expert <mailer@pcexpert.ba", // sender address
          to: [order?.email], // list of receivers
          subject: `PC Expert Webshop - Potvrda narudžbe / ${order?.id} /`, // Subject line
          text: `Hvala vam na povjerenju!`, // plain text body
          html: `
          <div>
            <h1 style="color: #007fff; margin: 0; padding:0"><span style="color: #4cbb17;">PC</span> Expert Webshop</h1>
            <h1 style="margin: 0;padding:0">Hvala vam na povjerenju!</h1>

            <h1 style=" color: #007fff;text-align:start;">- Potvrda narudžbe -</h1>

            <p style="margin: 0; padding: 0;"><span style="font-weight: bold;">ID narudžbe:</span> ${
              order?.id
            }</p>
            <p style="margin: 0; padding: 0;"> 
            <span style="font-weight: bold;">ID korisnika:</span> ${
              isValid.sub ? isValid?.sub : "NIJE REGISTROVAN"
            }</p>
            <p style="margin: 0; padding: 0;"><span style="font-weight: bold;">Datum narudžbe:</span> ${str}</p>
            <p style="margin: 0; padding: 0;"><span style="font-weight: bold;">Datum isporuke:</span> Nije određeno</p>
            <p style="margin: 0; padding: 0;"><span style="font-weight: bold;">Poslano:</span> Ne</p>
            <p style="margin: 0; padding: 0;"><span style="font-weight: bold;">Ukupna cijena:</span> ${formatPrice(
              total.replace(/[^0-9-.]/g, "")
            )} KM</p>
            <p style="margin: 0; padding: 0;"><span style="font-weight: bold;">Ime i prezime:</span> ${
              order?.ime_i_prezime
            }</p>
            <p style="margin: 0; padding: 0;"><span style="font-weight: bold;">Email:</span> ${
              order?.email
            }</p>
            <p style="margin: 0; padding: 0;"><span style="font-weight: bold;">Broj telefona:</span> ${
              order?.broj_telefona
            }</p>
            <p style="margin: 0; padding: 0;"><span style="font-weight: bold;">Ulica:</span> ${
              order?.ulica
            }</p>
            <p style="margin: 0; padding: 0;"><span style="font-weight: bold;">Grad:</span> ${
              order?.grad
            }</p>
            <p style="margin: 0; padding: 0;"><span style="font-weight: bold;">Poštanski broj:</span> ${
              order?.postanski_broj
            }</p>
            <p style="margin: 0; padding: 0;"><span style="font-weight: bold;">Adresa:</span> ${
              order?.adresa
            }</p>
            <p style="margin: 0; padding: 0;"><span style="font-weight: bold;">Adresa 2:</span>  ${
              order?.adresa_2
            }</p>
            <p style="margin: 0; padding: 0;"><span style="font-weight: bold;">Napomena:</span> ${
              order?.napomena
            }</p>

            <h3 style="font-weight: bold;">Artikli:</h3>

            ${order?.artikli?.map(obj => {
              return `<div
              className="finished-order-body-single-info-item"
              key={obj?.product?.id}
            >
              <div className="finished-order-body-single-info-text">
                <div className="finished-order-body-single-info-text-title">
                  <p
                  style="margin: 0; padding: 0;"
                  >
                    <span style="font-weight: bold;">Naslov artikla:</span> ${
                      obj?.product?.naslov
                    }
                  </p>
                  <p
                  style="margin: 0; padding: 0;"
                  >
                  <span style="font-weight: bold;">ID Artikla:</span> ${
                    obj?.product?.id
                  }
                  </p>
                </div>
                <div className="finished-order-body-single-info-text-qty">
                  <p style="margin: 0; padding: 0;">
                  <span style="font-weight: bold;">Kolicina:</span> ${
                    obj?.qty
                  } X${" "}
                    ${formatPrice(obj?.product?.cijena)} KM
                  </p>
                </div>
                <div className="finished-order-body-single-info-text-price">
                  <p
                  style="margin: 0; padding: 0;"
                  >
                  <span style="font-weight: bold;">Ukupno:</span>
                 
                   ${formatPrice(obj?.qty * obj?.product?.cijena)} ${" "}
                    KM
                    </p>
                </div>
              </div>
            </div>
            `;
            })}
            </div>
          `, // html body
        };
        // send mail with defined transport object
        transporter.sendMail(mailOptions, async (error, info) => {
          if (error?.message === "No recipients defined") {
            console.log("!ERROR - REASON: ", error.message);
            return res.json({
              msg: "Neispravan email! Ispravite grešku i pokušajte ponovo!",
            });
          }

          const create = await db.narudzbe
            .create({
              data: {
                id: order?.id,
                id_korisnika: isValid?.sub,
                datum_narudzbe: str,
                datum_isporuke: "Nije odredjeno",
                poslano: "Ne",
                ukupna_cijena: parseFloat(total.replace(/[^0-9-.]/g, "")),
                artikli: JSON.stringify(order?.artikli),
                ime_i_prezime: order?.ime_i_prezime,
                ulica: order?.ulica,
                email: order?.email,
                broj_telefona: String(order?.broj_telefona),
                napomena: order?.napomena,
                postanski_broj: String(order?.postanski_broj),
                adresa: order?.adresa,
                adresa_2: order?.adresa_2,
                grad: order?.grad,
              },
            })
            .catch(err => {
              console.log("Greška! ID Narudžbe već postoji!");
              console.log(err);
            });

          const payload = {
            created: create,
            msg: `Narudžba potvrđena. Potvrda narudžbe je poslana na ${order?.email}`,
          };
          res.json(payload);
        });
      };
      main();
    } else {
      const main = async () => {
        const mailOptions = {
          from: "PC Expert <mailer@pcexpert.ba", // sender address
          to: [order?.email], // list of receivers
          subject: `PC Expert Webshop - Potvrda narudžbe / ${order?.id} /`, // Subject line
          text: `Hvala vam na povjerenju!`, // plain text body
          html: `
          <div>
            <h1 style="color: #007fff; margin: 0; padding:0"><span style="color: #4cbb17;">PC</span> Expert</h1>
            <h1 style="margin: 0;padding:0">Hvala vam na povjerenju!</h1>

            <h1 style=" color: #007fff;text-align:start;">- Potvrda narudžbe -</h1>

            <p style="margin: 0; padding: 0;"><span style="font-weight: bold;">ID narudžbe:</span> ${
              order?.id
            }</p>
            <p style="margin: 0; padding: 0;"> 
            <span style="font-weight: bold;">ID korisnika:</span> ${
              isValid.sub ? isValid?.sub : "NIJE REGISTROVAN"
            }</p>
            <p style="margin: 0; padding: 0;"><span style="font-weight: bold;">Datum narudžbe:</span> ${str}</p>
            <p style="margin: 0; padding: 0;"><span style="font-weight: bold;">Datum isporuke:</span> Nije određeno</p>
            <p style="margin: 0; padding: 0;"><span style="font-weight: bold;">Poslano:</span> Ne</p>
            <p style="margin: 0; padding: 0;"><span style="font-weight: bold;">Ukupna cijena:</span> ${formatPrice(
              total.replace(/[^0-9-.]/g, "")
            )} KM</p>
            <p style="margin: 0; padding: 0;"><span style="font-weight: bold;">Ime i prezime:</span> ${
              order?.ime_i_prezime
            }</p>
            <p style="margin: 0; padding: 0;"><span style="font-weight: bold;">Email:</span> ${
              order?.email
            }</p>
            <p style="margin: 0; padding: 0;"><span style="font-weight: bold;">Broj telefona:</span> ${
              order?.broj_telefona
            }</p>
            <p style="margin: 0; padding: 0;"><span style="font-weight: bold;">Ulica:</span> ${
              order?.ulica
            }</p>
            <p style="margin: 0; padding: 0;"><span style="font-weight: bold;">Grad:</span> ${
              order?.grad
            }</p>
            <p style="margin: 0; padding: 0;"><span style="font-weight: bold;">Poštanski broj:</span> ${
              order?.postanski_broj
            }</p>
            <p style="margin: 0; padding: 0;"><span style="font-weight: bold;">Adresa:</span> ${
              order?.adresa
            }</p>
            <p style="margin: 0; padding: 0;"><span style="font-weight: bold;">Adresa 2:</span>  ${
              order?.adresa_2
            }</p>
            <p style="margin: 0; padding: 0;"><span style="font-weight: bold;">Napomena:</span> ${
              order?.napomena
            }</p>

            <h3 style="font-weight: bold;">Artikli:</h3>

            ${order?.artikli?.map(obj => {
              return `<div
              className="finished-order-body-single-info-item"
              key={obj?.product?.id}
            >
              <div className="finished-order-body-single-info-text">
                <div className="finished-order-body-single-info-text-title">
                  <p
                  style="margin: 0; padding: 0;"
                  >
                    <span style="font-weight: bold;">Naslov artikla:</span> ${
                      obj?.product?.naslov
                    }
                  </p>
                  <p
                  style="margin: 0; padding: 0;"
                  >
                  <span style="font-weight: bold;">ID Artikla:</span> ${
                    obj?.product?.id
                  }
                  </p>
                </div>
                <div className="finished-order-body-single-info-text-qty">
                  <p style="margin: 0; padding: 0;">
                  <span style="font-weight: bold;">Kolicina:</span> ${
                    obj?.qty
                  } X${" "}
                    ${formatPrice(obj?.product?.cijena)} KM
                  </p>
                </div>
                <div className="finished-order-body-single-info-text-price">
                  <p
                  style="margin: 0; padding: 0;"
                  >
                  <span style="font-weight: bold;">Ukupno:</span>
                 
                   ${formatPrice(obj?.qty * obj?.product?.cijena)} ${" "}
                    KM
                    </p>
                </div>
              </div>
            </div>
            `;
            })}
            </div>
          `, // html body
        };
        // send mail with defined transport object
        transporter.sendMail(mailOptions, async (error, info) => {
          if (error?.message === "No recipients defined") {
            console.log("!ERROR - REASON: ", error.message);
            return res.json({
              msg: "Neispravan email! Ispravite grešku i pokušajte ponovo!",
            });
          }

          const create = await db.narudzbe
            .create({
              data: {
                id: order?.id,
                id_korisnika: null,
                datum_narudzbe: str,
                datum_isporuke: "Nije odredjeno",
                poslano: "Ne",
                ukupna_cijena: parseFloat(total.replace(/[^0-9-.]/g, "")),
                artikli: JSON.stringify(order?.artikli),
                ime_i_prezime: order?.ime_i_prezime,
                ulica: order?.ulica,
                email: order?.email,
                broj_telefona: String(order?.broj_telefona),
                napomena: order?.napomena,
                postanski_broj: String(order?.postanski_broj),
                adresa: order?.adresa,
                adresa_2: order?.adresa_2,
                grad: order?.grad,
              },
            })
            .catch(err => {
              console.log("Greška! ID Narudžbe već postoji!");
              console.log(err);
            });

          const payload = {
            created: create,
            msg: `Narudžba potvrđena. Potvrda narudžbe je poslana na ${order?.email}`,
          };
          res.json(payload);
        });
      };
      main();
    }
  }
}
