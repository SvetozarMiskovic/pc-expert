import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../assets/T1.png";
import { Icon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import { FaList, FaSearch, FaShoppingCart, FaHeart } from "react-icons/fa";
function Navbar() {
  return (
    <div className="navbar">
      <div className="container upper-part">
        <div className="logo-link-div">
          <Link href="/" passHref className="logo-link">
            <a>
              <Image className="logo-image" href="/" src={logo} />
            </a>
          </Link>
        </div>

        <div className="navbar-links">
          <ul>
            <li>
              <Link href={"/shop"}>SHOP</Link>
            </li>
            <li>
              <Link href={"/orders"}>NARUDŽBE</Link>
            </li>
            <li>
              <Link href={"/about"}>O NAMA</Link>
            </li>
          </ul>
        </div>

        <div className="navbar-search">
          <input type={"text"} placeholder="Pretraži proizvode..." />
          <Button type="button" className="search-btn">
            <Icon as={FaSearch} />
          </Button>
        </div>
        <div className="cart-and-wishlist">
          <div className="toggle-nav hidden">
            <Button type="button" className="nav-btn">
              <Icon as={FaList} />
            </Button>
          </div>
          <div className="mobile-search hidden">
            <Button type="button" className="mobile-search-btn">
              <Icon as={FaSearch} />
            </Button>
          </div>
          <div className="shopping-cart">
            <Button type="button" className="shopping-cart-btn">
              <Icon as={FaShoppingCart} />
              <p>0.00KM</p>
            </Button>
          </div>
        </div>
      </div>
      {/* <div className="container lower-part">
        <h1>LOWER PART</h1>
      </div> */}
    </div>
  );
}

export default Navbar;
