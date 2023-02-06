import React from "react";
import { Text, Icon } from "@chakra-ui/react";
import { FaTimes } from "react-icons/fa";
import { useShopContext } from "../../context/ShopContext";
function ShopSingleActiveFilter({ data }) {
  const { removeActiveFilter } = useShopContext();
  // console.log("IZ OVOG KURCA MALOG", data);
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1) + ":";
  }
  function capitalizeFilterValue(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const removeSpace = string => {
    return string.split("_").join(" ");
  };
  return (
    <div className="shop-single-active-filter">
      <div className="shop-single-active-filter-label">
        <Text fontSize={"lg"}>
          {removeSpace(capitalizeFirstLetter(data.filterProperty))}
        </Text>
      </div>
      <div className="shop-single-active-filter-values">
        {data.filterValues?.map(value => {
          return (
            <div
              key={value}
              onClick={() => {
                removeActiveFilter(data.filterProperty, value);
              }}
              className="shop-single-active-filter-value"
            >
              <Text fontWeight={"bold"} fontSize={"md"} key={value}>
                {capitalizeFilterValue(value)}
              </Text>
              <Icon fontSize={"xs"} as={FaTimes} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ShopSingleActiveFilter;
