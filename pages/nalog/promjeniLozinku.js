import React from "react";
import AccountLayout from "../../components/AccountComponents/AccountLayout";
import AccountNewPasswordComponent from "../../components/AccountComponents/AccountNewPasswordComponent";

function promjeniLozinku() {
  return (
    <div className="change-pw-page">
      <AccountLayout>
        <AccountNewPasswordComponent />
      </AccountLayout>
    </div>
  );
}

export default promjeniLozinku;
