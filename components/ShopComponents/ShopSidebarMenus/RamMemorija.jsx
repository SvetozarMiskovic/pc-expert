import React, { useState } from "react";
import { Text, Collapse } from "@chakra-ui/react";
import { useShopContext } from "../../../context/ShopContext";

import ShopSingleFilter from "../ShopSingleFilter";

function RamMemorija() {
  const { ram } = useShopContext();
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
          Ram memorija
        </Text>
      </div>
      <Collapse in={open}>
        <div className="shop-single-menu-body">
          {!!ram &&
            ram?.map(p => {
              return (
                <ShopSingleFilter key={p} data={p} filterProperty={"ram"} />
              );
            })}
        </div>
      </Collapse>
    </div>
  );
}

export default RamMemorija;
