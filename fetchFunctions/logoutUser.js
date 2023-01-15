import axios from "axios";

export const logoutUser = async () => {
  const url = "https://pc-expert.vercel.app/api/logout";
  const urlDev = "http://localhost:3000/api/logout";

  const result =
    process.env.NODE_ENV === "development"
      ? await axios(urlDev)
      : await axios(url);

  return result;
};
