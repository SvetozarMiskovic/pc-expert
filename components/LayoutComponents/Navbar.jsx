import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Icon } from "@chakra-ui/icons";
import { Button, LinkBox, LinkOverlay } from "@chakra-ui/react";
import { FaLock, FaLockOpen, FaSearch, FaShoppingCart } from "react-icons/fa";

import { useGlobalContext } from "../../context/GlobalContext";

function Navbar() {
  const { updateMobileSearch, updateLoggedIn, isLogged } = useGlobalContext();
  return (
    <div className="navbar desktop container">
      <div className="navbar-logo">
        <Link href="/">
          <a>
            <Image
              width={100}
              height={100}
              className={"logo-img"}
              src={"/T1.png"}
            />
          </a>
        </Link>
      </div>
      <div className="navbar-links">
        <ul>
          <li>
            <Link href="/shop">SHOP</Link>
          </li>
          <li>
            <Link href="/orders">NARUDŽBE</Link>
          </li>
          <li>
            <Link href="/account">NALOG</Link>
          </li>
          <li className="laptop">
            <Link href="/about">NAŠA PRIČA</Link>
          </li>
          <li className="laptop">
            <Link href="/rules">PRAVILA</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-search">
        <input type={"text"} placeholder="Pretraži proizvode..." />

        <Button
          m={0}
          p={0}
          top={0}
          right={0}
          borderLeft={"1px solid #f89a20"}
          borderTopRightRadius={25}
          borderBottomRightRadius={25}
          borderBottomLeftRadius={0}
          borderTopLeftRadius={0}
          backgroundColor="#f89a20"
          color="#fff"
          maxHeight={9}
          width={20}
          minHeight={1}
          type="button"
          className="search-btn"
          _hover={{
            backgroundColor: "#f89a20",
          }}
          _active={{
            backgroundColor: "#f89a20",
          }}
        >
          <Icon as={FaSearch} />
        </Button>
      </div>

      <div className="cart">
        <div className="mobile-search laptop">
          <Button
            onClick={() => updateMobileSearch()}
            type="button"
            className="mobile-search-btn"
            _hover={{
              backgroundColor: "#f89a20",
              color: "#fff",
            }}
            background="transparent"
            border={"1px solid #f89a20"}
            color="#5f5f5f"
          >
            <Icon as={FaSearch} />
          </Button>
        </div>
        <div className="mobile-auth laptop">
          {!isLogged ? (
            <Button
              onClick={() => updateLoggedIn()}
              type="button"
              className="mobile-search-btn"
              color="#5f5f5f"
              _hover={{
                backgroundColor: "#f89a20",
                color: "#fff",
              }}
              background="transparent"
              border="1px solid #f89a20"
            >
              <Icon as={FaLock} />
            </Button>
          ) : (
            <Button
              onClick={() => updateLoggedIn()}
              type="button"
              className="mobile-search-btn"
              _hover={{
                backgroundColor: "#f89a20",
                color: "#fff",
              }}
              color="#5f5f5f"
              border="1px solid #f89a20"
              background="transparent"
            >
              <Icon as={FaLockOpen} />
            </Button>
          )}
        </div>
        <Button
          _hover={{
            backgroundColor: "#f89a20",
            color: "#fff",
          }}
          _active={{
            backgroundColor: "#f89a20",
          }}
          color="#5f5f5f"
          border="1px solid #f89a20"
          background="transparent"
          type="button"
          className="shopping-cart-btn"
        >
          <Icon as={FaShoppingCart} />
          <p>0.00KM</p>
        </Button>
      </div>
    </div>
  );
  // <div className="navbar container">
  //   <div className="logo-link-div">
  //     <Link href="/" passHref className="logo-link">
  //       <a>
  //         <Image
  //           priority
  //           width={300}
  //           height={300}
  //           className="logo-image"
  //           href="/"
  //           src="/T1.png"
  //         />
  //       </a>
  //     </Link>
  //   </div>

  //   <div className="navbar-links">
  //     <ul>
  //       <li>
  //         <Link href={"/shop"}>SHOP</Link>
  //       </li>
  //       <li>
  //         <Link href={"/orders"}>NARUDŽBE</Link>
  //       </li>
  //       <li>
  //         <Link href={"/account"}>NALOG</Link>
  //       </li>
  //       <li>
  //         <Link href={"/about"}>NAŠA PRIČA</Link>
  //       </li>
  //       <li className="laptop">
  //         <Link href={"/rules"}>PRAVILA</Link>
  //       </li>
  //     </ul>
  //   </div>

  //   <div className="navbar-search">
  //     <input type={"text"} placeholder="Pretraži proizvode..." />
  //     <Button
  //       m={0}
  //       p={0}
  //       top={0}
  //       right={0.5}
  //       borderLeft={"1px solid"}
  //       borderColor={"#f89a20"}
  //       borderRadius={30}
  //       backgroundColor={"transparent"}
  //       height={9}
  //       width={9}
  //       type="button"
  //       className="search-btn"
  //       _hover={{
  //         backgroundColor: "#f89a20",
  //         color: "#fff",
  //       }}
  //     >
  //       <Icon as={FaSearch} />
  //     </Button>
  //   </div>
  //   <div className="cart-and-wishlist">
  //     <div className="shopping-cart">
  //       <Button
  //         _hover={{
  //           backgroundColor: "#f89a20",
  //           color: "#fff",
  //         }}
  //         type="button"
  //         className="shopping-cart-btn"
  //       >
  //         <Icon as={FaShoppingCart} />
  //         <p>0.00KM</p>
  //       </Button>
  //     </div>
  //   </div>
  // </div>
}

export default Navbar;
