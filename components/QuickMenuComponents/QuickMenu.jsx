import React from "react";
import { Divider } from "@chakra-ui/react";
import Image from "next/image";

function QuickMenu() {
  return (
    <div className="quick-menu-wrapper">
      <Divider borderColor={"#5f5f5f70"} opacity={100} />
      <div className="quick-menu">
        <div className="single-menu">
          <div className="menu-img-container">
            <Image width={150} height={150} src={"/laptop.png"} />
          </div>
          <div className="menu-text">
            <h4>Laptopi</h4>
          </div>
        </div>
        <div className="single-menu">
          <div className="menu-img-container">
            <Image width={150} height={150} src={"/monitor.png"} />
          </div>
          <div className="menu-text">
            <h4>Monitori</h4>
          </div>
        </div>
        <div className="single-menu">
          <div className="menu-img-container">
            <Image width={150} height={150} src={"/PC.png"} />
          </div>
          <div className="menu-text">
            <h4>Računari</h4>
          </div>
        </div>
        <div className="single-menu">
          <div className="menu-img-container">
            <Image width={150} height={150} src={"/TV.png"} />
          </div>
          <div className="menu-text">
            <h4>Televizori</h4>
          </div>
        </div>
        <div className="single-menu">
          <div className="menu-img-container">
            <Image width={150} height={150} src={"/phone.png"} />
          </div>
          <div className="menu-text">
            <h4>Telefoni</h4>
          </div>
        </div>
        <div className="single-menu">
          <div className="menu-img-container">
            <Image width={150} height={150} src={"/KB.png"} />
          </div>
          <div className="menu-text">
            <h4>Periferija</h4>
          </div>
        </div>
        <div className="single-menu">
          <div className="menu-img-container">
            <Image width={150} height={150} src={"/graphics.png"} />
          </div>
          <div className="menu-text">
            <h4>Komponente</h4>
          </div>
        </div>
        <div className="single-menu">
          <div className="menu-img-container">
            <Image width={150} height={150} src={"/mine.png"} />
          </div>
          <div className="menu-text">
            <h4>Mining</h4>
          </div>
        </div>
      </div>
      <Divider borderColor={"#5f5f5f70"} opacity={100} />
    </div>
  );
}

export default QuickMenu;
