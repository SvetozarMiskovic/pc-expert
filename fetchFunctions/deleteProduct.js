import axios from "axios";

export const deleteProduct = async id => {
  const url = "https://pc-expert.vercel.app/api/deleteProduct";
  const urlDev = "http://localhost:3000/api/deleteProduct";

  const result =
    process.env.NODE_ENV === "development"
      ? await axios.post(urlDev, id)
      : await axios.post(url, id);

  return result;
};
