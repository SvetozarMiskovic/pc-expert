import React, { useState } from "react";
import { Button, Divider, Input, Text } from "@chakra-ui/react";
import { createId } from "@paralleldrive/cuid2";

function LaptopData({ data, openModal, updateSelectedProduct }) {
  const [state, setState] = useState();
  const [id] = useState(createId());
  const formatText = string => {
    const capitalize = string.charAt(0).toUpperCase() + string.slice(1);
    return capitalize.split("_").join(" ");
  };

  // const updateState = (prop, value) => {
  //   setState(prevState => {
  //     return {
  //       ...prevState,
  //       [prop]: value,
  //     };
  //   });
  // };
  // const submitRequest = e => {
  //   e.preventDefault();
  // };
  // console.log(data);

  return (
    <form>
      {data?.map(item => {
        // console.log(item?.id);
        return (
          <div
            className="product-item"
            key={item?.id}
            onClick={() => {
              updateSelectedProduct(item?.id);
              openModal();
            }}
          >
            <div className="product-item-content">
              <div className="product-item-id">
                <Text fontSize={"lg"}>ID: {item.id}</Text>

                <Text fontSize={"xl"}>
                  Cijena:{" "}
                  {item?.akcija
                    ? parseFloat(item?.akcija).toFixed(2)
                    : parseFloat(item?.cijena).toFixed(2)}
                  KM
                </Text>
              </div>
              <div className="product-item-info">
                <Text fontSize={"lg"} fontWeight="bold">
                  {item?.naslov}
                </Text>
              </div>
            </div>
            {/* <Divider
              borderColor={"#4cbb17"}
              borderWidth="2px"
              marginLeft={"0.6rem"}
              orientation="vertical"
            /> */}
          </div>
        );
      })}
      {/* <Button
        _hover={{
          backgroundColor: "#4CBB1799",
        }}
        _active={{
          backgroundColor: "#4CBB17",
        }}
        borderRadius={"12rem"}
        backgroundColor={"#4CBB17"}
        width={"100%"}
        color={"#fff"}
        className="register-submit"
        type="submit"
        onClick={() => console.log(state)}
        // isLoading={loading}
      >
        Uredi artikl
      </Button> */}
    </form>
  );
}

export default LaptopData;
