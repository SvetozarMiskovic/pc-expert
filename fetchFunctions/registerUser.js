import axios from "axios";

export const registerUser = async data => {
  const url = "http://localhost:3000/api/register";

  const result = await axios.post(url, data);

  return result;
};
