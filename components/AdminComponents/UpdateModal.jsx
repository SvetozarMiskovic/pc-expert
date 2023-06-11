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
  Icon,
} from "@chakra-ui/react";
import Image from "next/image";

import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { useUpdateArticle } from "../../hooks/useUpdateArticle";
import { useAuthContext } from "../../context/AuthContext";
import { FaFileImage, FaImage, FaTimes } from "react-icons/fa";
import { storage } from "../../config/firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { createId } from "@paralleldrive/cuid2";

function UpdateModal({
  openModal,
  closeModal,
  open,
  selectedProduct,
  data,
  category,
}) {
  const [product, setProduct] = useState({});
  const [images, setImages] = useState([]);
  const [toDelete, setToDelete] = useState([]);
  const [imageState, setImageState] = useState({
    active: 1,
    length: 0,
  });
  const { mutateAsync: updateArticle } = useUpdateArticle();
  const { role } = useAuthContext();

  const router = useRouter();

  const updateToDelete = id => {
    setToDelete(prevState => {
      return [...prevState, id];
    });
  };

  const resetToDelete = () => {
    setToDelete([]);
  };
  const deleteAddedImage = name => {
    setImages(prevState => {
      const arr = prevState?.filter(ps => ps?.name !== name);
      return arr;
    });
  };

  const deleteSavedImage = url => {
    setProduct(prevState => {
      const arr = prevState?.slike?.filter(slika => slika?.url !== url);
      return {
        ...prevState,
        slike: arr,
      };
    });
  };
  const uploadImage = files => {
    const final = Object.values(files);
    // console.log(final);
    setImages(final);
    toast("Učitavanje završeno!", {
      progressStyle: {
        background: "red",
      },
    });
  };

  const resetImages = () => {
    setImages([]);
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

  const nextImage = () => {
    setImageState(prevState => {
      if (prevState?.active === prevState?.length) {
        return {
          ...prevState,
        };
      }
      return {
        ...prevState,
        active: prevState?.active + 1,
      };
    });
  };

  const prevImage = () => {
    setImageState(prevState => {
      if (prevState?.active === 1) {
        return {
          ...prevState,
        };
      }
      return {
        ...prevState,
        active: prevState?.active - 1,
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

  const formatText = string => {
    const capitalize =
      String(string)?.charAt(0).toUpperCase() + string?.slice(1);
    return capitalize?.split("_")?.join(" ");
  };

  const storeImages = async () => {
    return images?.map(async (image, i) => {
      const ID = createId();
      const articleRef = ref(storage, `/${category}/${product?.id}/${ID}`);

      return uploadBytesResumable(articleRef, image)
        .then(data => {
          console.log(data?.ref?.id, data?.ref);
          return getDownloadURL(data?.ref);
        })
        .then(url => {
          return { url, id: ID };
        })
        .catch(err => {
          console.log(err);
          throw Error("Upload nije uspio! Obratite se na info@pcexpert.ba");
        });
    });
  };

  const updateProduct = (key, value) => {
    setProduct(prevState => {
      if (key === "akcija" || key === "cijena") {
        return {
          ...prevState,
          [key]: value !== "" ? value : "",
        };
      }
      return {
        ...prevState,
        [key]: value,
      };
    });
  };

  useEffect(() => {
    if (product) {
      imagesLength(product?.slike?.length);
    }
  }, [product]);

  useEffect(() => {
    const filterSelectedProduct = id => {
      const newData = data?.[category]?.find(item => {
        if (selectedProduct)
          return item?.id?.toString() === selectedProduct?.toString();
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

    // const copyProductObject = () => {
    //   if (product?.id) {
    //     const productCopy = Object?.assign({}, product);

    //     setChangedValues(productCopy);
    //   }

    //   // productCopy = { ...keys };
    // };

    filterSelectedProduct(selectedProduct);

    // copyProductObject();
  }, [selectedProduct]);

  const handleUpdateArticle = async () => {
    // const current = Object?.values(product);
    // const changed = Object?.values(changedValues);
    // const isSame = compareArrays(current, changed);

    // console.log(isSame, current, changed);

    // const modifiedObj = checkIfEmpty(changedValues);

    const payload = {
      id: product?.id,
      category: category,
      data: product,
      role,
      toDelete,
    };

    const confirmRes = confirm(
      "Jeste li sigurni da želite da uredite ovaj artikl?"
    );

    if (confirmRes) {
      const promises = await storeImages();
      const urls = await Promise.all(promises);

      if (urls) {
        payload?.data?.slike?.push(...urls);
        console.log(urls, payload);
        const updated = await updateArticle(payload);

        closeModal();
        toast(updated?.msg, {
          progressStyle: {
            background: "#4CBB17",
          },
        });
        setProduct({});
        resetImages();
        resetToDelete();
      }
    }
    // } else {
    //   toast("Nema promjena!", {
    //     progressStyle: {
    //       background: "red",
    //     },
    //   });
    //   closeModal();
    // }
  };
  if (product)
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
              <Text fontSize={"2xl"} fontWeight={"bold"}>
                Snimljene slike
              </Text>

              {product?.slike?.map((slika, index) => {
                if (index === imageState?.active - 1)
                  return (
                    <div
                      key={slika?.id}
                      className="update-modal-big-image"
                      onDoubleClick={() => {
                        deleteSavedImage(slika?.url);
                        resetActiveImageState();
                        updateToDelete(slika?.id);
                      }}
                    >
                      <img
                        src={slika?.url}
                        // style={{
                        //   objectFit: "contain",
                        //   backgroundPosition: "center",
                        //   flexShrink: 0,
                        // }}
                        // fill
                        // sizes="(min-width: 60em) 24vw,
                        // (min-width: 28em) 45vw,
                        // 100vw"
                        // style={{
                        //   objectFit: "fit",
                        // }}
                        alt="img"
                      />
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
                        key={slika?.id}
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
              <Text fontSize={"2xl"} fontWeight={"bold"}>
                Slike za dodati
              </Text>
              {images?.length === 0 && (
                <Text fontSize={"xl"} fontWeight={"bold"} fontStyle={"italic"}>
                  Nema slika!
                </Text>
              )}
              <div className="update-modal-added-images">
                {images?.map((file, index) => {
                  console.log(file);
                  return (
                    <div
                      className="update-modal-added-image-holder"
                      key={index}
                    >
                      <div className="update-modal-single-added-name">
                        <Text fontSize={"md"} wordBreak={"break-all"}>
                          {file?.name}
                        </Text>
                        <Icon
                          as={FaTimes}
                          cursor={"pointer"}
                          transition="200ms ease"
                          _hover={{ color: "red", transition: "200ms ease" }}
                          onClick={() => {
                            deleteAddedImage(file?.name);
                          }}
                        />
                      </div>
                      <div className="update-modal-single-added-image">
                        <Text fontSize={"md"}>{file?.name}</Text>

                        <Image
                          src={URL.createObjectURL(file)}
                          alt="addedImage"
                          sizes="(min-width: 60em) 24vw,
                        (min-width: 28em) 45vw,
                        100vw"
                          fill
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="update-modal-title-info">
                {Object.keys(product)?.map(pp => {
                  if (pp === "detalji" || pp === "naslov")
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
                          // borderColor={
                          //   changedValues?.[pp] === product?.[pp]
                          //     ? "#0c0c0c50"
                          //     : "#007fff"
                          // }
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
                          onKeyUp={e => {
                            updateProduct(pp, e.currentTarget.value);
                          }}
                          defaultValue={product?.[pp]}
                          // placeholder={!product?.[pp] ? "/prazno" : ""}
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
              {Object.keys(product)?.map(pp => {
                const enabled = pp.toLowerCase() === "id" ? true : false;

                if (pp !== "detalji" && pp !== "naslov" && pp !== "slike")
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
                          defaultValue={product?.[pp]}
                          // placeholder={product?.[pp]}
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
                          onKeyUp={e => {
                            updateProduct(pp, e.currentTarget.value);
                          }}
                          // borderColor={
                          //   changedValues?.[pp] === product?.[pp]
                          //     ? "#0c0c0c50"
                          //     : "#007fff"
                          // }
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

          <ModalFooter height={"auto"} display={"flex"} gap={"0.3rem"}>
            <label
              htmlFor="updateUpload"
              className="update-product-upload-image-input"
            >
              <Icon as={FaFileImage} />
              Dodaj sliku
            </label>
            <input
              type="file"
              id="updateUpload"
              style={{ display: "none" }}
              multiple
              onChange={e => uploadImage(e?.target?.files)}
            />

            {/* <Button
              color={"#fff"}
              bg={"#f89a20"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={"0.4rem"}
              _hover={{
                bg: "#f89a2090",
              }}
              mr={2}
            >
              <Icon as={FaImage} />
              Dodaj slike
            </Button> */}
            <Button
              color={"#fff"}
              bg={"#4cbb17"}
              _hover={{
                bg: "#4cbb1790",
              }}
              onClick={handleUpdateArticle}
            >
              Snimi promjene
            </Button>
            <Button
              colorScheme={"red"}
              onClick={() => {
                closeModal();
                setProduct(null);
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
