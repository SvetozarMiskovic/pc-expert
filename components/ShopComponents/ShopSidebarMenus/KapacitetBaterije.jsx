import React, { useState } from "react";
import { Text, Collapse } from "@chakra-ui/react";
import { useShopContext } from "../../../context/ShopContext";

import ShopSingleFilter from "../ShopSingleFilter";
function KapacitetBaterije() {
  const { baterija } = useShopContext();
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
          Kapacitet baterije
        </Text>
      </div>
      <Collapse in={open}>
        <div className="shop-single-menu-body">
          {!!baterija &&
            baterija?.map(p => {
              return (
                <ShopSingleFilter
                  key={p}
                  data={p}
                  filterProperty={"baterija"}
                />
              );
            })}
        </div>
      </Collapse>
    </div>
  );
}

export default KapacitetBaterije;
