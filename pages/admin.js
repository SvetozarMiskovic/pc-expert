import React from "react";
import AdminComponent from "../components/AdminComponents/AdminComponent";
import { getDBFields } from "../helpers/getDBFields";
import { db } from "../config/prismaClient";

function AdminPage({ properties }) {
  return (
    <div className="admin-page">
      <AdminComponent properties={properties} />
    </div>
  );
}

export default AdminPage;

export async function getStaticProps() {
  const res = await getDBFields(db);

  return {
    props: {
      properties: res,
    },
  };
}
