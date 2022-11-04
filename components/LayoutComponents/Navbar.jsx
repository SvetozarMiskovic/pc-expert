import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";

import { Icon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import { FaList, FaSearch, FaShoppingCart, FaHeart } from "react-icons/fa";
import MobileMenu from "../MobileComponents/MobileMenu";
import { useGlobalContext } from "../../context/GlobalContext";

function Navbar() {
  const { updateMobile, updateMobileSearch } = useGlobalContext();

  return (
    <div className="navbar">
      <MobileMenu />
      <div className="container upper-part">
        <div className="logo-link-div">
          <Link href="/" passHref className="logo-link">
            <a>
              <Image
                priority
                width={300}
                height={300}
                className="logo-image"
                href="/"
                src="/T1.png"
              />
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
            <li>
              <Link href={"/account"}>NALOG</Link>
            </li>
          </ul>
        </div>

        <div className="navbar-search">
          <input type={"text"} placeholder="Pretraži proizvode..." />
          <Button
            m={0}
            p={0}
            top={0}
            right={0.5}
            borderLeft={"1px solid"}
            borderColor={"#f89a20"}
            borderRadius={30}
            backgroundColor={"transparent"}
            height={9}
            width={9}
            type="button"
            className="search-btn"
            _hover={{
              backgroundColor: "#f89a20",
              color: "#fff",
            }}
          >
            <Icon as={FaSearch} />
          </Button>
        </div>
        <div className="cart-and-wishlist">
          <div className="toggle-nav hidden">
            <Button
              onClick={() => updateMobile()}
              type="button"
              className="nav-btn"
              _hover={{
                backgroundColor: "#f89a20",
                color: "#fff",
              }}
            >
              <Icon as={FaList} />
            </Button>
          </div>
          <div className="mobile-search hidden">
            <Button
              onClick={() => updateMobileSearch()}
              type="button"
              className="mobile-search-btn"
              _hover={{
                backgroundColor: "#f89a20",
                color: "#fff",
              }}
            >
              <Icon as={FaSearch} />
            </Button>
          </div>
          <div className="shopping-cart">
            <Button
              _hover={{
                backgroundColor: "#f89a20",
                color: "#fff",
              }}
              type="button"
              className="shopping-cart-btn"
            >
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
