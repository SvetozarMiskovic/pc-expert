import { Select, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import Icon from "@chakra-ui/icon";
import { FaMinusCircle } from "react-icons/fa";

function DeleteProduct() {
  const [category, setCategory] = useState("laptop");
  return (
    <div className="delete-product-wrapper">
      <div className="delete-product-content">
        <div className="delete-product-content-sidebar">
          <div className="delete-product-content-sidebar-header">
            <Icon fontSize={"4xl"} as={FaMinusCircle} />
            <Text fontSize={"3xl"} whiteSpace="nowrap">
              Obriši artikl
            </Text>
          </div>
          <div className="delete-product-content-sidebar-category">
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
        <div className="delete-product-content-body"></div>
      </div>
    </div>
  );
}

export default DeleteProduct;
