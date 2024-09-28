import React from "react";
import ShopCategory from "../../../components/ShopComponents/ShopCategory";
import ShopLayout from "../../../components/ShopComponents/ShopLayout";
import ShopContextProvider from "../../../context/ShopContext";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import {
  fetchSingleProduct,
  useSingleProduct,
} from "../../../hooks/useSingleProduct";

function Category({ cat }) {
  const { data: array, isLoading } = useSingleProduct({ category: cat });
  // console.log("DATA IZ KATEGORIJA", array);
  let data = [];
  if (array?.data) {
    data.push(...array?.data);
    // console.log("ovoe akoe array");
  }

  if (isLoading) return <h1>Loading...</h1>;
  // console.log("ovo je oridjidji", array, "ovoe nakon pusha", data, cat);
  return (
    <ShopContextProvider>
      <div className="category-page">
        <ShopLayout data={data}>
          <ShopCategory category={cat} data={data} />
        </ShopLayout>
      </div>
    </ShopContextProvider>
  );
}

export default Category;

export async function getServerSideProps(context) {
  const queryClient = new QueryClient();
  let currentPage = 1;
  const category = context.params.category;
  await queryClient.prefetchQuery({
    queryKey: ["singleProduct", category],
    queryFn: () => fetchSingleProduct({ category }),
  });

  return {
    props: {
      cat: context.query.category,

      currentPage: currentPage,
      dehydratedState: dehydrate(queryClient),
    },
  };
}
