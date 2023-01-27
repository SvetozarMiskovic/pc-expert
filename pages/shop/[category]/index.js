import React from "react";
import ShopCategory from "../../../components/ShopComponents/ShopCategory";
import ShopLayout from "../../../components/ShopComponents/ShopLayout";

import { db } from "../../../config/prismaClient";

import { whatToFetch } from "../../../helpers/whatToFetch";
import ShopContextProvider from "../../../context/ShopContext";

function Category({ cat, data }) {
  console.log(`Iz category shopa:`, data);
  return (
    <ShopContextProvider>
      <div className="category-page">
        <ShopLayout>
          <ShopCategory category={cat} data={data} />
        </ShopLayout>
      </div>
    </ShopContextProvider>
  );
}

export default Category;

export async function getServerSideProps(context) {
  const rez = await whatToFetch(context.query.category, db);

  return {
    props: {
      cat: context.query.category,
      data: !!rez && rez,
    },
  };
}
