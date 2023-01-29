import React from "react";
import { Text } from "@chakra-ui/react";
import { useShopContext } from "../../../context/ShopContext";

function TipRamMemorije() {
  const { tipRam } = useShopContext();

  return (
    <div className="shop-single-menu">
      <div className="shop-single-menu-header">
        <Text
          paddingLeft={"0.4rem"}
          fontSize={"lg"}
          color={"#0c0c0d"}
          fontWeight="bold"
        >
          Tip ram memorije
        </Text>
      </div>
      <div className="shop-single-menu-body">
        {!!tipRam &&
          tipRam?.map(b => {
            return <h1 key={b}>{b}</h1>;
          })}
      </div>
    </div>
  );
}

export default TipRamMemorije;
