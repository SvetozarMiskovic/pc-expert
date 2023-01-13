import axios from "axios";

export const checkLogin = async () => {
  const url = "https://pc-expert.vercel.app:3000/api/hello";

  const result = await axios.get(url);

  return result;
};
