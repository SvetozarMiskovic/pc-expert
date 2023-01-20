import { verify } from "jsonwebtoken";

export default function handler(req, res) {
  const jwt = req.cookies?.authToken;
  if (jwt) {
    const isValid = verify(jwt, process.env.JWT_SECRET);

    res.json({ isValid: !!isValid, userId: isValid.sub, role: isValid.role });
  } else {
    res.json(null);
  }
}
