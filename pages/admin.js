import React from "react";
import AdminComponent from "../components/AdminComponents/AdminComponent";

// import { getDBFields } from "../helpers/getDBFields";
// import { db } from "../config/prismaClient";
// import { getDBData } from "../helpers/getDBData";
import {
  fetchProperties,
  useProductProperties,
} from "../hooks/useProductProperties";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { fetchProducts, useProducts } from "../hooks/useProducts";
import { useAuthContext } from "../context/AuthContext";

function AdminPage() {
  const { role } = useAuthContext();
  // const { data: productProperties, isLoading } = useProductProperties();
  const { data } = useProducts();
  const properties = {
    komponente: [
      "cijena",
      "detalji",
      "garancija",
      "id",
      "naslov",
      "proizvodjac",
      "vrsta",
    ],
    laptopi: [
      "akcija",
      "boja",
      "brzina_procesora",
      "tip_procesora",
      "procesor",
      "model_procesora",
      "bt",
      "cijena",
      "detalji",
      "garancija",
      "graficka_kartica",
      "hard_disk",
      "tip_hard_diska",
      "id",
      "mikrofon",
      "model",
      "naslov",
      "os",
      "proizvodjac",
      "tip_ram",
      "ram",
      "usb_portovi",
      "velicina_ekrana",
      "webcam",
    ],
    mining: ["akcija", "cijena", "detalji", "garancija", "id", "naslov"],
    periferija: [
      "id",
      "vrsta",
      "model",
      "proizvodjac",
      "detalji",
      "cijena",
      "garancija",
      "naslov",
      "akcija",
    ],
    racunari: [
      "id",
      "proizvodjac",
      "cijena",
      "garancija",
      "detalji",
      "procesor",
      "tip_procesora",
      "brzina_procesora",
      "model_procesora",
      "maticna_ploca",
      "graficka_kartica",
      "ram",
      "tip_ram",
      "tip_hard_diska",
      "hard_disk",
      "os",
      "memorija_graficke",
      "model_graficke",
      "naslov",
      "akcija",
    ],
    telefoni: [
      "id",
      "proizvodjac",
      "cijena",
      "os",
      "velicina_ekrana",
      "broj_sim",
      "procesor",
      "broj_jezgara",
      "baterija",
      "brzina_procesora",
      "model_procesora",
      "ram",
      "interna_memorija",
      "rezolucija_glavne_kamere",
      "rezolucija_prednje_kamere",
      "bt",
      "garancija",
      "boja",
      "detalji",
      "naslov",
      "akcija",
    ],
    monitori: [
      "id",
      "velicina_ekrana",
      "rezolucija",
      "proizvodjac",
      "model",
      "vga",
      "hdmi",
      "dvi",
      "display",
      "boja",
      "tip_ekrana",
      "refresh_rate",
      "garancija",
      "cijena",
      "detalji",
      "naslov",
      "akcija",
    ],
    tv: [
      "id",
      "cijena",
      "garancija",
      "model",
      "proizvodjac",
      "velicina_ekrana",
      "tip_ekrana",
      "rezolucija",
      "smart",
      "lan",
      "wifi",
      "hdmi",
      "vga",
      "scart",
      "detalji",
      "naslov",
      "akcija",
    ],
  };
  // let properties = [];
  // console.log(productProperties, data);
  if (role !== "admin") return <h1>Niste ADMIN!</h1>;
  return (
    <div className="admin-page">
      <AdminComponent properties={properties} data={data} />
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

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
