import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const fetchSingleArticle = async data => {
  const response = await axios.post(
    "http://localhost:3000/api/getSingleArticle",
    data
  );

  return response.data;
};

const useSingleArticle = data => {
  return useQuery({
    queryKey: ["singleProduct", data],
    queryFn: () => fetchSingleArticle(data),
  });
};

export { useSingleArticle, fetchSingleArticle };
