import React from "react";
import { useGlobalContext } from "../context/GlobalContext";
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
import Link from "next/link";

function MobileSearch() {
  const { mobileSearch, updateMobileSearch } = useGlobalContext();
  return (
    <div className={"search-drawer"}>
      <Drawer
        isOpen={mobileSearch}
        onClose={() => updateMobileSearch()}
        placement="top"
      >
        <DrawerOverlay />
        <DrawerContent fontFamily={"Dosis, sans-serif"}>
          {/* <DrawerCloseButton
            color="#5f5f5f"
            onClose={() => updateMobileSearch()}
          /> */}
          {/* <DrawerHeader color={"#f89a20"}>Pretrazi produkte...</DrawerHeader> */}

          <DrawerBody padding={0}>
            <div className="search-container">
              <input
                type={"text"}
                placeholder="npr. Laptop Acer, Televizor Tesla..."
                onKeyUp={e => {
                  console.log(e.target.value);
                }}
              />
            </div>
          </DrawerBody>

          {/* <DrawerFooter justifyContent={"space-between"}>
            <Link href={"/login"}>
              <Button
                _hover={{ backgroundColor: "#f89a20", color: "#fff" }}
                color={"#5f5f5f"}
                border={"1px solid"}
                borderColor={"#f89a20"}
                variant="outline"
                onClick={() => updateMobileSearch()}
              >
                Prijavi se
              </Button>
            </Link>
            <Button
              _hover={{ backgroundColor: "#f89a20", color: "#fff" }}
              color={"#5f5f5f"}
              border={"1px solid"}
              borderColor={"#f89a20"}
              variant="outline"
              mr={3}
              onClick={() => updateMobileSearch()}
            >
              Zatvori
            </Button>
          </DrawerFooter> */}
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default MobileSearch;
