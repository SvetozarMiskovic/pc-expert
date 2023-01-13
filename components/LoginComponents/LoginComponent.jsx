import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { toast } from "react-toastify";
import { useAuthContext } from "../../context/AuthContext";
import LoginForm from "./LoginForm";

function LoginComponent() {
  return (
    <div className="login-wrapper">
      <LoginForm />
    </div>
  );
}

export default LoginComponent;
