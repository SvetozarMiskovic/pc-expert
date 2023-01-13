import { Button, Divider, Icon, Text } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";
import Image from "next/image";
import React from "react";
import SinglePhone from "./SinglePhone";

function PhoneOffer() {
  return (
    <div className="phone-offer-component">
      <div className="phone-commercial">
        <Image fill src={"/telefonizonera.png"} alt="telefoni" />
      </div>
      <div className="phone-products">
        <Text
          textAlign={"center"}
          paddingTop={"0.4rem"}
          paddingBottom={"0.4rem"}
          fontSize={"4xl"}
          color={"#f89a20"}
          className={"small-title"}
        >
          Ponuda telefona
        </Text>
        <div className="phone-products-1">
          <SinglePhone
            src={"/pocox3.jpeg"}
            price={"550,00KM"}
            name={"XIAOMI Poco X3 Pro"}
          />
          <SinglePhone
            src={"/mi11.jpeg"}
            price={"750,00KM"}
            name={"XIAOMI Mi11"}
          />
          <SinglePhone
            src={"/samsungs10.png"}
            price={"1250,00KM"}
            name={"Samsung S10"}
          />
          <SinglePhone
            src={"/iphone.png"}
            price={"2050,00KM"}
            name={"Iphone 12 Pro"}
          />
          <SinglePhone
            src={"/alcatel.jpeg"}
            price={"450,00KM"}
            name={"Alcatel One Note"}
          />
          <SinglePhone
            src={"/alcatel.jpeg"}
            price={"450,00KM"}
            name={"Alcatel One Note"}
            klasa="mobile"
          />
        </div>
        <Divider />
        <div className="phone-products-2">
          <SinglePhone
            src={"/a50.webp"}
            price={"600,00KM"}
            name={"Samsung A50"}
          />
          <SinglePhone
            src={"/a53.jpeg"}
            price={"800,00KM"}
            name={"Samsung A53"}
          />
          <SinglePhone
            src={"/iphonex.png"}
            price={"1400,00KM"}
            name={"Iphone X"}
          />
          <SinglePhone
            src={"/s6edge.webp"}
            price={"650,00KM"}
            name={"Samsung S6 Edge"}
          />
          <SinglePhone
            src={"/a50.webp"}
            price={"600,00KM"}
            name={"Samsung A50"}
          />
          <SinglePhone
            src={"/a50.webp"}
            price={"600,00KM"}
            name={"Samsung A50"}
            klasa={"mobile"}
          />
        </div>
      </div>
    </div>
  );
}

export default PhoneOffer;
