import axios from "axios";

export const createProduct = async payload => {
  const url = "https://pc-expert.vercel.app/api/createProduct";
  const urlDev = "http://localhost:3000/api/createProduct";

  const result =
    process.env.NODE_ENV === "development"
      ? await axios.post(urlDev, payload)
      : await axios.post(url, payload);

  return result;
};
