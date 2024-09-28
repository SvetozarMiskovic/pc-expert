import React from "react";
import ProductInfoComponent from "../../components/ShopComponents/ProductInfoComponent";
// import { db } from "../../config/prismaClient";
import { fetchWhatItem } from "../../helpers/fetchWhatItem";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import {
  fetchSingleArticle,
  useSingleArticle,
} from "../../hooks/useSingleArticle";

function ID({ id, category }) {
  const { data, isLoading } = useSingleArticle({ category, id });

  console.log("DEJTA IZ DINAMIK ID", data, id, category);
  // if (isLoading) return <h1>SVETO</h1>;
  // const data = {};
  return (
    <div className="product-info-page">
      <ProductInfoComponent data={data?.data} />
    </div>
  );
}

export default ID;
export async function getServerSideProps(ctx) {
  const queryClient = new QueryClient();
  const category = ctx.params.category;
  const id = ctx.params.id;

  await queryClient.prefetchQuery({
    queryKey: ["singleArticle"],
    queryFn: () => fetchSingleArticle({ category, id }),
  });
  // const res = await fetchWhatItem(db, ctx.params.category, ctx.params.id);

  return {
    props: {
      id,
      category,
      dehydratedState: dehydrate(queryClient),
    },
  };
}
