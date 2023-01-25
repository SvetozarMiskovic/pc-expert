import axios from "axios";

export const checkLogin = async () => {
  const url = "https://pc-expert.vercel.app/api/hello";
  const urlDev = "http://localhost:3000/api/hello";

  const result =
    process.env.NODE_ENV === "development"
      ? await axios(urlDev)
      : await axios(urlDev);

  return result;
};
