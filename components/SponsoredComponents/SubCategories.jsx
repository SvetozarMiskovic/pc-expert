import React from "react";
import { useGlobalContext } from "../../context/GlobalContext";

function SubCategories() {
  const { openSub, closeSubMenu, subCategory, openSubMenu } =
    useGlobalContext();

  const generateSubCategories = () => {
    switch (subCategory) {
      case "laptop": {
        return (
          <div className="categories-menu">
            <div className="manufacturer">
              <h3>Proizvođač</h3>
              <ul>
                <li>
                  <p>Acer</p>
                </li>
                <li>
                  <p>Asus</p>
                </li>
                <li>
                  <p>Dell</p>
                </li>
                <li>
                  <p>MAC</p>
                </li>
              </ul>
            </div>
            <div className="size">
              <h3>Veličina ekrana</h3>
              <ul>
                <li>
                  <p>14 inch</p>
                  <p>15 inch</p>
                  <p>17 inch</p>
                  <p>21 inch</p>
                  <p>24 inch</p>
                </li>
              </ul>
            </div>

            <p>Svi proizvodi</p>
          </div>
        );
      }

      case "monitor": {
        return (
          <div className="categories-menu">
            <div className="manufacturer">
              <h3>Proizvođač</h3>
              <ul>
                <li>
                  <p>Acer</p>
                </li>
                <li>
                  <p>Asus</p>
                </li>
                <li>
                  <p>AOC</p>
                </li>
                <li>
                  <p>Dell</p>
                </li>
                <li>
                  <p>Lenovo</p>
                </li>
                <li>
                  <p>Samsung</p>
                </li>
              </ul>
            </div>
            <div className="size">
              <h3>Veličina ekrana</h3>
              <ul>
                <li>
                  <p>21 inch</p>
                  <p>24 inch</p>
                  <p>27 inch</p>
                  <p>32 inch</p>
                </li>
              </ul>
            </div>

            <p>Svi proizvodi</p>
          </div>
        );
      }
      case "computer": {
        return (
          <div className="categories-menu">
            <div className="components">
              <h3>Racunarske komponente</h3>
            </div>
            <div className="perifery">
              <h3>Racunarska perferija</h3>
            </div>
            <p>Svi proizvodi</p>
          </div>
        );
      }
    }
  };

  return (
    <div
      onMouseEnter={() => {
        openSubMenu();
      }}
      onMouseLeave={() => {
        closeSubMenu();
      }}
      className={
        !openSub ? "categories-menu-wrapper" : "categories-menu-wrapper desktop"
      }
    >
      {generateSubCategories()}
    </div>
  );
}

export default SubCategories;
