import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";

function DeleteModal({
  openModal,
  closeModal,
  open,
  selectedProduct,
  data,
  category,
}) {
  const [product, setProduct] = useState(null);

  const filterSelectedProduct = id => {
    const newData = data[category]?.filter(
      item =>
        String(item?.id).toLowerCase() === String(selectedProduct).toLowerCase()
    );
    console.log(data);
    setProduct(newData);
  };

  useEffect(() => {
    filterSelectedProduct(selectedProduct);
    console.log(product);
  }, [selectedProduct]);
  return (
    <Modal isOpen={open} onClose={closeModal} size={"6xl"}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{selectedProduct}</ModalBody>

        <ModalFooter height={"auto"}>
          <Button colorScheme="blue">Close</Button>
          <Button variant="ghost">Secondary Action</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default DeleteModal;
