import React from "react";
import NewCategories from "./NewCategories";
import FeatureList from "./FeatureList";
import QuickMenu from "../QuickMenuComponents/QuickMenu";

function SponsoredProducts() {
  return (
    <div className="spons-container">
      {/* <SubCategories /> */}
      {/* <Categories /> */}
      {/* <BigWrapper /> */}
      <FeatureList />
      <QuickMenu />
      <NewCategories />
    </div>
  );
}

export default SponsoredProducts;
