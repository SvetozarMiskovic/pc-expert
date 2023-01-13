import { Button, Icon } from "@chakra-ui/react";
import React from "react";
import Navbar from "./Navbar";

import MobileNavbar from "../MobileComponents/MobileNavbar";
import CartComponent from "../CartComponents/CartComponent";
function NavbarComponent() {
  return (
    <div className="navbar-wrapper">
      <Navbar />
      <CartComponent />
      <MobileNavbar />
    </div>
  );
}

export default NavbarComponent;
