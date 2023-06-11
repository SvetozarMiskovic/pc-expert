import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const updateArticle = async data => {
  const response = await axios.post(
    "http://localhost:3000/api/updateProduct",
    data
  );

  return response.data;
};

const useUpdateArticle = () => {
  return useMutation(updateArticle);
};

export { useUpdateArticle, updateArticle };
