import React from "react";
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
      <FirstProductLine />
      <SecondProductLine />
      <ThirdProductLine />
      <FourthProductLine />
      <FifthProductLine />
    </>
  );
}

export default Home;
