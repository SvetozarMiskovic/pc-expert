import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const fetchSingleProduct = async (category) => {
  const response = await axios.post(
    "http://localhost:3000/api/getSingleProduct",
    category
  );
  console.log("RESPONSE NAKONG FETCHA", response?.data?.data);
  return response?.data;
};

const useSingleProduct = (category) => {
  return useQuery({
    staleTime: 1000 * 60,
    queryKey: ["singleProduct", category],
    queryFn: () => fetchSingleProduct(category),
  });
};

export { useSingleProduct, fetchSingleProduct };
