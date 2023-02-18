import React from "react";
import Admin from "./Admin";

function AdminComponent({ properties }) {
  return (
    <div className="admin-wrapper">
      <Admin properties={properties} />
    </div>
  );
}

export default AdminComponent;
