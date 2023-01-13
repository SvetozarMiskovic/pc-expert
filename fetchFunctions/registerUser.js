import axios from "axios";

export const registerUser = async data => {
  const url = "https://pc-expert.vercel.app/api/register";

  const result = await axios.post(url, data);

  return result;
};
