import axios from "axios";

export const loginUser = async data => {
  const url = "https://pc-expert.vercel.app/api/login";
  const urlDev = "http://localhost:3000/api/login";

  const result =
    process.env.NODE_ENV === "development"
      ? await axios.post(urlDev, data)
      : await axios.post(url, data);

  return result;
};
