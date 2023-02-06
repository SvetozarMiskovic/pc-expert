import { Text } from "@chakra-ui/react";
import React from "react";

function SingleInfo({ propertyName, propertyValue }) {
  return (
    <div className="single-info-item">
      <Text fontSize="lg" fontWeight="bold">
        {propertyName}
      </Text>
      <Text fontSize="md">{propertyValue}</Text>
    </div>
  );
}

export default SingleInfo;
