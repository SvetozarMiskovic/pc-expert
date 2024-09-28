import { db } from "../../config/prismaClient";
import { hash, compare } from "bcrypt";
import { userExistsQuery } from "../../queries/userExistsQuery";
import { registerUserQuery } from "../../queries/registerUserQuery";
import cookie from "cookie";
import { removeUserQuery } from "../../queries/removeUserQuery";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { userInfo, jwt = null, isGoogle = false } = req.body;
    // console.log("juzer info", userInfo, jwt);
    if (userInfo.lozinka) {
      const hashedPw = await hash(userInfo.lozinka, 10);
      userInfo.lozinka = hashedPw;
    }

    console.log("STIGLO NA SERVER DA KREIRAM", req.body);
    const isDuplicate = await userExistsQuery(userInfo.email);
    console.log("JEL DUPLICAT", isDuplicate);
    if (!isDuplicate?.id) {
      const isRegistered = await registerUserQuery(userInfo);
      console.log("TRENUTAK REGISTERA", isRegistered);
      if (jwt) {
        res.setHeader(
          "Set-Cookie",
          cookie.serialize("authToken", jwt, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== "development",
            sameSite: "strict",
            path: "/",
          })
        );
        res.send({ auth: "Registracija uspješna!" });
      }
    } else {
      if (isGoogle) {
        const removed = await removeUserQuery(isDuplicate?.id);
        // console.log("jel removed", removed);
        const success = await registerUserQuery(userInfo);
        // console.log("jel success register", success);

        // console.log(jwt);
        if (jwt) {
          res.setHeader(
            "Set-Cookie",
            cookie.serialize("authToken", jwt, {
              httpOnly: true,
              secure: process.env.NODE_ENV !== "development",
              sameSite: "strict",
              path: "/",
            })
          );

          res.send({
            auth: "Postojeći nalog sa istim emailom uspješno povezan na Google nalog!",
          });
        }
      }
    }
  } else {
    res.send({ message: "Nema odje nista!" });
  }
}
