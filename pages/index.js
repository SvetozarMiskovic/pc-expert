import Home from "../components/LayoutComponents/Home";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { fetchProducts, useProducts } from "../hooks/useProducts";
// import { useLoginUser } from "../hooks/useLoginUser";
// import { useAuthContext } from "../context/AuthContext";
// import { getApp } from "firebase/app";
// import { useRouter } from "next/router";

export default function LandingPage() {
  const { data, isLoading } = useProducts();

  console.log("DEJTA STO VRACA IZ GET PRODUCTS", data);
  // console.log("dejta", products);
  return (
    <div className="homepage">
      <Home data={data} />
    </div>
  );
}

export async function getServerSideProps(ctx) {
  const queryClient = new QueryClient();

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
