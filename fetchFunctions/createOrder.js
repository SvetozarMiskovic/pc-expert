import axios from "axios";

export const createOrder = async payload => {
  const url = "https://pc-expert.vercel.app/api/createOrder";
  const urlDev = "http://localhost:3000/api/createOrder";

  const result =
    process.env.NODE_ENV === "development"
      ? await axios.post(urlDev, payload)
      : await axios.post(url, payload);

  return result;
};
