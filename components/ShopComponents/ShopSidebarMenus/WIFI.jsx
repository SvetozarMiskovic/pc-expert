import React, { useState } from "react";
import { Text, Collapse } from "@chakra-ui/react";
import { useShopContext } from "../../../context/ShopContext";
import ShopSingleFilter from "../ShopSingleFilter";

function WIFI() {
  const { wifi } = useShopContext();
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
          fontSize={"lg"}
          paddingLeft={"0.4rem"}
          color={"#0c0c0d"}
          fontWeight="bold"
        >
          Wifi
        </Text>
      </div>
      <Collapse in={open}>
        <div className="shop-single-menu-body">
          {!!wifi &&
            wifi?.map(p => {
              return (
                <ShopSingleFilter key={p} data={p} filterProperty={"wifi"} />
              );
            })}
        </div>
      </Collapse>
    </div>
  );
}

export default WIFI;
