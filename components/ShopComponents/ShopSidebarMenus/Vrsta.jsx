import React from "react";
import { Text } from "@chakra-ui/react";
import { useShopContext } from "../../../context/ShopContext";
function Vrsta() {
  const { vrsta } = useShopContext();

  return (
    <div className="shop-single-menu">
      <div className="shop-single-menu-header">
        <Text
          fontSize={"lg"}
          color={"#0c0c0d"}
          paddingLeft={"0.4rem"}
          fontWeight="bold"
        >
          Vrsta
        </Text>
      </div>
      <div className="shop-single-menu-body">
        {!!vrsta &&
          vrsta?.map(b => {
            return <h1 key={b}>{b}</h1>;
          })}
      </div>
    </div>
  );
}

export default Vrsta;
