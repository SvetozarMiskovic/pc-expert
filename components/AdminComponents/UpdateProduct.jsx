import { Select, Text } from "@chakra-ui/react";
import Icon from "@chakra-ui/icon";
import React, { useState } from "react";
import { FaCircleNotch } from "react-icons/fa";

function UpdateProduct() {
  const [category, setCategory] = useState("laptop");
  return (
    <div className="update-product-wrapper">
      <div className="update-product-content">
        <div className="update-product-content-sidebar">
          <div className="update-product-content-sidebar-header">
            <Icon fontSize={"4xl"} as={FaCircleNotch} />
            <Text fontSize={"3xl"} whiteSpace="nowrap">
              Uredi postojeći artikl
            </Text>
          </div>
          <div className="update-product-content-sidebar-category">
            <Text fontSize={"xl"} whiteSpace="nowrap">
              Odaberite kategoriju
            </Text>
            <Select
              defaultValue={category}
              onChange={e => setCategory(e.target.value)}
            >
              <option value={"laptop"}>Laptop</option>
              <option value={"monitor"}>Monitor</option>
              <option value={"televizor"}>Televizor</option>
              <option value={"telefon"}>Telefon</option>
              <option value={"komponenta"}>Komponenta</option>
              <option value={"periferija"}>Periferija</option>
              <option value={"racunar"}>Računar</option>
              <option value={"mining"}>Mining rig</option>
            </Select>
          </div>
        </div>
        <div className="update-product-content-body"></div>
      </div>
    </div>
  );
}

export default UpdateProduct;
