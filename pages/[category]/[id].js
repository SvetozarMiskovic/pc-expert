import React from "react";
import ProductInfoComponent from "../../components/ShopComponents/ProductInfoComponent";
import { db } from "../../config/prismaClient";
import { fetchWhatItem } from "../../helpers/fetchWhatItem";

function ID({ data }) {
  return (
    <div className="product-info-page">
      <ProductInfoComponent data={data} />
    </div>
  );
}

export default ID;
export async function getServerSideProps(ctx) {
  const res = await fetchWhatItem(db, ctx.params.category, ctx.params.id);

  return {
    props: {
      data: res,
    },
  };
}
