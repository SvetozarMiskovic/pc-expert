import axios from "axios";

export const updateProfile = async data => {
  const url = "https://pc-expert.vercel.app/api/updateProfile";
  const urlDev = "http://localhost:3000/api/updateProfile";

  const result =
    process.env.NODE_ENV === "development"
      ? await axios.post(urlDev, data)
      : await axios.post(url, data);

  return result;
};
