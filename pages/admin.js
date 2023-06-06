import React from "react";
import AdminComponent from "../components/AdminComponents/AdminComponent";
import { getDBFields } from "../helpers/getDBFields";
import { db } from "../config/prismaClient";
import { getDBData } from "../helpers/getDBData";

function AdminPage({ properties, data }) {
  const newData = Object.assign({}, data);

  return (
    <div className="admin-page">
      <AdminComponent properties={properties} data={data} />
    </div>
  );
}

export default AdminPage;

export async function getStaticProps() {
  const propertiesRes = await getDBFields(db);
  const dataRes = await getDBData(db);

  return {
    props: {
      properties: propertiesRes,
      data: JSON.parse(JSON.stringify(dataRes)),
    },
  };
}
