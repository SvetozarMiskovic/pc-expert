import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const sendLogin = async (data) => {
  const response = await axios.post("http://localhost:3000/api/login", data);

  return response.data;
};

const useLoginUser = () => {
  const queryClient = useQueryClient();

  return useMutation(
    { mutationFn: sendLogin, mutationKey: ["login"] },
    queryClient
  );
};

export { useLoginUser, sendLogin };
