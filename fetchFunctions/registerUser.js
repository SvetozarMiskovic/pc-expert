import axios from "axios";

export const registerUser = async data => {
  const url = "http://pc-expert.vercel.app:3000/api/register";

  const result = await axios.post(url, data);

  return result;
};
