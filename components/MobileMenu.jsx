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
import { useGlobalContext } from "../context/GlobalContext";

function MobileMenu() {
  const { mobileMenu, updateMobile } = useGlobalContext();
  return (
    <div className="modal">
      <Drawer
        isOpen={mobileMenu}
        onClose={() => updateMobile()}
        placement="right"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton onClose={() => updateMobile()} />
          <DrawerHeader>PC Expert</DrawerHeader>

          <DrawerBody>
            <input placeholder="Type here..." />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={() => updateMobile()}>
              Zatvori
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default MobileMenu;
