import React from "react";
import QuickMenu from "../QuickMenuComponents/QuickMenu";
import FeatureList from "../SponsoredComponents/FeatureList";
import SponsArticle from "../SponsoredComponents/SponsArticle";

import SponsoredProducts from "../SponsoredComponents/SponsoredProducts";

function Home() {
  return (
    <>
      <FeatureList klasa="mobile" />
      <SponsArticle klasa="mobile" />
      <SponsoredProducts />
      <QuickMenu />
    </>
  );
}

export default Home;
