import cookie from "cookie";

export default function handler(req, res) {
  if (req.method === "GET") {
    const token = req.cookies?.authToken;
    res.setHeader(
      "Set-Cookie",
      cookie.serialize("authToken", token, {
        httpOnly: true,
        sameSite: "strict",
        maxAge: 0,
        path: "/",
      })
    );
    res.send({ message: "Odjavljeni ste sa naloga!" });
  } else {
    res.send("Nothing to see here...");
  }
}
