import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const updateProfile = async data => {
  const response = await axios.post(
    "http://localhost:3000/api/updateProfile",
    data
  );

  return response.data;
};

const useUpdateProfile = () => {
  return useMutation(updateProfile, {
    mutationKey: ["users"],
  });
};

export { useUpdateProfile };
