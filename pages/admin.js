import React from "react";
import AdminComponent from "../components/AdminComponents/AdminComponent";

// import { getDBFields } from "../helpers/getDBFields";
// import { db } from "../config/prismaClient";
// import { getDBData } from "../helpers/getDBData";
import { fetchProperties } from "../hooks/useProductProperties";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { fetchProducts } from "../hooks/useProducts";
import { useAuthContext } from "../context/AuthContext";

function AdminPage() {
  const { role } = useAuthContext();

  if (role !== "admin") return <h1>Niste ADMIN!</h1>;

  return (
    <div className="admin-page">
      <AdminComponent />
    </div>
  );
}

export default AdminPage;

export async function getStaticProps() {
  // const propertiesRes = await getDBFields(db);
  // const dataRes = await getDBData(db);
  const queryClient = new QueryClient();

  // await queryClient.prefetchQuery({
  //   queryKey: ["productProperties"],
  //   queryFn: fetchProperties,
  // });

  await queryClient.prefetchQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  await queryClient.prefetchQuery({
    queryKey: ["properties"],
    queryFn: fetchProperties,
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
