import { Button, Icon, Text } from "@chakra-ui/react";
import Image from "next/image";
import React, { useEffect } from "react";
import Confetti from "react-confetti";
import { useGlobalContext } from "../../context/GlobalContext";
import { formatPrice } from "../../helpers/formatPrice";
import { useRouter } from "next/router";
import { FaClipboard, FaHome, FaShoppingBasket } from "react-icons/fa";
function FinishedOrder() {
  const { sentOrder, resetSentOrder } = useGlobalContext();
  const router = useRouter();

  useEffect(() => {
    console.log(router, router?.components?.["/korpa"]?.route);
    if (router?.components?.["/korpa"]?.route !== "/korpa") {
      router.push("/");
    }

    console.log("SAD MORE");
  }, []);

  function capitalizeFirstLetter(string) {
    return (
      String(string)?.charAt(0).toUpperCase() + String(string)?.slice(1) + ":"
    );
  }
  function capitalizeFilterValue(string) {
    return String(string)?.charAt(0).toUpperCase() + String(string)?.slice(1);
  }

  const removeSpace = string => {
    return string.split("_").join(" ");
  };

  return (
    <div className="finished-order-wrapper">
      <Confetti
        width={window.innerWidth}
        height={window.innerHeight}
        recycle={false}
        numberOfPieces={3000}
      />
      <div className="finished-order-container">
        <div className="finished-order-header">
          <div className="finished-order-header-image">
            <Image src={"/static/T1.png"} width={250} height={250} alt="logo" />
            <Text
              fontSize={"4xl"}
              fontWeight={"bold"}
              color={"#0f0f0f"}
              marginBottom={"1rem"}
              marginTop={"1rem"}
            >
              Hvala vam na povjerenju! Vaš PC Expert tim!
            </Text>

            <div className="finished-order-header-image-options">
              {/* <Button
                fontSize={"2xl"}
                background={"#4cbb17"}
                padding={"1.5rem"}
                color={"#fff"}
                _hover={{ background: "#4cbb1790" }}
                display={"flex"}
                gap={"0.5rem"}
                onClick={async () => {
                  const copyText = `
                  - Potvrda narudžbe - 
                \nID: ${sentOrder?.id},
                  Datum narudžbe: ${sentOrder?.datum_narudzbe}
                  `;
                  await navigator.clipboard.writeText(JSON.stringify(copyText));
                  console.log("Kopirao!");
                }}
              >
                <Icon as={FaClipboard} />
                Kopiraj narudžbu
              </Button> */}
              <Button
                fontSize={"2xl"}
                background={"#007fff"}
                padding={"1.5rem"}
                color={"#fff"}
                _hover={{ background: "#007fff90" }}
                display={"flex"}
                gap={"0.5rem"}
                onClick={() => {
                  router.push("/");
                }}
              >
                <Icon as={FaHome} />
                Idi na početnu stranu
              </Button>
              <Button
                fontSize={"2xl"}
                background={"#4cbb17"}
                padding={"1.5rem"}
                color={"#fff"}
                _hover={{ background: "#4cbb1790" }}
                display={"flex"}
                gap={"0.5rem"}
                onClick={() => {
                  router.push("/shop");
                }}
              >
                <Icon as={FaShoppingBasket} />
                Idi u shop
              </Button>
            </div>
            <Text
              fontSize={"2xl"}
              color={"red"}
              fontWeight={"bold"}
              textAlign={"center"}
            >
              {
                "Iako su informacije poslane na email, savjetujemo da zapišete ID,Cijenu i Datum narudžbe, ili da uslikate ekran i priložite sliku u slučaju tehničkih problema!"
              }
            </Text>
          </div>

          <Text
            fontSize={"4xl"}
            fontWeight={"bold"}
            color={"#0f0f0f"}
            marginTop={"2rem"}
          >
            Potvrda narudžbe
          </Text>
        </div>
        <div className="finished-order-body">
          <div className="finished-order-body-info">
            {Object.keys(sentOrder)?.map(val => {
              if (val === "ukupna_cijena")
                return (
                  <div className="finished-order-body-single-info" key={val}>
                    <Text fontWeight={"bold"} fontSize={"3xl"}>
                      {capitalizeFirstLetter(removeSpace(val))}
                    </Text>
                    <Text fontSize={"3xl"} fontStyle={"italic"}>
                      {sentOrder[val] !== "" && formatPrice(sentOrder[val])} KM
                    </Text>
                  </div>
                );

              if (val !== "napomena" && val !== "artikli")
                return (
                  <div className="finished-order-body-single-info" key={val}>
                    <Text fontWeight={"bold"} fontSize={"3xl"}>
                      {capitalizeFirstLetter(removeSpace(val))}
                    </Text>

                    {sentOrder[val] !== "" && sentOrder[val] !== null ? (
                      <Text fontSize={"3xl"} fontStyle={"italic"}>
                        {sentOrder[val]}
                      </Text>
                    ) : (
                      <Text
                        color="red"
                        fontWeight={"bold"}
                        fontSize={"3xl"}
                        fontStyle={"italic"}
                      >
                        NIJE UNESENO
                      </Text>
                    )}
                  </div>
                );
            })}
          </div>
          <div className="finished-order-body-details">
            <div className="finished-order-body-details-note">
              {Object.keys(sentOrder)?.map(val => {
                if (val === "napomena")
                  return (
                    <div className="finished-order-body-single-info" key={val}>
                      <Text
                        fontSize={"3xl"}
                        fontWeight={"bold"}
                        color={"#0c0c0c"}
                      >
                        {capitalizeFirstLetter(removeSpace(val))}
                      </Text>
                      {sentOrder[val] ? (
                        <Text
                          fontSize={"3xl"}
                          fontStyle={"italic"}
                          color={"#0c0c0c"}
                        >
                          {sentOrder[val]}
                        </Text>
                      ) : (
                        <Text
                          fontSize={"3xl"}
                          fontStyle={"italic"}
                          color={"red"}
                          fontWeight={"bold"}
                        >
                          NIJE UNESENO
                        </Text>
                      )}
                    </div>
                  );
              })}
            </div>
            <div className="finished-order-body-details-items">
              {Object.keys(sentOrder)?.map(val => {
                if (val === "artikli")
                  return (
                    <div className="finished-order-body-single-info" key={val}>
                      <Text
                        fontSize={"3xl"}
                        fontWeight={"bold"}
                        color={"#0c0c0c"}
                        marginBottom={"2rem"}
                      >
                        {capitalizeFirstLetter(removeSpace(val))}
                      </Text>
                      {JSON.parse(sentOrder?.artikli).map(obj => {
                        return (
                          <div
                            className="finished-order-body-single-info-item"
                            key={obj?.product?.id}
                          >
                            <div className="finished-order-body-single-info-image">
                              <Image
                                src="/static/laptop.png"
                                alt="produkt"
                                width={200}
                                height={200}
                              />
                            </div>
                            <div className="finished-order-body-single-info-text">
                              <div className="finished-order-body-single-info-text-title">
                                <Text
                                  fontSize={"3xl"}
                                  fontWeight={"bold"}
                                  color={"#0c0c0c"}
                                >
                                  {obj?.product?.naslov}
                                </Text>
                                <Text
                                  fontSize={"2xl"}
                                  // fontWeight={"bold"}
                                  fontStyle={"italic"}
                                  color={"#0c0c0c"}
                                >
                                  {obj?.product?.id}
                                </Text>
                              </div>
                              <div className="finished-order-body-single-info-text-qty">
                                <Text fontWeight={"bold"} fontSize={"3xl"}>
                                  {obj?.qty} X{" "}
                                  {formatPrice(obj?.product?.cijena)} KM
                                </Text>
                              </div>
                              <div className="finished-order-body-single-info-text-price">
                                <Text
                                  fontWeight={"bold"}
                                  fontSize={"3xl"}
                                  color={"#0c0c0c"}
                                >
                                  Ukupno:
                                </Text>
                                <Text
                                  fontSize={"3xl"}
                                  color={"#0c0c0c"}
                                  fontStyle={"italic"}
                                >
                                  {formatPrice(obj?.qty * obj?.product?.cijena)}{" "}
                                  KM
                                </Text>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FinishedOrder;
