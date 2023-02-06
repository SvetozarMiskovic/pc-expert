import { Button, Text, Icon } from "@chakra-ui/react";
import Image from "next/image";
import React, { useState } from "react";
import { FaCartPlus } from "react-icons/fa";
function ProductInfo({ data }) {
  const [counter, setCounter] = useState(1);
  const maxCounter = 50;

  const properties = Object.entries(data);

  const removeSpace = string => {
    return string.split("_").join(" ");
  };

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

  function capitalizeFirstLetter(string) {
    return string?.charAt(0).toUpperCase() + string?.slice(1);
  }
  return (
    <div className="product-info-component">
      <div className="product-info-component-main-part">
        <div className="product-info-component-main-image">
          <div className="product-info-component-main-image-holder">
            <Image width={250} height={250} src="/T1.png" alt="product-image" />
          </div>
          <div className="product-info-component-small-image-holder"></div>
        </div>
        <div className="product-info-component-main-information">
          <div className="produc-info-component-main-information-title">
            <Text fontSize={"3xl"} fontWeight="bold">
              {data?.naslov}
            </Text>
            <Text fontSize={"md"} color="#aaaaaa" fontWeight={"bold"}>
              {data?.id}
            </Text>
          </div>
          <div className="product-info-component-main-information-manufacturer">
            <Text fontSize={"xl"} fontWeight="bold">
              {data?.proizvodjac ? data?.proizvodjac : data?.detalji}
            </Text>
          </div>
          <div className="product-info-component-main-information-details">
            {data?.boja && (
              <div className="single-info">
                <Text fontWeight={"bold"} fontSize="lg">
                  Boja:
                </Text>
                <Text fontSize="md">{capitalizeFirstLetter(data?.boja)}</Text>
              </div>
            )}
            {data?.velicina_ekrana && (
              <div className="single-info">
                <Text fontWeight={"bold"} fontSize="lg">
                  Veličina ekrana:
                </Text>
                <Text fontSize="md">
                  {capitalizeFirstLetter(data?.velicina_ekrana)}
                </Text>
              </div>
            )}
            {data?.tip_ekrana && (
              <div className="single-info">
                <Text fontWeight={"bold"} fontSize="lg">
                  Tip ekrana:
                </Text>
                <Text fontSize="md">
                  {capitalizeFirstLetter(data?.tip_ekrana)}
                </Text>
              </div>
            )}
            {data?.rezolucija && (
              <div className="single-info">
                <Text fontWeight={"bold"} fontSize="lg">
                  Rezolucija:
                </Text>
                <Text fontSize="md">
                  {capitalizeFirstLetter(data?.rezolucija)}
                </Text>
              </div>
            )}
            {data?.refresh_rate && (
              <div className="single-info">
                <Text fontWeight={"bold"} fontSize="lg">
                  Frekvencija osvježavanja ekrana:
                </Text>
                <Text fontSize="md">
                  {capitalizeFirstLetter(data?.refresh_rate)}
                </Text>
              </div>
            )}
            {data?.model && (
              <div className="single-info">
                <Text fontWeight={"bold"} fontSize="lg">
                  Model:
                </Text>
                <Text fontSize="md" wordBreak={"break-all"}>
                  {capitalizeFirstLetter(data?.model)}
                </Text>
              </div>
            )}
            {data?.procesor && (
              <div className="single-info">
                <Text fontWeight={"bold"} fontSize="lg">
                  Procesor:
                </Text>
                <Text fontSize="md">
                  {capitalizeFirstLetter(data?.procesor)}
                </Text>
              </div>
            )}
            {data?.tip_procesora && (
              <div className="single-info">
                <Text fontWeight={"bold"} fontSize="lg">
                  Tip procesora:
                </Text>
                <Text fontSize="md">
                  {capitalizeFirstLetter(data?.tip_procesora)}
                </Text>
              </div>
            )}
            {data?.model_procesora && (
              <div className="single-info">
                <Text fontWeight={"bold"} fontSize="lg">
                  Model procesora:
                </Text>
                <Text fontSize="md">
                  {capitalizeFirstLetter(data?.model_procesora)}
                </Text>
              </div>
            )}
            {data?.brzina_procesora && (
              <div className="single-info">
                <Text fontWeight={"bold"} fontSize="lg">
                  Model grafičke:
                </Text>
                <Text fontSize="md">
                  {capitalizeFirstLetter(data?.brzina_procesora)}
                </Text>
              </div>
            )}
            {data?.ram && (
              <div className="single-info">
                <Text fontWeight={"bold"} fontSize="lg">
                  RAM:
                </Text>
                <Text fontSize="md">{capitalizeFirstLetter(data?.ram)}</Text>
              </div>
            )}
            {data?.tip_ram && (
              <div className="single-info">
                <Text fontWeight={"bold"} fontSize="lg">
                  Tip RAM:
                </Text>
                <Text fontSize="md">
                  {capitalizeFirstLetter(data?.tip_ram)}
                </Text>
              </div>
            )}
            {data?.hard_disk && (
              <div className="single-info">
                <Text fontWeight={"bold"} fontSize="lg">
                  HDD:
                </Text>
                <Text fontSize="md">
                  {capitalizeFirstLetter(data?.hard_disk)}
                </Text>
              </div>
            )}
            {data?.tip_hard_diska && (
              <div className="single-info">
                <Text fontWeight={"bold"} fontSize="lg">
                  Tip HDD:
                </Text>
                <Text fontSize="md">
                  {capitalizeFirstLetter(data?.tip_hard_diska)}
                </Text>
              </div>
            )}
            {data?.graficka_kartica && (
              <div className="single-info">
                <Text fontWeight={"bold"} fontSize="lg">
                  Grafička kartica:
                </Text>
                <Text fontSize="md">
                  {capitalizeFirstLetter(data?.graficka_kartica)}
                </Text>
              </div>
            )}
            {data?.model_graficke && (
              <div className="single-info">
                <Text fontWeight={"bold"} fontSize="lg">
                  Model grafičke:
                </Text>
                <Text fontSize="md">
                  {capitalizeFirstLetter(data?.model_graficke)}
                </Text>
              </div>
            )}
            {data?.memorija_graficke && (
              <div className="single-info">
                <Text fontWeight={"bold"} fontSize="lg">
                  Memorija grafičke:
                </Text>
                <Text fontSize="md">
                  {capitalizeFirstLetter(data?.memorija_graficke)}
                </Text>
              </div>
            )}
            {data?.os && (
              <div className="single-info">
                <Text fontWeight={"bold"} fontSize="lg">
                  OS:
                </Text>
                <Text fontSize="md">{capitalizeFirstLetter(data?.os)}</Text>
              </div>
            )}
            {data?.vga && (
              <div className="single-info">
                <Text fontWeight={"bold"} fontSize="lg">
                  VGA:
                </Text>
                <Text fontSize="md">{capitalizeFirstLetter(data?.vga)}</Text>
              </div>
            )}
            {data?.dvi && (
              <div className="single-info">
                <Text fontWeight={"bold"} fontSize="lg">
                  DVI:
                </Text>
                <Text fontSize="md">{capitalizeFirstLetter(data?.dvi)}</Text>
              </div>
            )}
            {data?.hdmi && (
              <div className="single-info">
                <Text fontWeight={"bold"} fontSize="lg">
                  HDMI:
                </Text>
                <Text fontSize="md">{capitalizeFirstLetter(data?.hdmi)}</Text>
              </div>
            )}
            {data?.display && (
              <div className="single-info">
                <Text fontWeight={"bold"} fontSize="lg">
                  Display port:
                </Text>
                <Text fontSize="md">
                  {capitalizeFirstLetter(data?.display)}
                </Text>
              </div>
            )}
            {data?.smart && (
              <div className="single-info">
                <Text fontWeight={"bold"} fontSize="lg">
                  SMART:
                </Text>
                <Text fontSize="md">{capitalizeFirstLetter(data?.smart)}</Text>
              </div>
            )}
            {data?.bt && (
              <div className="single-info">
                <Text fontWeight={"bold"} fontSize="lg">
                  Bluetooth:
                </Text>
                <Text fontSize="md">{capitalizeFirstLetter(data?.bt)}</Text>
              </div>
            )}
            {data?.webcam && (
              <div className="single-info">
                <Text fontWeight={"bold"} fontSize="lg">
                  Webcam:
                </Text>
                <Text fontSize="md">{capitalizeFirstLetter(data?.webcam)}</Text>
              </div>
            )}
            {data?.vrsta && (
              <div className="single-info">
                <Text fontWeight={"bold"} fontSize="lg">
                  Vrsta:
                </Text>
                <Text fontSize="md">{capitalizeFirstLetter(data?.vrsta)}</Text>
              </div>
            )}
            {data?.broj_sim && (
              <div className="single-info">
                <Text fontWeight={"bold"} fontSize="lg">
                  Broj SIM Slotova:
                </Text>
                <Text fontSize="md">
                  {capitalizeFirstLetter(data?.broj_sim)}
                </Text>
              </div>
            )}
            {data?.broj_jezgara && (
              <div className="single-info">
                <Text fontWeight={"bold"} fontSize="lg">
                  Broj jezgara:
                </Text>
                <Text fontSize="md">
                  {capitalizeFirstLetter(data?.broj_jezgara)}
                </Text>
              </div>
            )}
            {data?.baterija && (
              <div className="single-info">
                <Text fontWeight={"bold"} fontSize="lg">
                  Baterija:
                </Text>
                <Text fontSize="md">
                  {capitalizeFirstLetter(data?.baterija)}
                </Text>
              </div>
            )}
            {data?.interna_memorija && (
              <div className="single-info">
                <Text fontWeight={"bold"} fontSize="lg">
                  Interna memorija:
                </Text>
                <Text fontSize="md">
                  {capitalizeFirstLetter(data?.interna_memorija)}
                </Text>
              </div>
            )}
            {data?.rezolucija_prednje_kamere && (
              <div className="single-info">
                <Text fontWeight={"bold"} fontSize="lg">
                  Rezolucija prednje kamere:
                </Text>
                <Text fontSize="md">
                  {capitalizeFirstLetter(data?.rezolucija_prednje_kamere)}
                </Text>
              </div>
            )}
            {data?.lan && (
              <div className="single-info">
                <Text fontWeight={"bold"} fontSize="lg">
                  LAN:
                </Text>
                <Text fontSize="md">{capitalizeFirstLetter(data?.lan)}</Text>
              </div>
            )}
            {data?.scart && (
              <div className="single-info">
                <Text fontWeight={"bold"} fontSize="lg">
                  SCART
                </Text>
                <Text fontSize="md">{capitalizeFirstLetter(data?.scart)}</Text>
              </div>
            )}
            {data?.wifi && (
              <div className="single-info">
                <Text fontWeight={"bold"} fontSize="lg">
                  WIFI:
                </Text>
                <Text fontSize="md">{capitalizeFirstLetter(data?.wifi)}</Text>
              </div>
            )}
          </div>
          <div className="product-info-component-main-information-price">
            <Text
              textAlign={"center"}
              fontSize={"4xl"}
              fontWeight={"bold"}
              textColor={"#0c0c0d"}
            >
              {data?.cijena}
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
          <div className="product-info-component-main-information-buttons">
            <div className="product-info-options-counter">
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
                display="flex"
                gap="0.5rem"
                width={"100%"}
                backgroundColor={"#eaedf1"}
                _hover={{
                  backgroundColor: "#4cbb17",
                  color: "#fff",
                }}
                color={"#0c0c0d"}
                borderRadius={"5rem"}
                onClick={() => console.log(counter, data)}
              >
                <Icon as={FaCartPlus} />
                <Text>Dodaj u korpu</Text>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="product-info-component-specification">
        <Text fontSize={"4xl"} textAlign="center" fontWeight={"bold"}>
          Tehničke specifikacije
        </Text>
        <div className="product-info-component-specification-table-wrapper">
          <table className="table">
            <tbody className="tbody">
              {properties?.map(pr => {
                if (
                  (pr[0] !== "cijena") &
                  (pr[0] !== "naslov") &
                  (pr[0] !== "detalji")
                )
                  return (
                    <tr className="trow">
                      <td className="left-table-side">
                        {removeSpace(capitalizeFirstLetter(pr[0]))}
                      </td>
                      <td className="right-table-side">
                        {capitalizeFirstLetter(pr[1])}
                      </td>
                    </tr>
                  );
              })}
              <tr className="trow">
                <td className="left-table-side">Detalji</td>
                <td className="right-table-side">
                  {data?.detalji ? data?.detalji : "Nema detalja"}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;