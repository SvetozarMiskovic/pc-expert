import axios from "axios";

export const sendQuery = async data => {
  const url = "https://pc-expert.vercel.app/api/upit";
  const urlDev = "http://localhost:3000/api/upit";

  const result =
    process.env.NODE_ENV === "development"
      ? await axios.post(urlDev, data)
      : await axios.post(url, data);

  return result;
};
