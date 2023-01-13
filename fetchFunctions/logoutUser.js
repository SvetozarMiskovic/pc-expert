import axios from "axios";

export const logoutUser = async () => {
  const url = "http://pc-expert.vercel.app:3000/api/logout";

  const result = await axios(url);

  return result;
};
