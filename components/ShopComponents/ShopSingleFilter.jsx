import React, { useEffect, useState } from "react";
import { filter, Icon, Text } from "@chakra-ui/react";
import { FaCheck } from "react-icons/fa";

import { useShopContext } from "../../context/ShopContext";

function ShopSingleFilter({ data, filterProperty }) {
  const [checked, setChecked] = useState();
  const { activeFilters, updateActiveFilters, removeActiveFilter } =
    useShopContext();

  useEffect(() => {
    const filtered = activeFilters.filter(
      af => af.filterProperty === filterProperty
    );
    const newObj = filtered["0"]?.filterValues;
    setChecked(newObj?.includes(data));
  }, [activeFilters]);

  return (
    <div
      className="shop-single-menu-filter"
      onClick={() => {
        console.log();
        setChecked(!checked);
        !checked
          ? updateActiveFilters({ data, filterProperty })
          : removeActiveFilter(filterProperty, data);
      }}
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
