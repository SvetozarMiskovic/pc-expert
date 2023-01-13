import axios from "axios";

export const loginUser = async data => {
  const url = "http://pc-expert.vercel.app:3000/api/login";

  const result = await axios.post(url, data);

  return result;
};
