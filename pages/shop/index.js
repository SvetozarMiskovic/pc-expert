import ShopComponent from "../../components/ShopComponents/ShopComponent";
import ShopLayout from "../../components/ShopComponents/ShopLayout";
import { whatToFetch } from "../../helpers/whatToFetch";

import ShopContextProvider from "../../context/ShopContext";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import axios from "axios";
import { fetchProducts } from "../../hooks/useProducts";
import { useProducts } from "../../hooks/useProducts";

export default function Shop({ cat }) {
  console.log("Jel fetcho ista", cat);
  const { data: products, isLoading, isError } = useProducts();
  const arrays = Object?.values(products);
  const data = arrays.flat();

  console.log(data);
  return (
    <ShopContextProvider>
      <div className="shop-page">
        <ShopLayout data={data}>
          <ShopComponent data={data} category={cat} />
        </ShopLayout>
      </div>
    </ShopContextProvider>
  );
}

export async function getServerSideProps(context) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
  // const final = rez.map(item => {
  //   item?.cijena = String(item?.cijena)
  //   item?.akcija = String(item?.akcija)

  //   return item
  // });
  // console.log("REZULT", result);

  return {
    props: {
      cat: !context.query.category && "all",
      dehydratedState: dehydrate(queryClient),
    },
  };
}
