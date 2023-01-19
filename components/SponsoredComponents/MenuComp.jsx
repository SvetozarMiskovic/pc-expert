import React from "react";
import { Menu, MenuList, MenuButton, MenuItem } from "@chakra-ui/react";
function MenuComp() {
  return (
    <>
      <Menu>
        <MenuButton
          style={{
            backgroundColor: "#f89a20",
            padding: "0.3rem 2rem 0.3rem 2rem",
            borderRadius: "35px",
          }}
          as={"button"}
        >
          PROZIVODI
        </MenuButton>
        <MenuList>
          <MenuItem>Laptopi</MenuItem>
          <MenuItem>Racunari</MenuItem>
          <MenuItem>Periferija</MenuItem>
          <MenuItem>Laptopi</MenuItem>
        </MenuList>
      </Menu>
    </>
  );
}

export default MenuComp;
