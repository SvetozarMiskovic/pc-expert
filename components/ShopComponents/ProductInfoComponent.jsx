import React from "react";
import ProductInfo from "./ProductInfo";

function ProductInfoComponent({ data }) {
  return (
    <div className="product-info-wrapper">
      <ProductInfo data={data} />
    </div>
  );
}

export default ProductInfoComponent;
