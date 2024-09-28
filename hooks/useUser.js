import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useQueryClient } from "@tanstack/react-query";
const fetchUser = async (id) => {
  const response = await axios.post("http://localhost:3000/api/getUser", id);

  return response.data;
};

const useUser = (id) => {
  return useQuery({
    queryKey: ["users", id],
    queryFn: fetchUser(),
  });
};

export { useUser, fetchUser };
