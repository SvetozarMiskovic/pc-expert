import React, { useState } from "react";
import { Text } from "@chakra-ui/react";
import { useShopContext } from "../../../context/ShopContext";
import { Collapse, Radio } from "@chakra-ui/react";

function Proizvodjac() {
  const { proizvodjac } = useShopContext();
  const [open, setOpen] = useState(true);

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
          Proizvođač
        </Text>
      </div>
      <Collapse in={open}>
        <div className="shop-single-menu-body">
          {proizvodjac?.map(p => {
            return (
              <Radio key={p} color={"#0c0c0d"} rounded="lg" textColor={"red"}>
                {p}
              </Radio>
            );
          })}
        </div>
      </Collapse>
    </div>
  );
}

export default Proizvodjac;
