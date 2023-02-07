import { Button, Collapse, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { useGlobalContext } from "../../context/GlobalContext";
import {
  FaList,
  FaSearch,
  FaLock,
  FaLockOpen,
  FaShoppingCart,
  FaShoppingBasket,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { useAuthContext } from "../../context/AuthContext";
import { useRouter } from "next/router";
import CartComponent from "../CartComponents/CartComponent";

function MobileNavbar() {
  const { updateMobile, updateMobileSearch, isCart, toggleCart } =
    useGlobalContext();
  const { isLoged } = useAuthContext();
  const router = useRouter();
  return (
    <div className="mobile-navbar mobile container">
      <div className="mobile-navbar-logo">
        <Link href="/">
          <Image
            width={100}
            height={100}
            className={"logo-img"}
            src={"/T1.png"}
            alt="logo"
          />
        </Link>
      </div>
      <div className="mobile-cart">
        <div className="mobile-toggle-nav mobile">
          <Button
            onClick={() => updateMobile()}
            type="button"
            className="nav-btn"
            _hover={{
              backgroundColor: "#f89a20",
              color: "#fff",
            }}
            color="#5f5f5f"
            background="transparent"
            border="1px solid #f89a20"
          >
            <Icon as={FaList} />
          </Button>
        </div>
        <div className="mobile-search mobile">
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
        <div className="mobile-auth mobile">
          {!isLoged ? (
            <Link href={"/prijava"}>
              <Button
                fontSize={"sm"}
                type="button"
                className="mobile-auth-btn"
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
            </Link>
          ) : (
            <Link href={"/odjava"}>
              <Button
                fontSize={"sm"}
                type="button"
                className="mobile-auth-btn"
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
            </Link>
          )}
        </div>
        <div className="cart-button" onClick={() => toggleCart()}>
          <div className="cart-button-text">
            <Icon fontSize={"lg"} as={FaShoppingBasket} />
            <Text display={"block"} fontSize={"md"}>
              Korpa
            </Text>
          </div>

          <div className="item-number">
            <Text fontSize={"sm"}>1</Text>
          </div>
          <CartComponent isCart={isCart} />
        </div>
      </div>
    </div>
  );
}

export default MobileNavbar;
