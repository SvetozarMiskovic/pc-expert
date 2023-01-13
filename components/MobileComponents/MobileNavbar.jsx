import { Button, Icon } from "@chakra-ui/react";
import React from "react";
import { useGlobalContext } from "../../context/GlobalContext";
import {
  FaList,
  FaSearch,
  FaLock,
  FaLockOpen,
  FaShoppingCart,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { useAuthContext } from "../../context/AuthContext";
import { useRouter } from "next/router";

function MobileNavbar() {
  const { updateMobile, updateMobileSearch } = useGlobalContext();
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
            <Button
              type="button"
              className="mobile-auth-btn"
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
              className="mobile-auth-btn"
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
          className="mobile-cart-btn"
        >
          <Icon as={FaShoppingCart} />
          <p>0.00KM</p>
        </Button>
      </div>
    </div>
  );
}

export default MobileNavbar;
