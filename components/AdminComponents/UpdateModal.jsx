import React, { useEffect, useRef, useState } from "react";
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
  Checkbox,
} from "@chakra-ui/react";
import Image from "next/image";
import { updateProduct } from "../../fetchFunctions/updateProduct";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

function UpdateModal({
  openModal,
  closeModal,
  open,
  selectedProduct,
  data,
  category,
}) {
  const [product, setProduct] = useState({});
  const [productProperties, setProductProperties] = useState(null);
  const [changedValues, setChangedValues] = useState({});

  const router = useRouter();

  const compareArrays = (a, b) => {
    return JSON.stringify(a) === JSON.stringify(b);
  };

  const checkIfEmpty = obj => {
    const newObj = {};

    Object.keys(obj).forEach(i => {
      newObj[i] = obj[i] === "" ? null : obj[i];
    });

    return newObj;
  };

  const formatText = string => {
    const capitalize =
      String(string)?.charAt(0).toUpperCase() + string?.slice(1);
    return capitalize?.split("_")?.join(" ");
  };

  const updateChangedValues = (key, value) => {
    setChangedValues(prevState => {
      if (key === "akcija" || key === "cijena") {
        return {
          ...prevState,
          [key]: value ? parseFloat(value).toFixed(2) : null,
        };
      }
      return {
        ...prevState,
        [key]: value,
      };
    });
  };

  useEffect(() => {
    const filterSelectedProduct = id => {
      const newData = data[category]?.find(item => {
        if (selectedProduct)
          return item?.id.toString() === selectedProduct.toString();
      });

      const cijena = String(parseFloat(newData?.cijena).toFixed(2));
      const akcija = newData?.akcija
        ? String(parseFloat(newData?.akcija).toFixed(2))
        : null;

      if (newData) {
        Object?.assign(newData, {
          cijena,
          akcija,
        });
      }

      setProduct(prevState => {
        return newData;
      });
    };

    const filterProperties = () => {
      if (product?.id) {
        const newData = Object.keys(product);

        setProductProperties(prevState => {
          return newData;
        });
      }
    };

    const copyProductObject = () => {
      const productCopy = Object?.assign({}, product);
      setChangedValues(productCopy);
    };

    filterSelectedProduct(selectedProduct);
    filterProperties();
    copyProductObject();
  }, [selectedProduct, product]);

  return (
    <Modal isOpen={open} onClose={closeModal} size={"6xl"}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader display={"flex"} gap={"0.4rem"}>
          <Text color={"#0c0c0c"}>{product?.naslov}</Text>
          <Text color={"red"} fontStyle="italic">
            ID: {product?.id}
          </Text>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody display={"flex"} width={"100%"}>
          <div className="update-modal-images">
            <div className="update-modal-big-image">
              <Image src={"/static/T1.png"} fill alt="img" />
            </div>
            <div className="update-modal-big-image">
              <Image
                src={
                  "https://storage.googleapis.com/pcexpert-images/kartica.PNG"
                }
                fill
                alt="img"
              />
            </div>
            <div className="update-modal-smaller-images-holder">
              <div className="update-modal-smaller-image-1">
                <Image src={"/static/T1.png"} fill alt="img" />
              </div>
              <div className="update-modal-smaller-image-2">
                <Image src={"/static/T1.png"} fill alt="img" />
              </div>
              <div className="update-modal-smaller-image-3">
                <Image src={"/static/T1.png"} fill alt="img" />
              </div>
            </div>
            <div className="update-modal-title-info">
              {productProperties?.map(pp => {
                if (pp === "naslov" || pp === "detalji")
                  return (
                    <div className="update-modal-info-group" key={pp}>
                      <Text
                        fontWeight={"bold"}
                        fontSize={"2xl"}
                        color="#0c0c0c"
                      >
                        {formatText(pp)}
                      </Text>
                      <Textarea
                        fontSize={"xl"}
                        color="#0c0c0c"
                        borderColor={
                          changedValues?.[pp] === product?.[pp]
                            ? "#0c0c0c50"
                            : "#007fff"
                        }
                        _focus={{
                          borderColor: "#4cbb17",
                        }}
                        _active={{
                          borderColor: "#4cbb17",
                        }}
                        _hover={{
                          borderColor: "#4cbb17",
                        }}
                        outline={"none"}
                        _focusVisible={{
                          borderColor: "#4cbb17",
                        }}
                        onChange={e => {
                          updateChangedValues(pp, e.currentTarget.value);
                        }}
                        defaultValue={product?.[pp]}
                        placeholder={!product?.[pp] ? "/prazno" : ""}
                      ></Textarea>
                      {pp === "detalji" && (
                        <Text
                          variant={"ghost"}
                          fontSize="md"
                          fontStyle={"italic"}
                          color="red"
                        >
                          {"(3000 slova max)"}
                        </Text>
                      )}
                    </div>
                  );
              })}
            </div>
          </div>
          <div className="update-modal-content">
            {productProperties?.map(pp => {
              const enabled = pp.toLowerCase() === "id" ? true : false;

              if (pp !== "detalji" && pp !== "naslov")
                return (
                  <div className="update-modal-info-showcase" key={pp}>
                    <div className="update-modal-info-showcase-header">
                      <Text
                        fontSize={"2xl"}
                        color={"#0c0c0c"}
                        fontWeight={"bold"}
                      >
                        {formatText(pp)}
                      </Text>
                    </div>
                    <div className="update-modal-info-showcase-values">
                      <Input
                        defaultValue={
                          pp !== "cijena" || pp !== "akcija"
                            ? product?.[pp]
                            : product?.[pp]
                            ? parseFloat(product?.[pp])
                            : "Proizvod nije na akciji"
                        }
                        placeholder={!product?.[pp] ? "/prazno" : ""}
                        fontSize={"lg"}
                        color={"#0c0c0c"}
                        disabled={enabled}
                        _disabled={{
                          borderColor: "red",
                          cursor: "not-allowed",
                          _hover: {
                            borderColor: "red",
                          },
                        }}
                        onChange={e => {
                          updateChangedValues(pp, e.currentTarget.value);
                        }}
                        borderColor={
                          changedValues?.[pp] === product?.[pp]
                            ? "#0c0c0c50"
                            : "#007fff"
                        }
                        _focus={{
                          borderColor: "#4cbb17",
                        }}
                        _active={{
                          borderColor: "#4cbb17",
                        }}
                        _hover={{
                          borderColor: "#4cbb17",
                        }}
                        outline={"none"}
                        _focusVisible={{
                          borderColor: "#4cbb17",
                        }}
                      />
                    </div>
                  </div>
                );
            })}
          </div>
        </ModalBody>

        <ModalFooter height={"auto"}>
          <Button
            color={"#fff"}
            bg={"#4cbb17"}
            _hover={{
              bg: "#4cbb1790",
            }}
            mr={2}
            onClick={async () => {
              const current = Object?.values(product);
              const changed = Object?.values(changedValues);
              const isSame = compareArrays(current, changed);

              console.log(isSame, current, changed);

              if (!isSame) {
                const modifiedObj = checkIfEmpty(changedValues);

                const payload = {
                  id: product?.id,
                  category: category,
                  data: modifiedObj,
                };

                const confirmRes = confirm(
                  "Jeste li sigurni da želite da uredite ovaj artikl?"
                );
                if (confirmRes) {
                  const updated = await updateProduct(payload);

                  closeModal();
                  toast(
                    `Uspješno uredjen artikl! ID: ${updated?.data?.product?.id}`,
                    {
                      progressStyle: { background: "#4CBB17" },
                    }
                  );
                  setProduct({});
                  setProductProperties(null);

                  const t = setTimeout(() => {
                    router.reload();
                  }, 2000);

                  return () => clearTimeout(t);
                }
              } else {
                toast("Nema promjena!", {
                  progressStyle: {
                    background: "red",
                  },
                });
                closeModal();
              }
            }}
          >
            Snimi promjene
          </Button>
          <Button
            colorScheme={"red"}
            onClick={() => {
              closeModal();
              setProduct(null);
              setProductProperties(null);
            }}
          >
            Izadji
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default UpdateModal;
