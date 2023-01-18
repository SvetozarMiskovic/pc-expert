import React, { useState } from "react";
import Link from "next/link";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerHeader,
  Input,
  DrawerFooter,
  DrawerContent,
  DrawerOverlay,
  Text,
  Divider,
} from "@chakra-ui/react";
import { useAuthContext } from "../../context/AuthContext";
function AccountMobileSidebar() {
  const { isLoged } = useAuthContext();
  const [isOpen, setIsOpen] = useState(false);
  const btnRef = React.useRef();

  const updateDrawerState = () => {
    setIsOpen(prevstate => !prevstate);
  };
  return (
    <div className="account-mobile-sidebar-wrapper">
      {isLoged && (
        <Button
          className="account-mobile-sidebar-button"
          position={"absolute"}
          top={0}
          left={"-1"}
          width={"fit-content"}
          height={"50px"}
          ref={btnRef}
          _hover={{ backgroundColor: "#f89a20" }}
          backgroundColor={"#f89a20"}
          color={"#fff"}
          onClick={() => updateDrawerState()}
        >
          Korisnički meni
        </Button>
      )}
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={() => updateDrawerState()}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent backgroundColor={"#eaedf1"}>
          <DrawerBody
            className="account-mobile-sidebar-container"
            display={"flex"}
            flexDirection={"column"}
            gap={"1rem"}
          >
            <div className="account-mobile-sidebar-information">
              <Text fontSize={"2xl"} fontWeight="bold" color={"#5f5f5f"}>
                Moj korisnički račun
              </Text>
              <Divider borderColor={"#5f5f5f"} />
              <Link
                className="account-mobile-sidebar-link"
                href={"/nalog/info"}
                color={"#5f5f5f"}
              >
                <Text
                  color={"#5f5f5f"}
                  fontSize="md"
                  _hover={{ textDecoration: "underline" }}
                >
                  Podaci o korisničkom računu
                </Text>
              </Link>

              {isLoged && (
                <Text
                  color={"#5f5f5f"}
                  cursor="pointer"
                  className="account-mobile-sidebar-link"
                  fontSize="md"
                  _hover={{ textDecoration: "underline" }}
                >
                  Izmjeni podatke
                </Text>
              )}
              {isLoged && (
                <Link href="/nalog/resetpw">
                  <Text
                    color={"#5f5f5f"}
                    cursor="pointer"
                    className="account-mobile-sidebar-link"
                    fontSize="md"
                    _hover={{ textDecoration: "underline" }}
                  >
                    Promjeni lozinku
                  </Text>
                </Link>
              )}
              {isLoged && (
                <Text
                  color={"#5f5f5f"}
                  cursor="pointer"
                  className="account-mobile-sidebar-link"
                  fontSize="md"
                  _hover={{ textDecoration: "underline" }}
                >
                  Promjeni sliku
                </Text>
              )}
            </div>
            <div className="account-mobile-sidebar-orders">
              <Text fontSize={"2xl"} fontWeight="bold" color={"#5f5f5f"}>
                Narudžbe
              </Text>
              <Divider borderColor={"#5f5f5f"} />

              <Link
                href={"/nalog/narudzbe"}
                className="account-mobile-sidebar-link"
              >
                <Text
                  fontSize="md"
                  color={"#5f5f5f"}
                  _hover={{ textDecoration: "underline" }}
                >
                  Moje narudžbe
                </Text>
              </Link>
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default AccountMobileSidebar;
