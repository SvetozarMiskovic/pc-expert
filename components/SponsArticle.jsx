import React from "react";
// import Carousel from "antd/lib/carousel";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function SponsArticle() {
  return (
    <div className="article-wrapper">
      <Carousel
        showStatus={false}
        dynamicHeight={false}
        showThumbs={false}
        className="carousel"
      >
        <div className="item">
          JEDAN
          <div style={{ width: "100%", height: "300px" }}>
            <img src="/second-image.jpg" />
          </div>
        </div>
        <div>DVA</div>
        <div>TRi</div>
      </Carousel>
    </div>
  );
}

export default SponsArticle;
