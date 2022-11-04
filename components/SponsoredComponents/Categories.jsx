import React, { useState } from "react";
import { FaThList } from "react-icons/fa";
import { Icon } from "@chakra-ui/icons";
import { LinkBox, LinkOverlay, Link } from "@chakra-ui/react";
import { useGlobalContext } from "../../context/GlobalContext";

function Categories() {
  const { openSubMenu, closeSubMenu, updateSubCategory, subCategory } =
    useGlobalContext();

  return (
    <div className="categories-wrapper">
      <div className="categories-header">
        <Icon as={FaThList} />
        <h3>Kategorije</h3>
      </div>
      <div className="categories-body">
        <div className="categories-list">
          <ul>
            <div
              onMouseOver={() => {
                openSubMenu();
                updateSubCategory("laptop");
              }}
              onMouseLeave={() => {
                closeSubMenu();
              }}
              className="single-category"
            >
              <LinkBox className="link-box">
                <LinkOverlay className="link-overlay" href="laptopi">
                  <p>Laptopi</p>
                  <p
                    className={subCategory === "laptop" ? "desktop" : "hidden"}
                  >
                    {">"}
                  </p>
                </LinkOverlay>
              </LinkBox>
            </div>
            <div
              onMouseOver={() => {
                openSubMenu();
                updateSubCategory("monitor");
              }}
              onMouseLeave={() => closeSubMenu()}
              className="single-category"
            >
              <LinkBox className="link-box">
                <LinkOverlay className="link-overlay" href="monitori">
                  <p>Monitori</p>
                  <p
                    className={subCategory === "monitor" ? "desktop" : "hidden"}
                  >
                    {">"}
                  </p>
                </LinkOverlay>
              </LinkBox>
            </div>
            <div
              onMouseOver={() => {
                openSubMenu();
                updateSubCategory("computer");
              }}
              onMouseLeave={() => closeSubMenu()}
              className="single-category"
            >
              <LinkBox className="link-box">
                <LinkOverlay className="link-overlay" href="racunari">
                  <p>Racunari i komponente</p>
                  <p
                    className={
                      subCategory === "computer" ? "desktop" : "hidden"
                    }
                  >
                    {">"}
                  </p>
                </LinkOverlay>
              </LinkBox>
            </div>
            <div
              onMouseOver={() => {
                openSubMenu();
                updateSubCategory("television");
              }}
              onMouseLeave={() => closeSubMenu()}
              className="single-category"
            >
              <LinkBox className="link-box">
                <LinkOverlay className="link-overlay" href="televizori">
                  <p>Televizori</p>
                  <p
                    className={
                      subCategory === "television" ? "desktop" : "hidden"
                    }
                  >
                    {">"}
                  </p>
                </LinkOverlay>
              </LinkBox>
            </div>
            <div
              onMouseOver={() => {
                openSubMenu();
                updateSubCategory("phone");
              }}
              onMouseLeave={() => closeSubMenu()}
              className="single-category"
            >
              <LinkBox className="link-box">
                <LinkOverlay className="link-overlay" href="telefoni">
                  <p>Telefoni</p>
                  <p className={subCategory === "phone" ? "desktop" : "hidden"}>
                    {">"}
                  </p>
                </LinkOverlay>
              </LinkBox>
            </div>
            <div
              onMouseOver={() => {
                openSubMenu();
                updateSubCategory("printer");
              }}
              onMouseLeave={() => closeSubMenu()}
              className="single-category"
            >
              <LinkBox className="link-box">
                <LinkOverlay className="link-overlay" href="printeri_i_skeneri">
                  <p>Printeri i skeneri</p>
                  <p
                    className={subCategory === "printer" ? "desktop" : "hidden"}
                  >
                    {">"}
                  </p>
                </LinkOverlay>
              </LinkBox>
            </div>
            <div
              onMouseOver={() => {
                openSubMenu();
                updateSubCategory("network");
              }}
              onMouseLeave={() => closeSubMenu()}
              className="single-category"
            >
              <LinkBox className="link-box">
                <LinkOverlay className="link-overlay" href="mrezna_oprema">
                  <p>Mrezna oprema i kamere</p>
                  <p
                    className={subCategory === "network" ? "desktop" : "hidden"}
                  >
                    {">"}
                  </p>
                </LinkOverlay>
              </LinkBox>
            </div>
            <div
              onMouseOver={() => {
                openSubMenu();
                updateSubCategory("mining");
              }}
              onMouseLeave={() => closeSubMenu()}
              className="single-category"
            >
              <LinkBox className="link-box">
                <LinkOverlay className="link-overlay" href="mining">
                  <p>Mining</p>
                  <p
                    className={subCategory === "mining" ? "desktop" : "hidden"}
                  >
                    {">"}
                  </p>
                </LinkOverlay>
              </LinkBox>
              {/* <div className="sub-categories">
                <div
                  onMouseEnter={() => {
                    setIsMining(true);
                  }}
                  onMouseLeave={() => {
                    setIsMining(false);
                  }}
                >
                  <h1>Kateogirija</h1>
                  <p>nesto ispisano ovde</p>
                </div>
              </div> */}
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Categories;
