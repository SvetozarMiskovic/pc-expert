import React from "react";
import { Text } from "@chakra-ui/react";
import { useShopContext } from "../../../context/ShopContext";

function Garancija() {
  const { garancija } = useShopContext();

  return (
    <div className="shop-single-menu">
      <div className="shop-single-menu-header">
        <Text
          paddingLeft={"0.4rem"}
          fontSize={"lg"}
          color={"#0c0c0d"}
          fontWeight="bold"
        >
          Garancija
        </Text>
      </div>
      <div className="shop-single-menu-body">
        {!!garancija &&
          garancija?.map(b => {
            return <h1 key={b}>{b}</h1>;
          })}
      </div>
    </div>
  );
}

export default Garancija;
