import axios from "axios";

export const logoutUser = async () => {
  const url = "https://pc-expert.vercel.app/api/logout";

  const result = await axios(url);

  return result;
};
