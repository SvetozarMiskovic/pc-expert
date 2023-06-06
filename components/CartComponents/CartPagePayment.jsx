import { Text } from "@chakra-ui/react";
import React from "react";
import { useGlobalContext } from "../../context/GlobalContext";
import Image from "next/image";
import { formatPrice } from "../../helpers/formatPrice";
import EmptyCart from "./EmptyCart";

function CartPagePayment() {
  const { cart, order } = useGlobalContext();

  return (
    <div className="cart-page-payment-wrapper">
      {cart?.length === 0 && <EmptyCart />}
      {cart?.length !== 0 && (
        <div className="cart-page-payment-content">
          <div className="cart-page-payment-delivery">
            <Text fontSize="2xl" fontWeight={"bold"}>
              Informacije o primaocu
            </Text>
            <div className="cart-page-payment-delivery-info">
              <div className="cart-page-payment-info-field">
                <Text fontSize="xl" fontWeight="bold">
                  Ime i prezime
                </Text>
                <Text fontSize="lg">{order?.ime_i_prezime}</Text>
              </div>
              <div className="cart-page-payment-info-field">
                <Text fontSize="xl" fontWeight="bold">
                  Kontakt email
                </Text>
                <Text fontSize="lg">{order?.email}</Text>
              </div>
              <div className="cart-page-payment-info-field">
                <Text fontSize="xl" fontWeight="bold">
                  Broj telefona
                </Text>
                <Text fontSize="lg">{order?.broj_telefona}</Text>
              </div>
              <div className="cart-page-payment-info-field">
                <Text fontSize="xl" fontWeight="bold">
                  Adresa
                </Text>
                <Text fontSize="lg">
                  {order?.adresa
                    ? order?.adresa_2
                      ? order?.adresa_2
                      : order?.adresa
                    : order?.adresa_2}
                </Text>
              </div>
              <div className="cart-page-payment-info-field">
                <Text fontSize="xl" fontWeight="bold">
                  Ulica
                </Text>
                {order?.ulica && <Text fontSize="lg">{order?.ulica}</Text>}
                {!order?.ulica && (
                  <Text fontSize="lg" fontStyle={"italic"} color={"red"}>
                    NIJE UNESENO
                  </Text>
                )}
              </div>
              <div className="cart-page-payment-info-field">
                <Text fontSize="xl" fontWeight="bold">
                  Grad
                </Text>
                {order?.grad && <Text fontSize="lg">{order?.grad}</Text>}
                {!order?.grad && (
                  <Text fontSize="lg" fontStyle={"italic"} color={"red"}>
                    NIJE UNESENO
                  </Text>
                )}
              </div>
              <div className="cart-page-payment-info-field">
                <Text fontSize="xl" fontWeight="bold">
                  Poštanski broj
                </Text>
                {order?.postanski_broj && (
                  <Text fontSize="lg">{order?.postanski_broj}</Text>
                )}
                {!order?.postanski_broj && (
                  <Text fontSize="lg" fontStyle={"italic"} color={"red"}>
                    NIJE UNESENO
                  </Text>
                )}
              </div>

              <div className="cart-page-payment-info-field">
                <Text fontSize="xl" fontWeight="bold">
                  Napomena
                </Text>
                {order?.napomena && (
                  <Text fontSize="lg" wordBreak={"break-all"}>
                    {order?.napomena}
                  </Text>
                )}
                {!order?.napomena && (
                  <Text fontSize="lg" fontStyle={"italic"} color={"red"}>
                    NIJE UNESENO
                  </Text>
                )}
              </div>
            </div>
          </div>
          <div className="cart-page-payment-cart-items">
            <Text fontSize={"2xl"} fontWeight={"bold"} marginBottom={"1rem"}>
              Naručeni artikli
            </Text>
            <div className="cart-page-payment-cart-item-list">
              {cart?.map(item => {
                return (
                  <div
                    className="cart-page-payment-cart-item"
                    key={item?.product.id}
                  >
                    <div className="cart-page-payment-cart-item-image">
                      <Image
                        width={125}
                        height={125}
                        src={"/static/T1.png"}
                        alt="proizvod"
                      />
                    </div>
                    <div className="cart-page-payment-cart-item-title">
                      <Text fontSize="xl" fontWeight={"bold"}>
                        {item?.product?.naslov}
                      </Text>
                    </div>
                    <div className="cart-page-payment-cart-item-price">
                      <Text fontSize="xl">
                        {item?.qty} X{" "}
                        {item?.product?.akcija
                          ? formatPrice(item?.product?.akcija)
                          : formatPrice(item?.product?.cijena)}
                      </Text>
                    </div>
                    <div className="cart-page-payment-cart-item-total">
                      <Text fontSize={"xl"}>Ukupno:</Text>
                      <Text fontSize="xl" fontWeight={"bold"}>
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
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPagePayment;
