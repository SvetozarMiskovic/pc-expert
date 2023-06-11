import { Text } from "@chakra-ui/react";
import React from "react";
import ShopCategoryItem from "../ShopComponents/ShopCategoryItem";

function RandomProducts({ data }) {
  function getMultipleRandom(arr, num) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());

    return shuffled.slice(0, num);
  }

  let final = [];
  console.log("Istaknuti proizvodi", data);
  if (data) {
    // const allData = [
    //   ...data?.laptopi,
    //   ...data?.monitori,
    //   ...data?.telefoni,
    //   ...data?.televizori,
    //   ...data?.periferija,
    //   ...data?.komponente,
    //   ...data?.racunari,
    //   ...data?.mining,
    // ];
    Object?.keys(data).forEach(cat => {
      final = [...final, ...data?.[cat]]?.slice(0, 24);
    });
    console.log(final);
    // final = [...data?.laptopi];
  }

  // const randomData = allData.filter(item => !item?.akcija);

  // const final = getMultipleRandom(randomData, 24);

  return (
    <div className="random-products-component">
      <Text
        fontSize={"3xl"}
        textAlign="center"
        paddingBottom={"1rem"}
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
