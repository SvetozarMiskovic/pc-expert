import { Collapse, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import ShopSingleFilter from "../ShopSingleFilter";
import { useShopContext } from "../../../context/ShopContext";

function Akcija() {
  const [open, setOpen] = useState(true);

  const updateCollapseState = () => {
    setOpen(prevState => !prevState);
  };

  const { akcija } = useShopContext();

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
          Akcija
        </Text>
      </div>
      <Collapse in={open}>
        <div className="shop-single-menu-body">
          {!!akcija &&
            akcija?.map(p => {
              return (
                <ShopSingleFilter key={p} data={p} filterProperty={"akcija"} />
              );
            })}
        </div>
      </Collapse>
    </div>
  );
}

export default Akcija;
