import {
  Button,
  Checkbox,
  CheckboxGroup,
  Divider,
  Icon,
  Radio,
  RadioGroup,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import {
  FaShoppingBasket,
  FaTimes,
  FaTrashAlt,
  FaInfoCircle,
  FaMoneyCheck,
  FaArrowAltCircleRight,
  FaSpellCheck,
  FaArrowAltCircleLeft,
  FaTruckLoading,
} from "react-icons/fa";
import { useGlobalContext } from "../../context/GlobalContext";
import { formatPrice } from "../../helpers/formatPrice";
import Image from "next/image";
import Link from "next/link";
import CartPageInfo from "./CartPageInfo";
import EmptyCart from "./EmptyCart";
import { useRouter } from "next/router";
import CartPagePayment from "./CartPagePayment";
import { toast } from "react-toastify";
import { createOrder } from "../../fetchFunctions/createOrder";
import { useAuthContext } from "../../context/AuthContext";
import { createId } from "@paralleldrive/cuid2";

function CartPage() {
  const [steps, setSteps] = useState(1);
  const [cardPay, setCardPay] = useState(false);
  const router = useRouter();
  const {
    cart,
    removeCartItem,
    clearCart,
    total,
    order,
    resetOrder,
    addCartToOrder,
    updateOrder,
    updateSentOrder,
  } = useGlobalContext();
  const { isLoged } = useAuthContext();
  const validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const updateCardPay = () => {
    setCardPay(prevState => !prevState);
  };
  const nextStep = () => {
    setSteps(prevState => {
      if (prevState >= 3) return 3;
      return prevState + 1;
    });
  };

  const previousStep = () => {
    setSteps(prevState => {
      if (prevState <= 1) return 1;
      return prevState - 1;
    });
  };

  return (
    <div className="cart-page-component">
      <div className="cart-page-component-header">
        <Icon as={FaShoppingBasket} fontSize={"4xl"} color={"#007fff"} />
        <Text fontSize={"4xl"} fontWeight={"bold"}>
          Korpa
        </Text>
      </div>
      <div className="cart-page-component-body">
        {steps === 1 && (
          <div className="cart-page-component-products">
            {cart?.length === 0 && <EmptyCart />}
            {cart?.map((item, index, arr) => {
              return (
                <div className="cart-page-item-wrapper" key={item?.product?.id}>
                  <div className="cart-page-item-image">
                    <Image
                      width={150}
                      height={150}
                      // sizes="(max-width: 768px) 100vw,
                      // (max-width: 1200px) 50vw,
                      // 33vw"
                      // fill
                      src="/static/T1.png"
                      alt="product"
                    />
                  </div>
                  <div className="cart-page-item-content">
                    <Link href={`/${item?.category}/${item?.product?.id}`}>
                      <Text
                        fontWeight={"bold"}
                        fontSize={"xl"}
                        transition={"200ms ease"}
                        _hover={{ color: "#007fff", transition: "200ms ease" }}
                      >
                        {item?.product?.naslov}
                      </Text>
                    </Link>
                    <Text color="#777" fontStyle={"italic"}>
                      {item?.product.id}
                    </Text>

                    <div className="cart-page-item-content-qty">
                      <Text
                        fontSize={"xl"}
                        color={"#0c0c0d"}
                        fontWeight={"bold"}
                      >
                        {item?.qty} X{" "}
                        {item?.product?.akcija
                          ? formatPrice(item?.product?.akcija)
                          : formatPrice(item?.product?.cijena)}
                      </Text>
                      <div className="cart-page-item-qty-total">
                        <Text fontSize={"xl"} fontWeight="light">
                          Ukupno:{" "}
                        </Text>
                        <span className="cart-page-component-footer-price">
                          <Text fontSize={"2xl"} fontWeight={"bold"}>
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
                  <div className="cart-page-item-delete">
                    <div
                      className="cart-page-item-delte-border"
                      onClick={() => {
                        if (arr?.length === 1) {
                          removeCartItem(item?.product?.id);
                          resetOrder();
                        }

                        removeCartItem(item?.product?.id);
                      }}
                    >
                      <Icon
                        // padding={"0.8rem"}
                        // background={"#fff"}
                        // color={"black"}
                        as={FaTrashAlt}
                      />
                    </div>
                  </div>
                  {/* <div style={{ width: "100%" }}></div> */}
                </div>
              );
            })}
          </div>
        )}
        {steps === 2 && <CartPageInfo />}
        {steps === 3 && <CartPagePayment />}
        {cart?.length !== 0 && (
          <div className="cart-page-component-sidebar">
            <div className="cart-page-component-sidebar-comps">
              <div className="cart-page-component-sidebar-comps-steps">
                <div
                  className={
                    steps === 1
                      ? "cart-page-component-sidebar-comps-step-active"
                      : "cart-page-component-sidebar-comps-step"
                  }
                >
                  <div className="cart-page-component-sidebar-comps-step-icon">
                    <Icon as={FaShoppingBasket} fontSize={"xl"} />
                  </div>
                  <div className="cart-page-component-sidebar-comps-step-number">
                    <Text fontSize={"xl"}>01</Text>
                  </div>
                </div>
                <div
                  className={
                    steps === 2
                      ? "cart-page-component-sidebar-comps-step-active"
                      : "cart-page-component-sidebar-comps-step"
                  }
                >
                  <div className="cart-page-component-sidebar-comps-step-icon">
                    <Icon as={FaInfoCircle} fontSize={"xl"} />
                  </div>
                  <div className="cart-page-component-sidebar-comps-step-number">
                    <Text fontSize={"xl"}>02</Text>
                  </div>
                </div>
                <div
                  className={
                    steps === 3
                      ? "cart-page-component-sidebar-comps-step-active"
                      : "cart-page-component-sidebar-comps-step"
                  }
                >
                  <div className="cart-page-component-sidebar-comps-step-icon">
                    <Icon as={FaMoneyCheck} fontSize={"xl"} />
                  </div>
                  <div className="cart-page-component-sidebar-comps-step-number">
                    <Text fontSize={"xl"}>03</Text>
                  </div>
                </div>
              </div>
              <div className="cart-page-component-sidebar-comps-show">
                <Text
                  fontSize={"3xl"}
                  fontWeight={"bold"}
                  marginBottom={"1rem"}
                >
                  Ukupno
                </Text>
                <div className="cart-page-component-sidebar-receipt">
                  <div className="cart-page-component-sidebar-receipt-info">
                    <Text fontSize={"xl"} fontWeight={"bold"}>
                      Iznos korpe:
                    </Text>
                    <div
                      style={{
                        display: "flex",
                        gap: "0.3rem",
                      }}
                    >
                      <Text fontSize={"xl"} fontWeight={"bold"}>
                        {total}
                      </Text>

                      <Text
                        // width={"100%"}
                        alignSelf={"center"}
                        justifySelf={"flex-start"}
                        fontSize={"md"}
                        fontWeight="bold"
                      >
                        KM
                      </Text>
                    </div>
                  </div>
                  <div className="cart-page-component-sidebar-receipt-info">
                    <Text fontSize={"xl"} fontWeight={"bold"}>
                      Troškovi dostave:
                    </Text>
                    <div
                      style={{
                        display: "flex",
                        gap: "0.3rem",
                      }}
                    >
                      <Text
                        fontSize={"xl"}
                        fontWeight={"bold"}
                        fontStyle={"italic"}
                        color={"#007fff"}
                      >
                        BESPLATNA DOSTAVA
                      </Text>
                    </div>
                  </div>
                </div>

                <div className="cart-page-component-sidebar-comps-total">
                  <Text fontSize={"2xl"} fontWeight={"bold"}>
                    Za platiti:
                  </Text>
                  <div style={{ display: "flex", gap: "0.3rem" }}>
                    <Text fontSize={"2xl"} fontWeight={"bold"}>
                      {total}
                    </Text>
                    <Text
                      // width={"100%"}
                      alignSelf={"flex-start"}
                      justifySelf={"flex-start"}
                      fontSize={"md"}
                      fontWeight="bold"
                    >
                      KM
                    </Text>
                  </div>
                </div>
              </div>
              <div className="cart-page-component-sidebar-comps-operations">
                {steps === 1 && (
                  <>
                    <Button
                      borderRadius={"5rem"}
                      variant={"unstyled"}
                      onClick={() => nextStep()}
                      background={"#007fff"}
                      color={"#fff"}
                      _hover={{ background: "#007fff90" }}
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      gap={"0.5rem"}
                    >
                      <Icon fontSize={"xl"} as={FaArrowAltCircleRight} />
                      Nastavi sa narudžbom
                    </Button>
                    <Button
                      variant={"unstyled"}
                      borderRadius={"5rem"}
                      onClick={() => router.push("/shop")}
                      background={"#4cbb17"}
                      color={"#fff"}
                      _hover={{ background: "#4cbb1790" }}
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      gap={"0.5rem"}
                    >
                      <Icon fontSize={"xl"} as={FaShoppingBasket} />
                      Vrati se u shop
                    </Button>
                    <Button
                      variant={"unstyled"}
                      borderRadius={"5rem"}
                      onClick={() => {
                        clearCart();
                        resetOrder();
                      }}
                      background={"#eaedf1"}
                      _hover={{ background: "#c4c4c490" }}
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      gap={"0.5rem"}
                    >
                      <Icon fontSize={"xl"} as={FaTrashAlt} />
                      Isprazni korpu
                    </Button>
                  </>
                )}
                {steps === 2 && (
                  <>
                    <Button
                      borderRadius={"5rem"}
                      variant={"unstyled"}
                      onClick={() => {
                        if (
                          (order?.ime_i_prezime &&
                            order?.broj_telefona &&
                            order?.email &&
                            order?.adresa) ||
                          (order?.ime_i_prezime &&
                            order?.broj_telefona &&
                            order?.email &&
                            order?.adresa_2)
                        ) {
                          if (order?.email.match(validRegex)) {
                            nextStep();
                            updateOrder("id", createId());
                            addCartToOrder(cart);
                          } else {
                            toast("Email nije dobro unesen!", {
                              progressStyle: { background: "red" },
                              bodyStyle: {
                                fontWeight: "bold",
                                color: "#0f0f0f",
                              },
                              autoClose: 7000,
                            });
                          }
                        } else {
                          toast(
                            "Ime i prezime, email, broj i minimum jedna adresa moraju biti uneseni!",
                            {
                              progressStyle: { background: "red" },
                              bodyStyle: {
                                fontWeight: "bold",
                                color: "#0f0f0f",
                              },
                              autoClose: 7000,
                            }
                          );
                        }
                      }}
                      background={"#007fff"}
                      color={"#fff"}
                      _hover={{ background: "#007fff90" }}
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      gap={"0.5rem"}
                    >
                      <Icon fontSize={"xl"} as={FaSpellCheck} />
                      Pregledaj i dovrši narudžbu
                    </Button>
                    <Button
                      variant={"unstyled"}
                      borderRadius={"5rem"}
                      onClick={() => previousStep()}
                      background={"#4cbb17"}
                      _hover={{ background: "#4cbb1790" }}
                      color={"#fff"}
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      gap={"0.5rem"}
                    >
                      <Icon fontSize={"xl"} as={FaArrowAltCircleLeft} />
                      Vrati se u korpu
                    </Button>
                  </>
                )}
                {steps === 3 && (
                  <>
                    <Checkbox
                      onChange={() => updateCardPay()}
                      isChecked={cardPay}
                    >
                      <Text fontSize={"2xl"}>Plati karticom</Text>
                    </Checkbox>
                    <Button
                      borderRadius={"5rem"}
                      variant={"unstyled"}
                      isDisabled={cardPay}
                      onClick={async () => {
                        console.log("NARUCUJEM", order);
                        const payload = { order, isUser: isLoged, total };
                        const res = await createOrder(payload);
                        if (res?.data?.created) {
                          router.push("/info");
                          toast(res?.data.msg, {
                            progressStyle: { background: "#4cbb17" },
                            // icon: false,
                            bodyStyle: { fontWeight: "bold", color: "#0f0f0f" },
                            autoClose: 7000,
                          });
                          resetOrder();
                          clearCart();
                          updateSentOrder(res?.data?.created);
                        } else {
                          toast(res?.data?.msg, {
                            bodyStyle: { fontWeight: "bold", color: "#0f0f0f" },
                            autoClose: 7000,
                          });
                        }
                        console.log("ozgovor", res);
                      }}
                      background={"#007fff"}
                      color={"#fff"}
                      _hover={{ background: "#007fff90" }}
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      gap={"0.5rem"}
                    >
                      <Icon fontSize={"xl"} as={FaTruckLoading} />
                      Plati prilikom preuzimanja
                    </Button>
                    <Button
                      borderRadius={"5rem"}
                      variant={"unstyled"}
                      isDisabled={!cardPay}
                      background={"#007fff"}
                      color={"#fff"}
                      _hover={{ background: "#007fff90" }}
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      gap={"0.5rem"}
                    >
                      <Icon fontSize={"xl"} as={FaMoneyCheck} />
                      Plati karticom
                    </Button>

                    <Button
                      variant={"unstyled"}
                      borderRadius={"5rem"}
                      onClick={() => previousStep()}
                      background={"#4cbb17"}
                      _hover={{ background: "#4cbb1790" }}
                      color={"#fff"}
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      gap={"0.5rem"}
                    >
                      <Icon fontSize={"xl"} as={FaArrowAltCircleLeft} />
                      Uredi podatke
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartPage;
