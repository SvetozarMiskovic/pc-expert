import { Select, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { Icon } from "@chakra-ui/icon";
import { FaMinusCircle } from "react-icons/fa";
import { createProductData } from "../../helpers/createProductData";
import DeleteModal from "./DeleteModal";
import { useProducts } from "../../hooks/useProducts";

function DeleteProduct() {
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
    <div className="delete-product-wrapper">
      <DeleteModal
        openModal={openModal}
        closeModal={closeModal}
        open={open}
        selectedProduct={selectedProduct}
        data={data}
        category={category}
      />
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
        <div className="delete-product-content-body">
          <div className="delete-product-data">
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

export default DeleteProduct;
