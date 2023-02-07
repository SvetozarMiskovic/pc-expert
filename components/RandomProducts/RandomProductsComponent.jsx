import React from "react";
import RandomProducts from "./RandomProducts";

function RandomProductsComponent({ data }) {
  return (
    <div className="random-products-wrapper">
      <RandomProducts data={data} />
    </div>
  );
}

export default RandomProductsComponent;
