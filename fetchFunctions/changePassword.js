import axios from "axios";

export const changePassword = async data => {
  const url = "https://pc-expert.vercel.app/api/changePassword";
  const urlDev = "http://localhost:3000/api/changePassword";

  const result =
    process.env.NODE_ENV === "development"
      ? await axios.post(urlDev, data)
      : await axios.post(url, data);

  return result;
};
