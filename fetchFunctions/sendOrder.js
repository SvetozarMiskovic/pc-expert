import axios from "axios";

export const sendOrder = async data => {
  const url = "https://pc-expert.vercel.app/api/narudzba";
  const urlDev = "http://localhost:3000/api/narudzba";

  const result =
    process.env.NODE_ENV === "development"
      ? await axios.post(urlDev, data)
      : await axios.post(url, data);

  return result;
};
