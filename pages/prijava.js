import React from "react";
import LoginComponent from "../components/LoginComponents/LoginComponent";
import { useRouter } from "next/router";

function Login() {
  return (
    <div className="login-page">
      <LoginComponent />
    </div>
  );
}

export default Login;
