import axios from "axios";

export const checkLogin = async () => {
  const url = "https://pc-expert.vercel.app/api/hello";

  const result = await axios(url);

  return result;
};
