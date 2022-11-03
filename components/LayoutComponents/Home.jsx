import React from "react";
import FeatureList from "../SponsoredComponents/FeatureList";
import FifthProductLine from "../FifthProductLine";
import FirstProductLine from "../FirstProductLine";
import FourthProductLine from "../FourthProductLine";
import SecondProductLine from "../SecondProductLine";
import SponsoredProducts from "../SponsoredComponents/SponsoredProducts";
import ThirdProductLine from "../ThirdProductLine";

function Home() {
  return (
    <>
      {/* <SponsoredProducts /> */}
      <FeatureList klasa="mobile" />
      <SponsoredProducts />
      <FirstProductLine />
      <SecondProductLine />
      <ThirdProductLine />
      <FourthProductLine />
      <FifthProductLine />
    </>
  );
}

export default Home;
