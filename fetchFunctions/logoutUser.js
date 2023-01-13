import axios from "axios";

export const logoutUser = async () => {
  const url = "http://localhost:3000/api/logout";

  const result = await axios(url);

  return result;
};
