import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const fetchSingleArticle = async (data) => {
  const response = await axios.post(
    "http://localhost:3000/api/getSingleArticle",
    data
  );

  console.log("EO IZ USE SINGLE ARTICLE RESPONSA", response?.data);

  return response?.data;
};

const useSingleArticle = (data) =>
  useQuery({
    queryKey: ["singleArticle"],
    queryFn: () => fetchSingleArticle(data),
  });

export { useSingleArticle, fetchSingleArticle };
