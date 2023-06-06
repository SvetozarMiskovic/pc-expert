import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const fetchProducts = async () => {
  const response = await axios.get("http://localhost:3000/api/getProducts");

  return response.data;
};

const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
};

export { useProducts, fetchProducts };
