import React from "react";
import Categories from "./Categories";
import FeatureList from "./FeatureList";
import SponsArticle from "./SponsArticle";

function SponsoredProducts() {
  return (
    <div className="spons-container">
      <Categories />
      <FeatureList />
      <SponsArticle />
    </div>
  );
}

export default SponsoredProducts;
