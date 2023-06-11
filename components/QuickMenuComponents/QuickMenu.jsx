import React from "react";
import { Divider, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

function QuickMenu() {
  return (
    <div className="quick-menu-wrapper">
      <div className="quick-menu">
        <div className="single-menu">
          <Link
            href="/shop/laptopi"
            style={{
              width: "100%",
              // height: "250px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="menu-img-container">
              <Image src={"/static/laptop.png"} alt="proizvod" fill />
            </div>
            <div className="menu-text">
              <Text color={"#0c0c0c"}>Laptopi</Text>
            </div>
          </Link>
        </div>
        <div className="single-menu">
          <Link
            href="/shop/monitori"
            style={{
              width: "100%",
              // height: "250px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="menu-img-container">
              <Image fill src={"/static/monitor.png"} alt="proizvod" />
            </div>
            <div className="menu-text">
              <Text color={"#0c0c0c"}>Monitori</Text>
            </div>
          </Link>
        </div>
        <div className="single-menu">
          <Link
            href="/shop/racunari"
            style={{
              width: "100%",
              // height: "250px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="menu-img-container">
              <Image fill src={"/static/pc.png"} alt="proizvod" />
            </div>
            <div className="menu-text">
              <Text color={"#0c0c0c"}>Računari</Text>
            </div>
          </Link>
        </div>
        <div className="single-menu">
          <Link
            href="/shop/tv"
            style={{
              width: "100%",
              // height: "250px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="menu-img-container">
              <Image fill src={"/static/tv.png"} alt="proizvod" />
            </div>
            <div className="menu-text">
              <Text color={"#0c0c0c"}>Televizori</Text>
            </div>
          </Link>
        </div>
        <div className="single-menu">
          <Link
            href="/shop/telefoni"
            style={{
              width: "100%",
              // height: "250px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="menu-img-container">
              <Image fill src={"/static/phone.png"} alt="proizvod" />
            </div>
            <div className="menu-text">
              <Text color={"#0c0c0c"}>Telefoni</Text>
            </div>
          </Link>
        </div>
        <div className="single-menu">
          <Link
            href="/shop/periferija"
            style={{
              width: "100%",
              // height: "250px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="menu-img-container">
              <Image fill src={"/static/perifery.png"} alt="proizvod" />
            </div>
            <div className="menu-text">
              <Text color={"#0c0c0c"}>Periferija</Text>
            </div>
          </Link>
        </div>
        <div className="single-menu">
          <Link
            href="/shop/komponente"
            style={{
              width: "100%",
              // height: "250px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="menu-img-container">
              <Image fill src={"/static/components.png"} alt="proizvod" />
            </div>
            <div className="menu-text">
              <Text color={"#0c0c0c"}>Komponente</Text>
            </div>
          </Link>
        </div>
        <div className="single-menu">
          <Link
            href="/shop/mining"
            style={{
              width: "100%",
              // height: "250px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="menu-img-container">
              <Image fill src={"/static/mining-rig.png"} alt="proizvod" />
            </div>
            <div className="menu-text">
              <Text color={"#0c0c0c"}>Mining</Text>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default QuickMenu;
