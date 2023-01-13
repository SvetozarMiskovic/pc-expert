import { Button, Icon, Text } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";
import Image from "next/image";
import React from "react";

function SinglePhone({ src, price, name, klasa }) {
  return (
    <div
      className={klasa ? "single-phone-holder mobile" : "single-phone-holder"}
    >
      <div className="single-phone-header">
        <Text fontSize={"lg"} color={"#f89a20"}>
          {name}
        </Text>
      </div>
      <div className="single-phone-image">
        <Image width={100} height={100} src={src} alt="ikonica" />
      </div>
      <div className="single-phone-price">
        <Text fontSize={"lg"} textAlign="center" color={"#f89a20"}>
          {price}
        </Text>
        <Button
          _hover={{
            backgroundColor: "#f89a2099",
          }}
          _active={{
            backgroundColor: "#f89a20",
          }}
          backgroundColor={"#f89a20"}
          color={"#fff"}
        >
          Dodaj <Icon as={FaShoppingCart} />
        </Button>
      </div>
      <Text fontSize={"lg"} className="single-phone-garanty">
        GARANCIJA
      </Text>
    </div>
  );
}

export default SinglePhone;
