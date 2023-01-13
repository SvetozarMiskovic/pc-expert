import React from "react";
// import Carousel from "antd/lib/carousel";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Link from "next/link";

function SponsArticle({ klasa }) {
  return (
    <div
      className={
        klasa === "mobile"
          ? "article-wrapper mobile"
          : "article-wrapper desktop"
      }
    >
      <Carousel
        showStatus={false}
        dynamicHeight={false}
        showThumbs={false}
        className="carousel"
        autoPlay={true}
        infiniteLoop={true}
      >
        <div className="item">
          <div className="content-container">
            <div className="spons-button">
              <button type="button">
                <Link href={"#"}>Pogledaj artikl</Link>
              </button>
            </div>
          </div>
          <div className="img-container">
            <Image fill priority={true} src={"/mouse-image.jpg"} alt="spons" />
          </div>
        </div>

        <div className="item">
          <div className="content-container">
            <div className="spons-button">
              <button type="button">
                <Link href={"#"}>Pogledaj artikl</Link>
              </button>
            </div>
          </div>
          <div className="img-container">
            <Image fill src={"/second-image.jpg"} priority={true} alt="spons" />
          </div>
        </div>

        <div className="item">
          <div className="content-container">
            <div className="spons-button">
              <button type="button">
                <Link href={"#"}>Pogledaj artikl</Link>
              </button>
            </div>
          </div>
          <div className="img-container">
            <Image
              fill
              src={"/1200x600-Spons-Image.jpg"}
              priority={true}
              alt="spons"
            />
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default SponsArticle;
