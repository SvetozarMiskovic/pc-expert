import React from "react";
import BigWrapper from "./BigWrapper";
import Categories from "./Categories";
import SubCategories from "./SubCategories";

function SponsoredProducts() {
  return (
    <div className="spons-container">
      <SubCategories />
      <Categories />
      <BigWrapper />
    </div>
  );
}

export default SponsoredProducts;
