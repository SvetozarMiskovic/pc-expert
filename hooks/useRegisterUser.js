import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const registerUser = async data => {
  const response = await axios.post("http://localhost:3000/api/register", data);

  return response.data;
};

const useRegisterUser = () => {
  return useMutation(registerUser);
};

export { useRegisterUser, registerUser };
