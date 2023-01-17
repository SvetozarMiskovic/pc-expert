import React from "react";
import { Divider } from "@chakra-ui/react";
import Image from "next/image";

function QuickMenu() {
  return (
    <div className="quick-menu-wrapper">
      <div className="quick-menu">
        <div className="single-menu">
          <div className="menu-img-container">
            <Image
              width={125}
              height={125}
              src={"/laptop.png"}
              alt="proizvod"
            />
          </div>
          <div className="menu-text">
            <h4>Laptopi</h4>
          </div>
        </div>
        <div className="single-menu">
          <div className="menu-img-container">
            <Image
              width={125}
              height={125}
              src={"/monitor.png"}
              alt="proizvod"
            />
          </div>
          <div className="menu-text">
            <h4>Monitori</h4>
          </div>
        </div>
        <div className="single-menu">
          <div className="menu-img-container">
            <Image width={125} height={125} src={"/PC.png"} alt="proizvod" />
          </div>
          <div className="menu-text">
            <h4>Računari</h4>
          </div>
        </div>
        <div className="single-menu">
          <div className="menu-img-container">
            <Image width={125} height={125} src={"/TV.png"} alt="proizvod" />
          </div>
          <div className="menu-text">
            <h4>Televizori</h4>
          </div>
        </div>
        <div className="single-menu">
          <div className="menu-img-container">
            <Image width={125} height={125} src={"/phone.png"} alt="proizvod" />
          </div>
          <div className="menu-text">
            <h4>Telefoni</h4>
          </div>
        </div>
        <div className="single-menu">
          <div className="menu-img-container">
            <Image width={125} height={125} src={"/KB.png"} alt="proizvod" />
          </div>
          <div className="menu-text">
            <h4>Periferija</h4>
          </div>
        </div>
        <div className="single-menu">
          <div className="menu-img-container">
            <Image
              width={125}
              height={125}
              src={"/graphics.png"}
              alt="proizvod"
            />
          </div>
          <div className="menu-text">
            <h4>Komponente</h4>
          </div>
        </div>
        <div className="single-menu">
          <div className="menu-img-container">
            <Image width={125} height={125} src={"/mine.png"} alt="proizvod" />
          </div>
          <div className="menu-text">
            <h4>Mining</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuickMenu;
