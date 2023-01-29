import React, { useEffect, useState } from "react";
import { Text, Collapse, Icon } from "@chakra-ui/react";
import { useShopContext } from "../../../context/ShopContext";
import { FaCheck } from "react-icons/fa";
function ModelGraficke() {
  const [open, setOpen] = useState(true);
  const [checked, setChecked] = useState(false);

  const updateCollapseState = () => {
    setOpen(prevState => !prevState);
  };
  return (
    <div className="shop-single-menu">
      <div
        className="shop-single-menu-header"
        onClick={() => updateCollapseState()}
      >
        <Text
          paddingLeft={"0.4rem"}
          fontSize={"lg"}
          color={"#0c0c0d"}
          fontWeight="bold"
        >
          Model graficke kartice
        </Text>
      </div>
      <div className="shop-single-menu-body"></div>
    </div>
  );
}

export default ModelGraficke;
