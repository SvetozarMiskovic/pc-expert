import React from "react";
import Admin from "./Admin";

function AdminComponent({ properties, data }) {
  return (
    <div className="admin-wrapper">
      <Admin properties={properties} data={data} />
    </div>
  );
}

export default AdminComponent;
