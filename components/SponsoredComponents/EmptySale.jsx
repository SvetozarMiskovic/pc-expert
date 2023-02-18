import React from "react";
import { Icon } from "@chakra-ui/icons";

import { FaUserTag } from "react-icons/fa";
import { Text } from "@chakra-ui/react";
function EmptySale() {
  return (
    <div className="empty-sale-wrapper">
      <div className="empty-sale-content">
        <Icon fontSize={"6xl"} as={FaUserTag} />
        <Text fontSize={"4xl"}>Trenutno nemamo proizvoda na akciji!</Text>
      </div>
    </div>
  );
}

export default EmptySale;
