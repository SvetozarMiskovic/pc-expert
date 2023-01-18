import React from "react";
import AccountMobileSidebar from "./AccountMobileSidebar";
import AccountSidebar from "./AccountSidebar";

function AccountLayout({ children }) {
  return (
    <div className="account-layout-wrapper">
      <AccountSidebar />
      <AccountMobileSidebar />
      {children}
    </div>
  );
}

export default AccountLayout;
