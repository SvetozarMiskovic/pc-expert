import axios from "axios";

export const forgotPassword = async email => {
  const url = "https://pc-expert.vercel.app/api/forgotPassword";
  const urlDev = "http://localhost:3000/api/forgotPassword";

  const result =
    process.env.NODE_ENV === "development"
      ? await axios.post(urlDev, email)
      : await axios.post(url, email);

  return result;
};
