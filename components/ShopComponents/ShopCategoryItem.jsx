import Image from "next/image";
import React from "react";
import { Text, Button, Divider, Icon } from "@chakra-ui/react";
import { useCounter } from "@chakra-ui/counter";
import { useShopContext } from "../../context/ShopContext";
import { FaCartPlus } from "react-icons/fa";
function ShopCategoryItem({ dataCategory, dataAll }) {
  const counter = useCounter({
    max: 50,
    min: 1,
    step: 1,
    defaultValue: 1,
  });

  function truncate(str, length) {
    if (str) {
      if (str.length > length) {
        return str.slice(0, length) + "...";
      } else return str;
    } else {
      return "Nema naslova";
    }
  }

  // console.log(typeof counter.value);
  // console.log(!!dataCategory, dataAll);
  return !!dataCategory ? (
    <div className="shop-category-item-wrapper">
      <div className="shop-category-item-container">
        <div className="shop-category-item-image">
          {/* Slika proizvoda */}
          <div className="shop-category-item-image-box">
            <Image
              width={150}
              height={150}
              alt="product-image"
              src={"/T1.png"}
            />
          </div>
        </div>
        <div className="shop-category-item-product-info">
          <Text fontSize={"md"} color={"#5f5f5f"}>
            {dataCategory.id}
          </Text>
          {/* ID proizvoda */}
          <div className="shop-category-item-product-info-title">
            <Text height={"100%"} color={"#0c0c0d"} fontSize={"lg"}>
              {truncate(dataCategory.naslov, 80)}
            </Text>
          </div>
          {/* Naslov proizvoda */}

          <div className="shop-category-item-product-info-price">
            <Text
              textAlign={"center"}
              fontSize={"4xl"}
              fontWeight={"bold"}
              textColor={"#0c0c0d"}
            >
              {dataCategory.cijena}
            </Text>
            <Text
              width={"100%"}
              alignSelf={"flex-start"}
              justifySelf={"flex-start"}
              fontSize={"md"}
              fontWeight="bold"
            >
              KM
            </Text>
          </div>
          {/* Cijena proizvoda */}
        </div>
        <div className="shop-category-item-options">
          <div className="shop-category-item-options-counter">
            <Button
              width="35px"
              height="35px"
              _hover={{
                backgroundColor: "#4cbb17",
                color: "#fff",
              }}
              color={"#0c0c0d"}
              borderRadius={"10rem"}
              backgroundColor={"#eaedf1"}
              onClick={() => counter.decrement()}
            >
              -
            </Button>
            <Text fontSize={"md"} color={"#0c0c0d"} fontWeight="bold">
              {counter.value}
            </Text>
            <Button
              width="35px"
              height="35px"
              _hover={{
                backgroundColor: "#4cbb17",
                color: "#fff",
              }}
              backgroundColor={"#eaedf1"}
              color={"#0c0c0d"}
              borderRadius={"10rem"}
              onClick={() => counter.increment()}
            >
              +
            </Button>
          </div>
          <div className="shop-category-item-cart">
            <Button
              width={"100%"}
              backgroundColor={"#eaedf1"}
              _hover={{
                backgroundColor: "#4cbb17",
                color: "#fff",
              }}
              color={"#0c0c0d"}
              borderRadius={"5rem"}
              onClick={() => console.log(counter.value)}
            >
              <Icon as={FaCartPlus} />
            </Button>
          </div>
        </div>
        <div className="shop-category-item-product-waranty">
          <Text fontSize="md">GARANCIJA: {dataCategory.garancija}</Text>
        </div>
      </div>
    </div>
  ) : (
    <div className="shop-category-item-wrapper">
      <div className="shop-category-item-container">
        <div className="shop-category-item-image">
          {/* Slika proizvoda */}
          <div className="shop-category-item-image-box">
            <Image
              width={150}
              height={150}
              alt="product-image"
              src={"/T1.png"}
            />
          </div>
        </div>
        <div className="shop-category-item-product-info">
          <Text fontSize={"md"} color={"#5f5f5f"}>
            {dataAll.id}
          </Text>{" "}
          {/* ID proizvoda */}
          <div className="shop-category-item-product-info-title">
            <Text color={"#0c0c0d"} fontSize={"lg"}>
              {truncate(dataAll.naslov, 80)}
            </Text>
          </div>
          {/* Naslov proizvoda */}
          <div className="shop-category-item-product-info-price">
            <Text
              textAlign={"center"}
              fontSize={"4xl"}
              fontWeight={"bold"}
              textColor={"#0c0c0d"}
            >
              {dataAll.cijena}
            </Text>
            <Text
              width={"100%"}
              alignSelf={"flex-start"}
              justifySelf={"flex-start"}
              fontSize={"md"}
              fontWeight="bold"
            >
              KM
            </Text>
          </div>
          {/* Cijena proizvoda */}
        </div>
        <div className="shop-category-item-options">
          <div className="shop-category-item-options-counter">
            <Button
              _hover={{
                backgroundColor: "#4cbb17",
                color: "#fff",
              }}
              width="35px"
              height="35px"
              color={"#0c0c0d"}
              borderRadius={"10rem"}
              backgroundColor={"#eaedf1"}
              onClick={() => counter.decrement()}
            >
              -
            </Button>
            <Text fontSize={"sm"} color={"#0c0c0d"} fontWeight="bold">
              {counter.value}
            </Text>
            <Button
              width="35px"
              height="35px"
              _hover={{
                backgroundColor: "#4cbb17",
                color: "#fff",
              }}
              backgroundColor={"#eaedf1"}
              color={"#0c0c0d"}
              borderRadius={"10rem"}
              onClick={() => counter.increment()}
            >
              +
            </Button>
          </div>
          <div className="shop-category-item-cart">
            <Button
              width={"100%"}
              backgroundColor={"#eaedf1"}
              _hover={{
                backgroundColor: "#4cbb17",
                color: "#fff",
              }}
              color={"#0c0c0d"}
              borderRadius={"5rem"}
              onClick={() => console.log(counter.value)}
            >
              <Icon as={FaCartPlus} />
            </Button>
          </div>
        </div>
        <div className="shop-category-item-product-waranty">
          <Text fontSize="md">GARANCIJA: {dataAll.garancija}</Text>
        </div>
      </div>
    </div>
  );
}

export default ShopCategoryItem;
