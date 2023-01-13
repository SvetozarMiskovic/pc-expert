import { Divider, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import SingleComputer from "./SingleComputer";

function ComputerOffer() {
  return (
    <div className="computer-offer-component">
      <div className="computer-commercial">
        <Image fill src={"/racunarizonera.png"} alt="reklama" />
      </div>
      <div className="computer-products">
        <Text
          textAlign={"center"}
          paddingTop={"0.4rem"}
          paddingBottom={"0.4rem"}
          fontSize={"4xl"}
          color={"#f89a20"}
          className="small-title"
        >
          Ponuda racunara
        </Text>
        <div className="computer-products-1">
          <SingleComputer
            price={"900,00 KM"}
            src={"/aspire.png"}
            name={"Acer Aspire 3"}
          />
          <SingleComputer
            price={"2000,00 KM"}
            src={"/air.jpeg"}
            name={"Macbook Air M1"}
          />
          <SingleComputer
            price={"2000,00 KM"}
            src={"/air.jpeg"}
            name={"Macbook Air M1"}
          />
          <SingleComputer
            price={"2000,00 KM"}
            src={"/air.jpeg"}
            name={"Macbook Air M1"}
          />
          <SingleComputer
            price={"2000,00 KM"}
            src={"/air.jpeg"}
            name={"Macbook Air M1"}
          />
          <SingleComputer
            price={"2000,00 KM"}
            src={"/air.jpeg"}
            name={"Macbook Air M1"}
            klasa="mobile"
          />
        </div>
        <Divider />
        <div className="computer-products-2">
          <SingleComputer
            price={"2000,00 KM"}
            src={"/air.jpeg"}
            name={"Macbook Air M1"}
          />
          <SingleComputer
            price={"2000,00 KM"}
            src={"/air.jpeg"}
            name={"Macbook Air M1"}
          />
          <SingleComputer
            price={"2000,00 KM"}
            src={"/air.jpeg"}
            name={"Macbook Air M1"}
          />
          <SingleComputer
            price={"2000,00 KM"}
            src={"/air.jpeg"}
            name={"Macbook Air M1"}
          />
          <SingleComputer
            price={"2000,00 KM"}
            src={"/air.jpeg"}
            name={"Macbook Air M1"}
          />
          <SingleComputer
            price={"2000,00 KM"}
            src={"/air.jpeg"}
            name={"Macbook Air M1"}
            klasa="mobile"
          />
        </div>
      </div>
    </div>
  );
}

export default ComputerOffer;
