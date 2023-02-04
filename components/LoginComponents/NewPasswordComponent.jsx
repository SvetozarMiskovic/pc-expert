import React from "react";
import NewPassword from "./NewPassword";

function NewPasswordComponent({ data }) {
  return (
    <div className="new-password-wrapper">
      <NewPassword data={data} />
    </div>
  );
}

export default NewPasswordComponent;
