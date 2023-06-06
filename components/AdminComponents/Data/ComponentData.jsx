import React, { useState } from "react";
import { Button, Divider, Input, Text } from "@chakra-ui/react";
import { createId } from "@paralleldrive/cuid2";

function ComponentData({ data, openModal, updateSelectedProduct }) {
  const [state, setState] = useState();
  const [id] = useState(createId());

  return (
    <form>
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
                <Text fontSize={"lg"}>ID: {item.id}</Text>
                <Text fontSize={"xl"}>
                  Cijena:{" "}
                  {item?.akcija
                    ? parseFloat(item?.akcija).toFixed(2)
                    : parseFloat(item?.cijena).toFixed(2)}{" "}
                  KM
                </Text>
              </div>
              <div className="product-item-info">
                <Text fontSize={"lg"} fontWeight="bold">
                  {item?.naslov}
                </Text>
              </div>
            </div>
          </div>
        );
      })}
    </form>
  );
}

export default ComponentData;
