import React from "react";
import NewCategories from "./NewCategories";
import FeatureList from "./FeatureList";
import QuickMenu from "../QuickMenuComponents/QuickMenu";

function SponsoredProducts({ data }) {
  return (
    <div className="spons-container">
      <FeatureList />
      <QuickMenu />
      <NewCategories data={data} />
    </div>
  );
}

export default SponsoredProducts;
