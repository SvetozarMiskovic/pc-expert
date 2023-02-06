import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Icon } from "@chakra-ui/icons";
import { Button, IconButton, Text } from "@chakra-ui/react";
import {
  FaLock,
  FaLockOpen,
  FaSearch,
  FaShoppingBasket,
  FaShoppingCart,
} from "react-icons/fa";
import NextLink from "next/link";
import { useGlobalContext } from "../../context/GlobalContext";
import { useAuthContext } from "../../context/AuthContext";
import { useRouter } from "next/router";

function Navbar() {
  const {
    updateMobileSearch,

    toggleCart,
    totalPrice,
  } = useGlobalContext();
  const { isLoged } = useAuthContext();
  const router = useRouter();
  return (
    <div className="navbar desktop">
      <div className="navbar-logo">
        <Link href="/" passHref legacyBehavior>
          <Image
            width={100}
            height={100}
            className={"logo-img"}
            src={"/T1.png"}
            alt="logo"
          />
        </Link>
      </div>

      <div className="navbar-links">
        <ul>
          <li>
            <Link href="/shop">SHOP</Link>
          </li>

          <li>
            <Link href="/nalog/info">KORISNČKI RAČUN</Link>
          </li>
          <li>
            <Link href="/nalog/narudzbe">NARUDŽBE</Link>
          </li>

          <li className="laptop">
            <Link href="/opis">NAŠA PRIČA</Link>
          </li>
          <li className="laptop">
            <Link href="/pravila">PRAVILA</Link>
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
          {!isLoged ? (
            <Button
              type="button"
              className="mobile-search-btn"
              color="#5f5f5f"
              _hover={{
                backgroundColor: "#f89a20",
                color: "#fff",
              }}
              background="transparent"
              border="1px solid #f89a20"
              onClick={() => router.push("/prijava")}
            >
              <Icon as={FaLock} />
            </Button>
          ) : (
            <Button
              type="button"
              className="mobile-search-btn"
              _hover={{
                backgroundColor: "#f89a20",
                color: "#fff",
              }}
              color="#5f5f5f"
              border="1px solid #f89a20"
              background="transparent"
              onClick={() => router.push("/odjava")}
            >
              <Icon as={FaLockOpen} />
            </Button>
          )}
        </div>
        <div className="cart-button">
          <Icon fontSize={"lg"} as={FaShoppingBasket} />
          <Text display={"block"} fontSize={"md"}>
            0.00 KM
          </Text>
          <div className="item-number">1</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
