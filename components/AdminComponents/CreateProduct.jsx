import Icon from "@chakra-ui/icon";
import { Text, Select, Button, Textarea, Input } from "@chakra-ui/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  FaPlusCircle,
  FaCheckDouble,
  FaFileImage,
  FaCog,
} from "react-icons/fa";
import { createProductProperties } from "../../helpers/createProductProperties";
import { createId } from "@paralleldrive/cuid2";
import { formatPrice } from "../../helpers/formatPrice";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { useCreateArticle } from "../../hooks/useCreateArticle";
import { useAuthContext } from "../../context/AuthContext";
import { useProductProperties } from "../../hooks/useProductProperties";

function CreateProduct() {
  const [category, setCategory] = useState("laptopi");
  const [initialProduct, setInitialProduct] = useState({});
  const [images, setImages] = useState([]);
  const [imageState, setImageState] = useState({
    active: 1,
    length: 0,
  });
  const { mutateAsync: createArticle } = useCreateArticle();
  const { role } = useAuthContext();
  const { data: properties, isLoading } = useProductProperties();
  console.log(properties.data);

  const router = useRouter();

  const uploadImage = (files) => {
    const final = Object.values(files);

    setImages(final);
    toast("Učitavanje završeno!", {
      progressStyle: {
        background: "red",
      },
    });
    resetActiveImageState();
  };

  const updateImage = (value) => {
    setImageState((prevState) => {
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

  const resetActiveImageState = () => {
    setImageState((prevState) => {
      return {
        ...prevState,
        active: 1,
      };
    });
  };

  const deleteAddedImage = (name) => {
    setImages((prevState) => {
      const arr = prevState?.filter((ps) => ps?.name !== name);
      return arr;
    });
  };

  const resetImages = () => {
    setImages([]);
  };

  const updateCategory = (cat) => {
    setCategory(cat);
  };

  const resetInitialProduct = () => {
    const obj = {};

    properties?.data?.[category]?.forEach((prop) => {
      obj[prop] = "";
    });

    setInitialProduct(obj);
  };

  const imagesLength = (length = 0) => {
    setImageState((prevState) => {
      return {
        ...prevState,
        length: length,
      };
    });
  };

  useEffect(() => {
    resetInitialProduct();
    resetImages();
    resetActiveImageState();
  }, [category]);

  useEffect(() => {
    imagesLength(images?.length);
  }, [images]);

  const storeImages = async () => {
    return images?.map(async (image, i) => {
      const ID = createId();
      const articleRef = ref(
        storage,
        `/${category}/${initialProduct?.id}/${ID}`
      );

      return uploadBytesResumable(articleRef, image)
        .then((data) => {
          return getDownloadURL(data?.ref);
        })
        .then((url) => {
          return { url, id: ID };
        })
        .catch((err) => {
          console.log(err);
          throw Error("Upload nije uspio! Obratite se na info@pcexpert.ba");
        });
    });
  };

  const updateNewProduct = (key, value) => {
    setInitialProduct((prevState) => {
      if (key === "akcija" || key === "cijena") {
        // const val = ;
        // console.log("ovoe value iz inputa", val);

        return {
          ...prevState,
          [key]: value !== "" ? value : "",
        };
      }
      return {
        ...prevState,
        [key]: value,
      };

      // const val = parseFloat(value).toFixed(2);
      // console.log(value, val);
    });
  };
  const formatText = (string) => {
    const capitalize =
      String(string)?.charAt(0).toUpperCase() + string?.slice(1);
    return capitalize?.split("_")?.join(" ");
  };

  const handleCreateArticle = async () => {
    if (
      initialProduct?.id &&
      initialProduct?.cijena &&
      initialProduct?.naslov
    ) {
      const promises = await storeImages();
      const urls = await Promise.all(promises);
      // console.log("sve zavrseno", promises, urls);

      const payload = {
        product: { ...initialProduct, slike: urls ? urls : [] },
        cat: category,
        role,
      };

      // console.log(payload);
      if (urls) {
        const response = await createArticle(payload);

        if (response?.msg) {
          toast(response?.msg, {
            progressStyle: {
              background: "#4CBB17",
            },
          });
          resetInitialProduct();
          resetImages();
        } else {
          toast(
            "Greška! Obratite se na info@pcexpert.ba uz napomenu problema.",
            {
              progressStyle: {
                background: "red",
              },
            }
          );
        }
        // console.log("risponse", response);
      } else {
        toast("Artikl nije kreiran! Obratite se na info@pcexpert.ba.", {
          progressStyle: {
            background: "red",
          },
        });
      }
    } else {
      toast(
        "ID, cijena i naslov moraju biti popunjeni da bi kreirali artikl!",
        {
          progressStyle: {
            background: "red",
          },
        }
      );
    }
  };
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
              onChange={(e) => updateCategory(e.target.value)}
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
        <div className="create-product-content-body">
          <div className="create-product-sidebar">
            <div className="create-product-sidebar-image-wrapper">
              <Text fontSize={"2xl"} fontWeight={"bold"}>
                Slike za dodati
              </Text>
              {images?.length === 0 && (
                <Text fontSize={"xl"} fontWeight={"bold"} fontStyle={"italic"}>
                  Nema slika!
                </Text>
              )}
              {images?.map((slika, index) => {
                if (index === imageState?.active - 1)
                  return (
                    <div
                      key={index}
                      className="create-modal-big-image"
                      onDoubleClick={() => {
                        console.log(
                          "PRIJE DUPLOG KLIKA",
                          imageState?.active,
                          imageState?.length
                        );
                        deleteAddedImage(slika?.name);
                        resetActiveImageState();
                        console.log(
                          "NAKON DUPLOG KLIKA",
                          imageState?.active,
                          imageState?.length
                        );
                      }}
                    >
                      <Image
                        src={URL.createObjectURL(slika)}
                        fill
                        alt="img"
                        sizes="(min-width: 60em) 24vw,
                        (min-width: 28em) 45vw,
                        100vw"
                      />
                    </div>
                  );
              })}

              <div
                className="create-modal-smaller-images-holder"
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
                  {images?.map((slika, index) => {
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
                          src={URL.createObjectURL(slika)}
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
            </div>
            <div className="create-product-sidebar-info">
              {properties?.data?.[category]?.map((pp) => {
                if (pp === "naslov" || pp === "detalji")
                  return (
                    <div className="create-info-group" key={pp}>
                      <Text
                        fontWeight={"bold"}
                        fontSize={"2xl"}
                        color="#0c0c0c"
                      >
                        {formatText(pp)}
                      </Text>
                      <Textarea
                        value={initialProduct?.[pp]}
                        onChange={(e) => {
                          updateNewProduct(pp, e.target.value);
                        }}
                        fontSize={"xl"}
                        color="#0c0c0c"
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
                        // onChange={e => {
                        //   updateChangedValues(pp, e.currentTarget.value);
                        // }}
                        // defaultValue={product?.[pp]}
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
            <div className="create-product-sidebar-operations">
              <Button
                display={"flex"}
                gap={"0.3rem"}
                variant={"unstyled"}
                width={"100%"}
                background={"#007fff"}
                color={"#fff"}
                _hover={{
                  background: "#007fff90",
                }}
                _active={{
                  background: "#007fff",
                }}
                onClick={() => {
                  const gID = createId();
                  console.log(gID);
                  updateNewProduct("id", gID);
                }}
              >
                <Icon as={FaCog} />
                Generiši ID
              </Button>
              <Button
                variant={"unstyled"}
                animation={"ease"}
                display={"flex"}
                gap={"0.3rem"}
                width={"100%"}
                background={"#4cbb17"}
                color={"#fff"}
                _hover={{
                  background: "#4cbb1790",
                }}
                _active={{
                  background: "#4cbb17",
                }}
                onClick={handleCreateArticle}
              >
                <Icon as={FaCheckDouble} />
                Snimi artikl
              </Button>
              {/* <Button
                variant={"unstyled"}
                animation={"ease"}
                display={"flex"}
                gap={"0.3rem"}
                width={"100%"}
                background={"#f89a20"}
                color={"#fff"}
                _hover={{
                  background: "#f89a2090",
                }}
                _active={{
                  background: "#f89a20",
                }}
                onClick={() => console.log(initialProduct)}
              >
                <Icon as={FaFileImage} />
                Dodaj sliku
              </Button> */}

              <label
                htmlFor="upload"
                className="create-product-upload-image-input"
              >
                <Icon as={FaFileImage} />
                Dodaj sliku
              </label>
              <input
                type="file"
                id="upload"
                style={{ display: "none" }}
                multiple={true}
                onChange={(e) => uploadImage(e?.target?.files)}
              />
            </div>
          </div>
          <div className="create-product-properties">
            {createProductProperties(
              category,

              updateNewProduct,
              initialProduct
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateProduct;
