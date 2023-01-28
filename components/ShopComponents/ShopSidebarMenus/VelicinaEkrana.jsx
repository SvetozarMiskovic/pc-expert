import React from "react";
import { Text } from "@chakra-ui/react";

function VelicinaEkrana() {
  return (
    <div className="shop-single-menu">
      <div className="shop-single-menu-header">
        <Text
          paddingLeft={"0.4rem"}
          fontSize={"lg"}
          color={"#0c0c0d"}
          fontWeight="bold"
        >
          Veličina ekrana
        </Text>
      </div>
      <div className="shop-single-menu-body"></div>
    </div>
  );
}

export default VelicinaEkrana;
