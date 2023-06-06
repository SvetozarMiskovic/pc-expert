import React from "react";
import { useGlobalContext } from "../../context/GlobalContext";
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
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
          <DrawerBody padding={0}>
            <div className="search-container">
              <input
                type={"text"}
                placeholder="npr. Laptop Acer, Televizor Tesla..."
              />
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default MobileSearch;
