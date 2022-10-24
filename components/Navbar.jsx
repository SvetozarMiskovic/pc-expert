import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../assets/T1.png";
import { Icon } from "@chakra-ui/icons";
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
              <Link href={"/information"}>INFORMACIJE</Link>
            </li>
            <li>
              <Link href={"/location"}>LOKACIJA</Link>
            </li>
            <li>
              <Link href={"/orders"}>NARUDZBE</Link>
            </li>
          </ul>
        </div>
        <div className="toggle-nav hidden">
          <button type="button" className="nav-btn">
            <Icon as={FaList} />
          </button>
        </div>
        <div className="navbar-search">
          <input type={"text"} />
          <button type="button" className="search-btn">
            <Icon as={FaSearch} />
          </button>
        </div>
        <div className="cart-and-wishlist">
          <div className="mobile-search">
            <button type="button" className="mobile-search-btn">
              <Icon as={FaSearch} />
            </button>
          </div>
          <div className="wishlist">
            <button type="button" className="wishlist-btn">
              <Icon as={FaHeart} />
            </button>
          </div>
          <div className="shopping-cart">
            <button type="button" className="shopping-cart-btn">
              <Icon as={FaShoppingCart} />
              <p>0.00KM</p>
            </button>
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
