import Image from "next/image";
import React from "react";
import { Text, Button, Divider } from "@chakra-ui/react";
import { useCounter } from "@chakra-ui/counter";
import { useShopContext } from "../../context/ShopContext";

function ShopCategoryItem({ dataCategory, dataAll }) {
  const counter = useCounter({
    max: 20,
    min: 1,
    step: 1,
    defaultValue: 1,
  });

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
          <Text fontSize={"md"}>ID: {dataCategory.id}</Text>{" "}
          {/* ID proizvoda */}
          {/* <Divider borderColor={"#5f5f5f"} /> */}
          <Text
            height={"100%"}
            color={"#5f5f5f"}
            fontSize={"lg"}
            fontWeight={"bold"}
          >
            {!dataCategory.model ? dataCategory.detalji : dataCategory.model}
          </Text>
          {/* Naslov proizvoda */}
          <div>
            {/* Specifikacije ako ih ima */}
            <Text color={"#5f5f5f"}>{dataCategory.velicina_ekrana}</Text>
            <Text color={"#5f5f5f"}>{dataCategory?.tip_procesora}</Text>
          </div>
          <Text fontSize={"3xl"} textColor={"#f89a20"}>
            Cijena: {dataCategory.cijena}
          </Text>
          {/* Cijena proizvoda */}
        </div>
        <div className="shop-category-item-options">
          <div className="shop-category-item-options-counter">
            <Button
              _hover={{
                backgroundColor: "#f89a20",
                color: "#fff",
              }}
              color={"#5f5f5f"}
              borderRadius={"10rem"}
              backgroundColor={"#eaedf1"}
              onClick={() => counter.decrement()}
            >
              -
            </Button>
            <Text fontSize={"md"} color="#5f5f5f" fontWeight="bold">
              {counter.value}
            </Text>
            <Button
              _hover={{
                backgroundColor: "#f89a20",
                color: "#fff",
              }}
              backgroundColor={"#eaedf1"}
              color={"#5f5f5f"}
              borderRadius={"10rem"}
              onClick={() => counter.increment()}
            >
              +
            </Button>
          </div>
          <Button
            backgroundColor={"#eaedf1"}
            _hover={{
              backgroundColor: "#f89a20",
              color: "#fff",
            }}
            color={"#5f5f5f"}
            width={"100%"}
            borderRadius={"5rem"}
          >
            Dodaj
          </Button>
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
          <Text fontSize={"md"}>ID: {dataAll.id}</Text> {/* ID proizvoda */}
          {/* <Divider borderColor={"#5f5f5f"} /> */}
          <Text
            height={"100%"}
            color={"#5f5f5f"}
            fontSize={"lg"}
            fontWeight={"bold"}
          >
            {!dataAll.model ? dataAll.detalji : dataAll.model}
          </Text>
          {/* Naslov proizvoda */}
          <div>
            {/* Specifikacije ako ih ima */}
            <Text color={"#5f5f5f"}>{dataAll.velicina_ekrana}</Text>
            <Text color={"#5f5f5f"}>{dataAll?.tip_procesora}</Text>
          </div>
          <Text fontSize={"3xl"} textColor={"#f89a20"}>
            Cijena: {dataAll.cijena}
          </Text>
          {/* Cijena proizvoda */}
        </div>
        <div className="shop-category-item-options">
          <div className="shop-category-item-options-counter">
            <Button
              _hover={{
                backgroundColor: "#f89a20",
                color: "#fff",
              }}
              color={"#5f5f5f"}
              borderRadius={"10rem"}
              backgroundColor={"#eaedf1"}
              onClick={() => counter.decrement()}
            >
              -
            </Button>
            <Text fontSize={"md"} color="#5f5f5f" fontWeight="bold">
              {counter.value}
            </Text>
            <Button
              _hover={{
                backgroundColor: "#f89a20",
                color: "#fff",
              }}
              backgroundColor={"#eaedf1"}
              color={"#5f5f5f"}
              borderRadius={"10rem"}
              onClick={() => counter.increment()}
            >
              +
            </Button>
          </div>
          <Button
            backgroundColor={"#eaedf1"}
            _hover={{
              backgroundColor: "#f89a20",
              color: "#fff",
            }}
            color={"#5f5f5f"}
            width={"100%"}
            borderRadius={"5rem"}
          >
            Dodaj
          </Button>
        </div>
        <div className="shop-category-item-product-waranty">
          <Text fontSize="md">GARANCIJA: {dataAll.garancija}</Text>
        </div>
      </div>
    </div>
  );
}

export default ShopCategoryItem;
