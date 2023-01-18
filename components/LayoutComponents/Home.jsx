import React from "react";

import CartComponent from "../CartComponents/CartComponent";
import ComputerOfferComponent from "../ComputerOfferComponents/ComputerOfferComponent";
import PhoneOfferComponent from "../PhoneOfferComponents/PhoneOfferComponent";

import Categories from "../SponsoredComponents/Categories";
import FeatureList from "../SponsoredComponents/FeatureList";

import SponsoredProducts from "../SponsoredComponents/SponsoredProducts";

function Home() {
  return (
    <div className="home-wrapper container">
      {/* <FeatureList klasa="mobile" /> */}

      <SponsoredProducts />
      {/* <Categories klasa="mobile" /> */}

      <ComputerOfferComponent />
      <PhoneOfferComponent />
    </div>
  );
}

export default Home;
