import { Button, Collapse, Text, Icon, Box } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaShoppingBasket, FaTimes, FaTrash, FaTrashAlt } from "react-icons/fa";
import { useGlobalContext } from "../../context/GlobalContext";
import { formatPrice } from "../../helpers/formatPrice";
import EmptyCart from "./EmptyCart";

function CartComponent({ isCart }) {
  const { cart, clearCart, closeCart, removeCartItem, total, resetOrder } =
    useGlobalContext();
  // const [sums, setSums] = useState([]);

  // const updateTotal = () => {
  //   const total = sums?.reduce((currSum, nextSum) => currSum + nextSum, 0);
  //   const formated = Number(parseFloat(total).toFixed(2)).toLocaleString(
  //     "en-US",
  //     {
  //       minimumFractionDigits: 2,
  //       maximumFractionDigits: 2,
  //     }
  //   );

  //   return formated;
  // };
  // useEffect(() => {
  //   const getPrices = () => {
  //     const prices = cart.map(c => {
  //       return c?.product?.akcija
  //         ? c?.qty * c?.product?.akcija
  //         : c?.qty * c?.product?.cijena;
  //     });

  //     return setSums(prices);
  //   };

  //   getPrices();
  // }, [cart]);

  return (
    <div className="cart-component-wrapper" onMouseLeave={() => closeCart()}>
      <Collapse in={isCart}>
        <div className="cart-component-header">
          <Text fontSize={"2xl"}>Korpa</Text>
          <div className="cart-component-delete-all">
            {cart?.length !== 0 && (
              <Button
                className="cart-component-delete-all-btn"
                borderRadius={"100%"}
                onClick={() => {
                  clearCart();
                  resetOrder();
                }}
                _hover={{
                  backgroundColor: "#4CBB17",
                  color: "#fff",
                  transition: "200ms ease-in",
                }}
              >
                <Icon
                  as={FaTrashAlt}
                  disabled={cart?.length !== 0 ? false : true}
                />
              </Button>
            )}
          </div>
        </div>
        <div className="cart-component-body">
          {cart?.length === 0 && <EmptyCart />}
          {cart?.length > 0 &&
            cart?.map((item, index, arr) => {
              return (
                <div className="cart-item-wrapper" key={item?.product?.id}>
                  <div className="cart-item-image">
                    <Image
                      width={125}
                      height={125}
                      // fill
                      src="/static/T1.png"
                      alt="product"
                    />
                  </div>
                  <div className="cart-item-content">
                    <Link href={`/${item?.category}/${item?.product?.id}`}>
                      <Text
                        fontWeight={"bold"}
                        fontSize={"md"}
                        _hover={{ color: "#4CBB17", transition: "200ms ease" }}
                      >
                        {item?.product?.naslov}
                      </Text>
                    </Link>

                    <div className="cart-item-content-qty">
                      <Text fontSize={"md"}>
                        {item?.qty} X{" "}
                        {item?.product?.akcija
                          ? formatPrice(item?.product?.akcija)
                          : formatPrice(item?.product?.cijena)}
                      </Text>
                      <div className="cart-item-qty-total">
                        <Text fontSize={"md"} fontWeight="light ">
                          Ukupno:{" "}
                        </Text>
                        <span className="cart-component-footer-price">
                          <Text>
                            {item?.product?.akcija
                              ? formatPrice(item?.qty * item?.product?.akcija)
                              : formatPrice(item?.qty * item?.product?.cijena)}
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
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="cart-item-delete">
                    <Icon
                      as={FaTimes}
                      onClick={() => {
                        if (arr?.length === 1) {
                          removeCartItem(item?.product?.id);
                          resetOrder();
                        }
                        removeCartItem(item?.product?.id);
                      }}
                    />
                  </div>
                </div>
              );
            })}
        </div>
        <Box
          className="cart-component-footer"
          display={cart?.length === 0 ? "none" : "block"}
        >
          <div className="cart-component-footer-total">
            <Text fontSize={"3xl"} fontWeight="bold">
              Ukupno:
            </Text>
            <span className="cart-component-footer-price">
              <Text fontSize={"3xl"} fontWeight="bold">
                {total}
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
            </span>
          </div>

          <Link href={"/korpa"}>
            <Button
              _hover={{
                backgroundColor: "#4CBB1799",
              }}
              _active={{
                backgroundColor: "#4CBB17",
              }}
              backgroundColor={"#4CBB17"}
              color={"#fff"}
              width="100%"
              type={"button"}
              display="flex"
              borderRadius={"15rem"}
            >
              Vidi korpu
            </Button>
          </Link>
        </Box>
      </Collapse>
    </div>
  );
}

export default CartComponent;
