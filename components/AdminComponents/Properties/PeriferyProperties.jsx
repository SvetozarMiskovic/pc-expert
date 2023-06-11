import React, { useState } from "react";
import { Button, Input, Text } from "@chakra-ui/react";
import { createId } from "@paralleldrive/cuid2";

function PeriferyProperties({ properties, updateNewProduct, initialProduct }) {
  const formatText = string => {
    const capitalize = string.charAt(0).toUpperCase() + string.slice(1);
    return capitalize.split("_").join(" ");
  };

  return (
    <div className="create-product-category-window">
      {Object.keys(initialProduct)?.map(prop => {
        if (prop !== "detalji" && prop !== "naslov")
          return (
            <div
              key={prop}
              style={{
                display: "flex",
                flexDirection: "column",
                rowGap: "0.2rem",
              }}
            >
              <Text fontSize={"lg"} fontWeight={"bold"}>
                {formatText(prop)}
              </Text>
              <Input
                color={"#0c0c0c"}
                onChange={e => updateNewProduct(prop, e.target.value)}
                disabled={prop.toLowerCase() === "id" ? true : false}
                value={initialProduct?.[prop]}
              />
            </div>
          );
      })}
    </div>
  );
}

export default PeriferyProperties;
