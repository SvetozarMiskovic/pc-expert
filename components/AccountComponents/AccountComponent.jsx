import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useAuthContext } from "../../context/AuthContext";
import Account from "./Account";

function AccountComponent({ userObj }) {
  return (
    <div className="account-wrapper">
      <Account userObj={userObj} />
    </div>
  );
}

export default AccountComponent;
