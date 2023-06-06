import Icon from "@chakra-ui/icon";
import { Text, Select, Button, Textarea } from "@chakra-ui/react";
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
import { createProduct } from "../../fetchFunctions/createProduct";
import { formatPrice } from "../../helpers/formatPrice";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
function CreateProduct({ properties }) {
  const [category, setCategory] = useState("laptop");
  const [initialProduct, setInitialProduct] = useState({});
  const router = useRouter();

  const checkIfEmpty = obj => {
    const newObj = {};

    Object.keys(obj).forEach(i => {
      newObj[i] = obj[i] === "" ? null : obj[i];
    });

    return newObj;
  };
  const updateCategory = cat => {
    setCategory(cat);
  };

  const resetInitialProduct = () => {
    const obj = {};

    properties[category].forEach(prop => {
      obj[prop] = "";
    });

    setInitialProduct(obj);
  };

  useEffect(() => {
    resetInitialProduct();
  }, [category]);

  useEffect(() => {
    resetInitialProduct();
  }, []);

  const updateNewProduct = (key, value) => {
    setInitialProduct(prevState => {
      if (key === "akcija" || key === "cijena") {
        // const val = ;
        // console.log("ovoe value iz inputa", val);

        return {
          ...prevState,
          [key]: value !== "" ? parseFloat(value).toFixed(2) : "",
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
  const formatText = string => {
    const capitalize =
      String(string)?.charAt(0).toUpperCase() + string?.slice(1);
    return capitalize?.split("_")?.join(" ");
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
              onChange={e => updateCategory(e.target.value)}
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
        <div className="create-product-content-body">
          <div className="create-product-sidebar">
            <div className="create-product-sidebar-image-wrapper">
              <div className="create-product-big-image">
                <Image fill src="/static/T1.png" alt="asa" />
              </div>
              <div className="create-product-small-image-holder"></div>
            </div>
            <div className="create-product-sidebar-info">
              {properties?.[category].map(pp => {
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
                        onChange={e => {
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
                onClick={async () => {
                  const modifiedObj = checkIfEmpty(initialProduct);
                  console.log("DAL JE NULIRANO SVE PRAZNO", modifiedObj);

                  const payload = {
                    product: { ...modifiedObj },
                    cat: category,
                  };
                  if (
                    initialProduct?.id &&
                    initialProduct?.cijena &&
                    initialProduct?.naslov
                  ) {
                    const res = await createProduct(payload);
                    console.log("RISPONSE OD APIJA", res);
                    console.log("PORUKA NAKON USPJEHA", res?.data?.msg);
                    if (res?.data?.msg) {
                      toast(res?.data?.msg, {
                        progressStyle: {
                          background: "#4cbb17",
                        },
                      });
                      const t = setTimeout(() => {
                        router.reload();
                      }, 1500);

                      return () => clearTimeout(t);
                    } else {
                      toast(res?.data?.err, {
                        progressStyle: {
                          background: "red",
                        },
                      });
                    }
                  } else {
                    toast(
                      "ID, cijena i naslov moraju biti popunjeni da bi kreirali artikl!"
                    );
                  }
                }}
              >
                <Icon as={FaCheckDouble} />
                Snimi artikl
              </Button>
              <Button
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
              </Button>
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
