import React, { useState } from "react";
import { Text, Collapse } from "@chakra-ui/react";
import { useShopContext } from "../../../context/ShopContext";
import ShopSingleFilter from "../ShopSingleFilter";

function Vrsta() {
  const { vrsta } = useShopContext();
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
          color={"#0c0c0d"}
          paddingLeft={"0.4rem"}
          fontWeight="bold"
        >
          Vrsta
        </Text>
      </div>
      <Collapse in={open}>
        <div className="shop-single-menu-body">
          {!!vrsta &&
            vrsta?.map(p => {
              return (
                <ShopSingleFilter key={p} data={p} filterProperty={"vrsta"} />
              );
            })}
        </div>
      </Collapse>
    </div>
  );
}

export default Vrsta;
