import { Text } from "@chakra-ui/react";
import React from "react";
import ShopCategoryItem from "../ShopComponents/ShopCategoryItem";

function RandomProducts({ data }) {
  function getMultipleRandom(arr, num) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());

    return shuffled.slice(0, num);
  }
  const randomLaptops = getMultipleRandom(data?.laptopi, 7);
  const randomMonitors = getMultipleRandom(data?.monitori, 2);
  const randomTVs = getMultipleRandom(data?.televizori, 2);
  const randomPhones = getMultipleRandom(data?.telefoni, 2);
  const randomPerifery = getMultipleRandom(data?.periferija, 2);
  const randomComponents = getMultipleRandom(data?.komponente, 2);
  const randomComputers = getMultipleRandom(data?.racunari, 2);
  const randomMining = getMultipleRandom(data?.mining, 1);

  const final = [
    ...randomLaptops,
    ...randomMonitors,
    ...randomComponents,
    ...randomTVs,
    ...randomPhones,
    ...randomPerifery,
    ...randomComputers,
    ...randomMining,
  ];

  return (
    <div className="random-products-component">
      <Text
        fontSize={"3xl"}
        textAlign="center"
        paddingBottom={"2rem"}
        color="#0c0c0c"
      >
        Istaknuti proizvodi
      </Text>
      <div className="random-products-holder">
        {final?.map(item => {
          return (
            <ShopCategoryItem key={item?.id} dataAll={item} category={"all"} />
          );
        })}
      </div>
    </div>
  );
}

export default RandomProducts;
