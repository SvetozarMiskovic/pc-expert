import React from "react";
import { Text } from "@chakra-ui/react";
import { useShopContext } from "../../../context/ShopContext";
function WIFI() {
  const { wifi } = useShopContext();

  return (
    <div className="shop-single-menu">
      <div className="shop-single-menu-header">
        <Text
          fontSize={"lg"}
          paddingLeft={"0.4rem"}
          color={"#0c0c0d"}
          fontWeight="bold"
        >
          Wifi
        </Text>
      </div>
      <div className="shop-single-menu-body">
        {!!wifi &&
          wifi?.map(b => {
            return <h1 key={b}>{b}</h1>;
          })}
      </div>
    </div>
  );
}

export default WIFI;
