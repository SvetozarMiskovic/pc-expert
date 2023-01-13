import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
} from "@chakra-ui/react";
import { useGlobalContext } from "../../context/GlobalContext";
import Link from "next/link";

function MobileMenu() {
  const { mobileMenu, updateMobile, isLogged } = useGlobalContext();
  return (
    <div className="drawer">
      <Drawer
        isOpen={mobileMenu}
        onClose={() => updateMobile()}
        placement="right"
      >
        <DrawerOverlay />
        <DrawerContent fontFamily={"Dosis, sans-serif"}>
          <DrawerCloseButton color="#5f5f5f" onClose={() => updateMobile()} />
          <DrawerHeader color={"#f89a20"}>PC Expert</DrawerHeader>

          <DrawerBody padding={0}>
            <div className="menu-container">
              <ul>
                <div className="menu-home-link">
                  <Link href="/" passHref legacyBehavior>
                    <li onClick={() => updateMobile()}>POČETNA</li>
                  </Link>
                </div>
                <div className="menu-shop-link">
                  <Link href="/shop" passHref legacyBehavior>
                    <li onClick={() => updateMobile()}>SHOP</li>
                  </Link>
                </div>
                <div className="menu-account-link">
                  <Link href="/nalog" passHref legacyBehavior>
                    <li onClick={() => updateMobile()}>NALOG</li>
                  </Link>
                </div>
                <div className="menu-orders-link">
                  <Link href="/narudzbe" passHref legacyBehavior>
                    <li onClick={() => updateMobile()}>NARUDŽBE</li>
                  </Link>
                </div>

                <div className="menu-about-link">
                  <Link href="/opis" passHref legacyBehavior>
                    <li onClick={() => updateMobile()}>NAŠA PRIČA</li>
                  </Link>
                </div>

                <div className="menu-rules-link">
                  <Link href="/pravila" passHref legacyBehavior>
                    <li onClick={() => updateMobile()}>
                      INSTRUKCIJE I PRAVILA KORIŠTENJA
                    </li>
                  </Link>
                </div>
              </ul>
            </div>
          </DrawerBody>

          <DrawerFooter
            display={"flex"}
            justifyContent={"space-between"}
            gap={"0.8rem"}
          >
            {!isLogged ? (
              <Link href={"/prijava"} passHref legacyBehavior>
                <Button
                  _hover={{
                    backgroundColor: "#f89a20",
                    color: "#fff",
                  }}
                  color={"#5f5f5f"}
                  border={"1px solid"}
                  borderColor={"#f89a20"}
                  variant="outline"
                  onClick={() => updateMobile()}
                >
                  Prijavi se
                </Button>
              </Link>
            ) : (
              <Link href={"/odjava"} passHref legacyBehavior>
                <Button
                  _hover={{
                    backgroundColor: "#f89a20",
                    color: "#fff",
                  }}
                  color={"#5f5f5f"}
                  border={"1px solid"}
                  borderColor={"#f89a20"}
                  variant="outline"
                  onClick={() => updateMobile()}
                >
                  Odjavi se
                </Button>
              </Link>
            )}
            <Link href={"/registracija"} passHref legacyBehavior>
              <Button
                _hover={{
                  backgroundColor: "#f89a20",
                  color: "#fff",
                }}
                color={"#5f5f5f"}
                border={"1px solid"}
                borderColor={"#f89a20"}
                variant="outline"
                onClick={() => updateMobile()}
              >
                Registracija
              </Button>
            </Link>
            <Button
              _hover={{
                backgroundColor: "#f89a20",
                color: "#fff",
              }}
              color={"#5f5f5f"}
              border={"1px solid"}
              borderColor={"#f89a20"}
              variant="outline"
              onClick={() => updateMobile()}
            >
              Zatvori
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default MobileMenu;
