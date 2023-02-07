import React from "react";
import RandomProductsComponent from "../RandomProducts/RandomProductsComponent";

import SponsoredProducts from "../SponsoredComponents/SponsoredProducts";

function Home({ data }) {
  return (
    <div className="home-wrapper container">
      <SponsoredProducts data={data} />
      <RandomProductsComponent data={data} />
    </div>
  );
}

export default Home;
