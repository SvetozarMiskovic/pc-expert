import Home from "../components/LayoutComponents/Home";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { fetchProducts, useProducts } from "../hooks/useProducts";
import { useLoginUser } from "../hooks/useLoginUser";
import { useAuthContext } from "../context/AuthContext";
import { getApp } from "firebase/app";
import { useRouter } from "next/router";

export default function LandingPage() {
  const { data, isLoading } = useProducts();

  // console.log("dejta", products);
  return (
    <div className="homepage">
      <Home data={data} />
    </div>
  );
}

export async function getServerSideProps(ctx) {
  const queryClient = new QueryClient();
  // const firebaseApp = getApp(useRouter().query.__firebaseAppName);

  // console.log(firebaseApp.currentUser);
  await queryClient.prefetchQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
  // const laptopi = await db.laptopi.findMany();
  // const monitori = await db.monitori.findMany();
  // const televizori = await db.televizori.findMany();
  // const telefoni = await db.telefoni.findMany();
  // const mining = await db.mining.findMany();
  // const periferija = await db.periferija.findMany();
  // const komponente = await db.komponente.findMany();
  // const racunari = await db.racunari.findMany();

  // // console.log(ctx.req.cookies.authToken);
  // const data = {
  //   laptopi: laptopi,
  //   monitori: monitori,
  //   televizori: televizori,
  //   telefoni: telefoni,
  //   mining: mining,
  //   periferija: periferija,
  //   komponente: komponente,
  //   racunari: racunari,
  // };

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
