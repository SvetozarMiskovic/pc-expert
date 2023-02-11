import React from "react";
import { Divider } from "@chakra-ui/react";
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
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="menu-img-container">
              <Image fill src={"/laptop.png"} alt="proizvod" />
            </div>
            <div className="menu-text">
              <h4>Laptopi</h4>
            </div>
          </Link>
        </div>
        <div className="single-menu">
          <Link
            href="/shop/monitori"
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="menu-img-container">
              <Image fill src={"/monitor.png"} alt="proizvod" />
            </div>
            <div className="menu-text">
              <h4>Monitori</h4>
            </div>
          </Link>
        </div>
        <div className="single-menu">
          <Link
            href="/shop/racunari"
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="menu-img-container">
              <Image fill src={"/pc.png"} alt="proizvod" />
            </div>
            <div className="menu-text">
              <h4>Računari</h4>
            </div>
          </Link>
        </div>
        <div className="single-menu">
          <Link
            href="/shop/tv"
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="menu-img-container">
              <Image fill src={"/tv.png"} alt="proizvod" />
            </div>
            <div className="menu-text">
              <h4>Televizori</h4>
            </div>
          </Link>
        </div>
        <div className="single-menu">
          <Link
            href="/shop/telefoni"
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="menu-img-container">
              <Image fill src={"/phone.png"} alt="proizvod" />
            </div>
            <div className="menu-text">
              <h4>Telefoni</h4>
            </div>
          </Link>
        </div>
        <div className="single-menu">
          <Link
            href="/shop/periferija"
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="menu-img-container">
              <Image fill src={"/perifery.png"} alt="proizvod" />
            </div>
            <div className="menu-text">
              <h4>Periferija</h4>
            </div>
          </Link>
        </div>
        <div className="single-menu">
          <Link
            href="/shop/komponente"
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="menu-img-container">
              <Image fill src={"/components.png"} alt="proizvod" />
            </div>
            <div className="menu-text">
              <h4>Komponente</h4>
            </div>
          </Link>
        </div>
        <div className="single-menu">
          <Link
            href="/shop/mining"
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="menu-img-container">
              <Image fill src={"/mining-rig.png"} alt="proizvod" />
            </div>
            <div className="menu-text">
              <h4>Mining</h4>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default QuickMenu;
