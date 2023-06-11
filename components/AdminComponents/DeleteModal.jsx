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
import { useAuthContext } from "../../context/AuthContext";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { useDeleteArticle } from "../../hooks/useDeleteArticle";

function DeleteModal({
  openModal,
  closeModal,
  open,
  selectedProduct,
  data,
  category,
}) {
  const { mutateAsync: deleteArticle } = useDeleteArticle();
  const { role } = useAuthContext();
  const [product, setProduct] = useState({});

  const [imageState, setImageState] = useState({
    active: 1,
    length: 0,
  });
  const router = useRouter();

  const resetProduct = () => {
    setProduct({});
  };
  const formatText = string => {
    const capitalize =
      String(string)?.charAt(0).toUpperCase() + string?.slice(1);
    return capitalize?.split("_")?.join(" ");
  };

  const resetActiveImageState = () => {
    setImageState(prevState => {
      return {
        ...prevState,
        active: 1,
      };
    });
  };

  const updateImage = value => {
    setImageState(prevState => {
      console.log(value, prevState?.length);

      if (value >= prevState?.length)
        return {
          ...prevState,
          active: 1,
        };

      return {
        ...prevState,
        active: value + 1,
      };
    });
  };

  const imagesLength = (length = 0) => {
    setImageState(prevState => {
      return {
        ...prevState,
        length: length,
      };
    });
  };

  useEffect(() => {
    resetProduct();

    resetActiveImageState();
  }, [category]);

  useEffect(() => {
    if (product) {
      imagesLength(product?.slike?.length);
    }
  }, [product]);

  useEffect(() => {
    const filterSelectedProduct = id => {
      const newData = data?.[category]?.filter(item => {
        if (selectedProduct)
          return item?.id.toString() === selectedProduct.toString();
      });

      setProduct(prevState => {
        return newData?.[0] ? newData?.[0] : {};
      });
    };
    filterSelectedProduct(selectedProduct);
    resetActiveImageState();
  }, [selectedProduct]);

  const handleDeleteArticle = async () => {
    const payload = {
      id: product?.id,
      category: category,
      role,
    };
    const confirmRes = confirm(
      "Jeste li sigurni da želite da uklonite ovaj proizvod?"
    );
    if (confirmRes) {
      const response = await deleteArticle(payload);

      closeModal();
      toast(response?.msg, {
        progressStyle: { background: "#4CBB17" },
      });
      setProduct(null);
      setProductProperties(null);
      // closeModal();
      // toast(`Uspješno uklonjen proizvod! ID: ${deleted?.data?.product?.id}`, {
      //   progressStyle: { background: "#4CBB17" },
      // });

      // const t = setTimeout(() => {
      //   router.reload();
      // }, 1500);

      // return () => clearTimeout(t);
    }
  };
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
            <Text fontSize={"2xl"} fontWeight={"bold"}>
              Snimljene slike
            </Text>
            {product?.slike?.length === 0 && (
              <Text fontSize={"xl"} fontWeight={"bold"} fontStyle={"italic"}>
                Nema slika!
              </Text>
            )}
            {product?.slike?.map((slika, index) => {
              if (index === imageState?.active - 1)
                return (
                  <div key={index} className="create-modal-big-image">
                    <img src={slika?.url} />
                  </div>
                );
            })}

            <div
              className="update-modal-smaller-images-holder"
              style={{
                overflowX: "auto",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "0.7rem",
                  justifyContent: "center",
                  // width: "100%",
                }}
              >
                {product?.slike?.map((slika, index) => {
                  return (
                    <div
                      className={`update-modal-single-image-holder`}
                      key={index}
                      onClick={() => updateImage(index)}
                      style={{
                        border: `2px solid ${
                          index === imageState?.active - 1
                            ? "#f89a20"
                            : "transparent"
                        }`,
                      }}
                    >
                      <Image
                        src={slika?.url}
                        alt="img"
                        fill
                        sizes="(min-width: 60em) 24vw,
                        (min-width: 28em) 45vw,
                        100vw"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="delete-modal-title-info">
              {product &&
                Object.keys(product)?.map(pp => {
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
            {product &&
              Object?.keys(product)?.map(pp => {
                if (pp !== "detalji" && pp !== "naslov" && pp !== "slike")
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
                          {product?.[pp]}
                        </Text>
                      </div>
                    </div>
                  );
              })}
          </div>
        </ModalBody>

        <ModalFooter height={"auto"}>
          <Button mr={2} colorScheme={"red"} onClick={handleDeleteArticle}>
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
