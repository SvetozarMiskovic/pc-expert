import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const deleteArticle = async (data) => {
  const response = await axios.post(
    "http://localhost:3000/api/deleteProduct",
    data
  );

  return response.data;
};

const useDeleteArticle = () => {
  const queryClient = useQueryClient();
  return useMutation(
    { mutationFn: deleteArticle, mutationKey: "deleteArticle" },
    queryClient
  );
};

export { useDeleteArticle, deleteArticle };
