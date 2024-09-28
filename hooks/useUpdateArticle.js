import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const updateArticle = async (data) => {
  const response = await axios.post(
    "http://localhost:3000/api/updateProduct",
    data
  );

  return response.data;
};

const useUpdateArticle = () => {
  const queryClient = useQueryClient();
  return useMutation(
    { mutationFn: updateArticle, mutationKey: ["updateArticle"] },
    queryClient
  );
};

export { useUpdateArticle, updateArticle };
