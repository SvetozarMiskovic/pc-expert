import axios from "axios";

export const getUser = async () => {
  const url = "https://pc-expert.vercel.app/api/getuser";
  const urlDev = "http://localhost:3000/api/getuser";

  const result =
    process.env.NODE_ENV === "development"
      ? await axios(urlDev)
      : await axios(url);

  return result;
};
