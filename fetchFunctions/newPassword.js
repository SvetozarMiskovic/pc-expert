import axios from "axios";

export const newPassword = async lozinka => {
  const url = "https://pc-expert.vercel.app/api/newPassword";
  const urlDev = "http://localhost:3000/api/newPassword";

  const result =
    process.env.NODE_ENV === "development"
      ? await axios.post(urlDev, lozinka)
      : await axios.post(url, lozinka);

  return result;
};
