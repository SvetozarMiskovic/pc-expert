import React from "react";
import FeatureList from "./FeatureList";
import FifthProductLine from "./FifthProductLine";
import FirstProductLine from "./FirstProductLine";
import FourthProductLine from "./FourthProductLine";
import SecondProductLine from "./SecondProductLine";
import SponsoredProducts from "./SponsoredProducts";
import ThirdProductLine from "./ThirdProductLine";

function Home() {
  return (
    <>
      {/* <SponsoredProducts /> */}
      <SponsoredProducts />
      <FeatureList klasa="mobile" />
      <FirstProductLine />
      <SecondProductLine />
      <ThirdProductLine />
      <FourthProductLine />
      <FifthProductLine />
    </>
  );
}

export default Home;
