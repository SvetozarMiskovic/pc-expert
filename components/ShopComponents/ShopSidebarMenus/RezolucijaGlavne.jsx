import React, { useState } from "react";
import { Text, Collapse } from "@chakra-ui/react";
import { useShopContext } from "../../../context/ShopContext";
import ShopSingleFilter from "../ShopSingleFilter";

function RezolucijaGlavne() {
  const { glavnaKamera } = useShopContext();
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
          Rezolucija glavne kamere
        </Text>
      </div>
      <Collapse in={open}>
        <div className="shop-single-menu-body">
          {!!glavnaKamera &&
            glavnaKamera?.map(p => {
              return (
                <ShopSingleFilter key={p} data={p} filterProperty={"rezolucija_glavne_kamere"} />
              );
            })}
        </div>
      </Collapse>
    </div>
  );
}

export default RezolucijaGlavne;
