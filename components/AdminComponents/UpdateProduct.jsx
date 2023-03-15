import { Select, Text } from "@chakra-ui/react";
import Icon from "@chakra-ui/icon";
import React, { useState } from "react";
import { FaCircleNotch } from "react-icons/fa";
import { createProductData } from "../../helpers/createProductData";
import UpdateModal from "./UpdateModal";

function UpdateProduct({ data }) {
  const [category, setCategory] = useState("laptop");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  const updateSelectedProduct = id => {
    setSelectedProduct(id);
  };

  return (
    <div className="update-product-wrapper">
      <UpdateModal
        openModal={openModal}
        closeModal={closeModal}
        open={open}
        selectedProduct={selectedProduct}
        data={data}
        category={category}
      />
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
              <option value={"tv"}>Televizor</option>
              <option value={"phone"}>Telefon</option>
              <option value={"component"}>Komponenta</option>
              <option value={"perifery"}>Periferija</option>
              <option value={"computer"}>Računar</option>
              <option value={"mining"}>Mining rig</option>
            </Select>
          </div>
        </div>
        <div className="update-product-content-body">
          <div className="update-product-data">
            {createProductData(
              category,
              data,
              updateSelectedProduct,
              openModal,
              selectedProduct
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateProduct;
