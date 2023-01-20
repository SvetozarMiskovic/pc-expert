import React from "react";
import { useShopContext } from "../../context/ShopContext";
import Shop from "./Shop";

function ShopComponent() {
  return (
    <div className="shop-component-wrapper">
      <Shop />
    </div>
  );
}

export default ShopComponent;
