import React from "react";
import AccountSidebar from "./AccountSidebar";

function AccountLayout({ children }) {
  return (
    <div className="account-layout-wrapper">
      <AccountSidebar />
      {children}
    </div>
  );
}

export default AccountLayout;
