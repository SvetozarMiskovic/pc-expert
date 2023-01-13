import axios from "axios";

export const checkLogin = async () => {
  const url = "http://localhost:3000/api/hello";

  const result = await axios(url);

  return result;
};
