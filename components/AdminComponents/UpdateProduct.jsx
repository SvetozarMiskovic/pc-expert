import { Select, Text } from "@chakra-ui/react";
import Icon from "@chakra-ui/icon";
import React, { useState } from "react";
import { FaCircleNotch } from "react-icons/fa";
import { createProductData } from "../../helpers/createProductData";
import UpdateModal from "./UpdateModal";
import { useProducts } from "../../hooks/useProducts";

function UpdateProduct() {
  const { data } = useProducts();
  const [category, setCategory] = useState("laptopi");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
    setSelectedProduct(null);
  };

  const updateSelectedProduct = (id) => {
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
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value={"laptopi"}>Laptop</option>
              <option value={"monitori"}>Monitor</option>
              <option value={"tv"}>Televizor</option>
              <option value={"telefoni"}>Telefon</option>
              <option value={"komponente"}>Komponenta</option>
              <option value={"periferija"}>Periferija</option>
              <option value={"racunari"}>Računar</option>
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
