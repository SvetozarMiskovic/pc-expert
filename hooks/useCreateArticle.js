import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const createArticle = async data => {
  const response = await axios.post(
    "http://localhost:3000/api/createProduct",
    data
  );

  return response.data;
};

const useCreateArticle = () => {
  return useMutation(createArticle);
};

export { useCreateArticle, createArticle };
