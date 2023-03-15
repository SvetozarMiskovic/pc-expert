import React, { useState } from "react";
import { Button, Divider, Input, Text } from "@chakra-ui/react";
import { createId } from "@paralleldrive/cuid2";

function ComponentData({ data, openModal, updateSelectedProduct }) {
  const [state, setState] = useState();
  const [id] = useState(createId());
  const formatText = string => {
    const capitalize = string.charAt(0).toUpperCase() + string.slice(1);
    return capitalize.split("_").join(" ");
  };
  const updateState = (prop, value) => {
    setState(prevState => {
      return {
        ...prevState,
        [prop]: value,
      };
    });
  };

  const submitRequest = e => {
    e.preventDefault();
  };

  console.log(data);
  return (
    <form onSubmit={submitRequest}>
      {data?.map(item => {
        return (
          <div
            key={item?.id}
            className="product-item"
            onClick={() => {
              openModal();
              updateSelectedProduct(item?.id);
            }}
          >
            <div className="product-item-content">
              <div className="product-item-id">
                <Text fontSize={"lg"} textDecoration="underline">
                  ID: {item.id}
                </Text>
                <Text fontSize={"xl"}>
                  {parseFloat(item?.cijena).toFixed(2)} KM
                </Text>
              </div>
              <div className="product-item-info">
                <Text fontSize={"lg"} fontWeight="bold">
                  {item?.naslov}
                </Text>
              </div>
            </div>
            <Divider
              borderColor={"#4cbb17"}
              borderWidth="2px"
              marginLeft={"0.6rem"}
              orientation="vertical"
            />
          </div>
        );
      })}
    </form>
  );
}

export default ComponentData;
