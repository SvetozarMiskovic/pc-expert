import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const fetchProperties = async () => {
  const response = await axios.get("http://localhost:3000/api/getProperties");

  return response.data;
};

const useProductProperties = () => {
  return useQuery({
    queryKey: ["productProperties"],
    queryFn: fetchProperties,
  });
};

export { useProductProperties, fetchProperties };
