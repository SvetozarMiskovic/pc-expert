import React from "react";
import AccountLayout from "../../components/AccountComponents/AccountLayout";
import AccountOrdersComponent from "../../components/AccountComponents/AccountOrdersComponent";

function AccountOrders() {
  return (
    <div className="account-orders-page">
      <AccountLayout>
        <AccountOrdersComponent />
      </AccountLayout>
    </div>
  );
}

export default AccountOrders;
