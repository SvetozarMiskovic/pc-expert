import React from "react";
import { Icon } from "@chakra-ui/icons";

import { FaShoppingBasket, FaUserTag } from "react-icons/fa";
import { Text } from "@chakra-ui/react";
function EmptyCart() {
  return (
    <div className="empty-cart-wrapper">
      <div className="empty-cart-content">
        <Icon fontSize={"6xl"} as={FaShoppingBasket} />
        <Text fontSize={"4xl"} fontWeight={"bold"}>
          Korpa je prazna
        </Text>
      </div>
    </div>
  );
}

export default EmptyCart;
