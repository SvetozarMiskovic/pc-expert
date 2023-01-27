import React from "react";
import { useShopContext } from "../../context/ShopContext";
import Shop from "./Shop";

function ShopComponent({ category, data }) {
  return (
    <div className="shop-component-wrapper">
      <Shop category={category} data={data} />
    </div>
  );
}

export default ShopComponent;
