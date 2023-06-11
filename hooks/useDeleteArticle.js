import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const deleteArticle = async data => {
  const response = await axios.post(
    "http://localhost:3000/api/deleteProduct",
    data
  );

  return response.data;
};

const useDeleteArticle = () => {
  return useMutation(deleteArticle);
};

export { useDeleteArticle, deleteArticle };
