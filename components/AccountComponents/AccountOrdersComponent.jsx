import React from "react";
import { Text, Icon } from "@chakra-ui/react";
import { FaBoxes } from "react-icons/fa";
function AccountOrdersComponent() {
  return (
    <div className="account-showcase-wrapper">
      <div className="account-showcase-component">
        <div className="account-showcase-header">
          <div className="account-showcase-header-title">
            <Icon as={FaBoxes} fontSize={"4xl"} color={"#f89a20"} />
            <Text fontSize={"3xl"} color={"#5f5f5f"}>
              Narudžbe
            </Text>
          </div>
          <Text fontSize={"sm"}>Prikaz podataka o narudžbama</Text>
        </div>
        <div className="account-showcase-body">
            
        </div>
      </div>
    </div>
  );
}

export default AccountOrdersComponent;
