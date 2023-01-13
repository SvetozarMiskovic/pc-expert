import axios from "axios";

export const loginUser = async data => {
  const url = "https://pc-expert.vercel.app/api/login";

  const result = await axios.post(url, data);

  return result;
};
