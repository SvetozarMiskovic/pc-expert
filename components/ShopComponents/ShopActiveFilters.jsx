import { Button, Icon } from "@chakra-ui/react";
import React from "react";
import { useShopContext } from "../../context/ShopContext";
import ShopSingleActiveFilter from "./ShopSingleActiveFilter";
import { FaTimes } from "react-icons/fa";
function ShopActiveFilters() {
  const { activeFilters, clearActiveFilters } = useShopContext();

  return (
    <div className="shop-active-filters-wrapper">
      <div className="shop-active-filters-container">
        {activeFilters?.map(af => {
          return <ShopSingleActiveFilter key={af.filterProperty} data={af} />;
        })}
        {activeFilters?.length > 0 && (
          <Button
            display={"flex"}
            justifyContent="center"
            alignItems={"center"}
            _hover={{
              background: "transparent",
              textDecoration: "underline",
              color: "#4cbb17",
            }}
            background="transparent"
            onClick={() => clearActiveFilters()}
          >
            Obrisi filtere
            <Icon fontSize={"xs"} as={FaTimes} />
          </Button>
        )}
      </div>
    </div>
  );
}

export default ShopActiveFilters;
