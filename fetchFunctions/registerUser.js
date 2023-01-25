import axios from "axios";

export const registerUser = async data => {
  const url = "https://pc-expert.vercel.app/api/register";
  const urlDev = "http://localhost:3000/api/register";

  const result =
    process.env.NODE_ENV === "development"
      ? await axios.post(urlDev, data)
      : await axios.post(urlDev, data);

  return result;
};
