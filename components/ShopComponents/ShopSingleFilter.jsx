import React, { useState } from "react";
import { Icon, Text } from "@chakra-ui/react";
import { FaCheck } from "react-icons/fa";

function ShopSingleFilter({ data }) {
  const [checked, setChecked] = useState(false);
  return (
    <div
      className="shop-single-menu-filter"
      onClick={() => setChecked(!checked)}
    >
      <div
        className={
          checked
            ? "shop-single-menu-filter-checkbox-active checkbox"
            : "shop-single-menu-filter-checkbox checkbox"
        }
      >
        <Icon
          display={checked ? "block" : "none"}
          color={"#fff"}
          as={FaCheck}
        />
      </div>
      <Text color={"#0c0c0d"} fontWeight="600" fontSize={"md"}>
        {data}
      </Text>
    </div>
  );
}

export default ShopSingleFilter;
