import { Button, Icon } from "@chakra-ui/react";
import React from "react";
import Navbar from "./Navbar";

import MobileNavbar from "../MobileComponents/MobileNavbar";

function NavbarComponent() {
  return (
    <div className="navbar-wrapper">
      <Navbar />
      <MobileNavbar />
    </div>
  );
}

export default NavbarComponent;
