import Image from "next/image";
import React, { useState } from "react";
import {
  Text,
  Button,
  Icon,
  NumberInput,
  NumberInputField,
} from "@chakra-ui/react";

import { FaCartPlus } from "react-icons/fa";
import Link from "next/link";
import { useGlobalContext } from "../../context/GlobalContext";
import { formatPrice } from "../../helpers/formatPrice";
function ShopCategoryItem({ dataCategory, dataAll, category }) {
  const [counter, setCounter] = useState(1);
  const { updateCart } = useGlobalContext();
  const maxCounter = 50;

  const increment = () => {
    setCounter(prevState => {
      if (prevState >= 50) return 50;
      return prevState + 1;
    });
  };
  const decrement = () => {
    setCounter(prevState => {
      if (prevState === 1) return 1;
      return prevState - 1;
    });
  };

  const onChange = e => {
    setCounter(prevState => {
      if (prevState > 50 || parseInt(e.target.value) > 50) return 50;
      if (parseInt(e.target.value) === 0) return 1;
      return parseInt(e.target.value);
    });
  };
  function truncate(str, max) {
    const val = str ? str.toString() : "Nema naslova";

    if (val.length > max) {
      return val.slice(0, max) + "...";
    } else return val;
  }

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
              src={"/static/T1.png"}
            />
          </div>
        </div>
        <div className="shop-category-item-product-info">
          <div className="shop-category-item-product-info-title">
            <Link href={`/${category}/${dataCategory?.id}`}>
              <Text
                _hover={{ color: "#4cbb17" }}
                transition={"200ms ease-in"}
                fontWeight="bold"
                color={"#0c0c0d"}
                fontSize={"lg"}
              >
                {truncate(dataCategory?.naslov, 80)}
              </Text>
            </Link>
          </div>
          {/* Naslov proizvoda */}

          <div className="shop-category-item-product-info-price">
            <Text
              textAlign={"center"}
              fontSize={"4xl"}
              fontWeight={"bold"}
              textColor={"#0c0c0d"}
            >
              {dataCategory?.akcija
                ? formatPrice(dataCategory?.akcija)
                : formatPrice(dataCategory?.cijena)}
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
              onClick={() => decrement()}
            >
              -
            </Button>

            <div className="shop-category-item-options-counter-input">
              <input
                onBlur={e => {
                  if (e.target.value === "") setCounter(1);
                }}
                max={50}
                min={1}
                value={counter}
                onChange={e => {
                  onChange(e);
                }}
                type="number"
              />
            </div>
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
              onClick={() => increment()}
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
              onClick={() => {
                const payload = {
                  qty: counter,
                  product: dataCategory,
                  category: category,
                };

                updateCart(payload);
              }}
            >
              <Icon as={FaCartPlus} />
            </Button>
          </div>
        </div>
        <div className="shop-category-item-product-cards">
          <div className="shop-category-item-product-waranty">
            <Text fontSize="md">GARANCIJA: {dataCategory.garancija}</Text>
          </div>
          {dataCategory?.akcija && (
            <div className="shop-category-item-product-sale">
              <Text fontSize="md">AKCIJA</Text>
            </div>
          )}
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
              src={"/static/T1.png"}
            />
          </div>
        </div>
        <div className="shop-category-item-product-info">
          <div className="shop-category-item-product-info-title">
            <Link href={`/${category}/${dataAll?.id}`}>
              <Text
                color={"#0c0c0d"}
                fontWeight="bold"
                fontSize={"lg"}
                _hover={{ color: "#4cbb17" }}
                transition={"200ms ease-in"}
              >
                {truncate(dataAll.naslov, 80)}
              </Text>
            </Link>
          </div>
          {/* Naslov proizvoda */}
          <div className="shop-category-item-product-info-price">
            <Text
              textAlign={"center"}
              fontSize={"4xl"}
              fontWeight={"bold"}
              textColor={"#0c0c0d"}
            >
              {dataAll?.akcija
                ? formatPrice(dataAll?.akcija)
                : formatPrice(dataAll?.cijena)}
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
              onClick={() => decrement()}
            >
              -
            </Button>

            <div className="shop-category-item-options-counter-input">
              <input
                onBlur={e => {
                  if (e.target.value === "") setCounter(1);
                }}
                max={50}
                min={1}
                value={counter}
                onChange={e => {
                  onChange(e);
                }}
                type="number"
              />
            </div>
            {/* <Text fontSize={"md"} color={"#0c0c0d"} fontWeight="bold">
              {counter.value}
            </Text> */}
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
              onClick={() => increment()}
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
              onClick={() => {
                const payload = {
                  qty: counter,
                  product: dataAll,
                  category: category,
                };

                updateCart(payload);
              }}
            >
              <Icon as={FaCartPlus} />
            </Button>
          </div>
        </div>
        <div className="shop-category-item-product-cards">
          <div className="shop-category-item-product-waranty">
            <Text fontSize="md">GARANCIJA: {dataAll.garancija}</Text>
          </div>
          {dataAll?.akcija && (
            <div className="shop-category-item-product-sale">
              <Text fontSize="md">AKCIJA</Text>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ShopCategoryItem;
