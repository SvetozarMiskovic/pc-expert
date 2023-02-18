import Icon from "@chakra-ui/icon";
import { Text, Select, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { createProductProperties } from "../../helpers/createProductProperties";

function CreateProduct({ properties }) {
  const [category, setCategory] = useState("laptop");

  return (
    <div className="create-product-wrapper">
      <div className="create-product-content">
        <div className="create-product-content-sidebar">
          <div className="create-product-content-sidebar-header">
            <Icon fontSize={"4xl"} as={FaPlusCircle} />
            <Text fontSize={"3xl"} whiteSpace="nowrap">
              Kreiraj novi artikl
            </Text>
          </div>
          <div className="create-product-content-sidebar-category">
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
        <div className="create-product-content-body">
          <div className="create-product-properties">
            {createProductProperties(category, properties)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateProduct;
