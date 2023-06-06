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
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import Image from "next/image";
import { deleteProduct } from "../../fetchFunctions/deleteProduct";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

function DeleteModal({
  openModal,
  closeModal,
  open,
  selectedProduct,
  data,
  category,
}) {
  const [product, setProduct] = useState(null);
  const [productProperties, setProductProperties] = useState(null);
  const router = useRouter();

  const formatText = string => {
    const capitalize =
      String(string)?.charAt(0).toUpperCase() + string?.slice(1);
    return capitalize?.split("_")?.join(" ");
  };

  useEffect(() => {
    const filterSelectedProduct = id => {
      const newData = data[category]?.filter(item => {
        if (selectedProduct)
          return item?.id.toString() === selectedProduct.toString();
      });

      setProduct(prevState => {
        return newData[0];
      });
    };
    filterSelectedProduct(selectedProduct);

    const filterProperties = () => {
      if (product?.id) {
        const newData = Object.keys(product);

        setProductProperties(prevState => {
          return newData;
        });
      }
    };

    filterProperties();
  }, [selectedProduct, product]);

  return (
    <Modal isOpen={open} onClose={closeModal} size={"6xl"}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader display="flex" gap={"0.4rem"}>
          <Text color={"#0c0c0c"}>{product?.naslov}</Text>
          <Text color={"red"} fontStyle="italic">
            ID: {product?.id}
          </Text>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody display={"flex"} width={"100%"}>
          <div className="delete-modal-images">
            <div className="delete-modal-big-image">
              <Image src={"/static/T1.png"} fill alt="img" />
            </div>
            <div className="delete-modal-smaller-images-holder">
              <div className="delete-modal-smaller-image-1">
                <Image src={"/static/T1.png"} fill alt="img" />
              </div>
              <div className="delete-modal-smaller-image-2">
                <Image src={"/static/T1.png"} fill alt="img" />
              </div>
              <div className="delete-modal-smaller-image-3">
                <Image src={"/static/T1.png"} fill alt="img" />
              </div>
            </div>
            <div className="delete-modal-title-info">
              {productProperties?.map(pp => {
                if (pp === "naslov" || pp === "detalji")
                  return (
                    <div className="delete-modal-info-group" key={pp}>
                      <Text
                        fontWeight={"bold"}
                        fontSize={"2xl"}
                        color="#0c0c0c"
                      >
                        {formatText(pp)}
                      </Text>
                      <Text fontSize={"xl"} color="#0c0c0c">
                        {product?.[pp] ? product?.[pp] : "Nema detalja"}
                      </Text>
                    </div>
                  );
              })}
            </div>
          </div>
          <div className="delete-modal-content">
            {productProperties?.map(pp => {
              if (pp !== "detalji" && pp !== "naslov")
                return (
                  <div className="delete-modal-info-showcase" key={pp}>
                    <div className="delete-modal-info-showcase-header">
                      <Text
                        fontSize={"2xl"}
                        color={"#0c0c0c"}
                        fontWeight={"bold"}
                      >
                        {formatText(pp)}
                      </Text>
                    </div>
                    <div className="delete-modal-info-showcase-values">
                      <Text
                        color={"#0c0c0c"}
                        fontSize={"xl"}
                        wordBreak={"break-all"}
                      >
                        {pp !== "cijena" && pp !== "akcija"
                          ? product?.[pp]
                          : product?.[pp]
                          ? parseFloat(product?.[pp]).toFixed(2)
                          : "Proizvod nije na akciji"}
                      </Text>
                    </div>
                  </div>
                );
            })}
          </div>
        </ModalBody>

        <ModalFooter height={"auto"}>
          <Button
            mr={2}
            colorScheme={"red"}
            onClick={async () => {
              const payload = {
                id: product?.id,
                category: category,
              };
              const confirmRes = confirm(
                "Jeste li sigurni da želite da uklonite ovaj proizvod?"
              );
              if (confirmRes) {
                const deleted = await deleteProduct(payload);

                closeModal();
                toast(
                  `Uspješno uklonjen proizvod! ID: ${deleted?.data?.product?.id}`,
                  {
                    progressStyle: { background: "#4CBB17" },
                  }
                );
                setProduct(null);
                setProductProperties(null);

                const t = setTimeout(() => {
                  router.reload();
                }, 1500);

                return () => clearTimeout(t);
              }
            }}
          >
            Izbriši proizvod
          </Button>
          <Button
            color={"#fff"}
            bg={"#4cbb17"}
            _hover={{
              bg: "#4cbb1790",
            }}
            onClick={() => closeModal()}
          >
            Izadji
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default DeleteModal;
