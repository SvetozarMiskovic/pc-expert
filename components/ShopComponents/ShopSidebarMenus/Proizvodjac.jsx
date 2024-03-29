import React, { useState } from "react";
import { Text } from "@chakra-ui/react";
import { useShopContext } from "../../../context/ShopContext";
import { Collapse } from "@chakra-ui/react";
import ShopSingleFilter from "../ShopSingleFilter";

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
          {!!proizvodjac &&
            proizvodjac?.map(p => {
              return (
                <ShopSingleFilter key={p} data={p} filterProperty={"proizvodjac"} />
              );
            })}
        </div>
      </Collapse>
    </div>
  );
}

export default Proizvodjac;
