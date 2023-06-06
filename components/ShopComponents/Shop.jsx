import { Text } from "@chakra-ui/react";

import React, { useEffect, useState } from "react";
import { useShopContext } from "../../context/ShopContext";
import { paginate } from "../../helpers/paginate";
import ShopCategoryItem from "./ShopCategoryItem";
import ShopPagination from "./ShopPagination";

function Shop({ category, data }) {
  const {
    updateActiveCategory,
    updateAllCategoryProducts,
    allCategoryProducts,
    updateProductsCount,
    handlePageChange,
    nextPage,
    prevPage,
    currentPage,
    pageSize,
    onPageChange,
    filteredItems,
    sortBy,
  } = useShopContext();

  useEffect(() => {
    updateAllCategoryProducts(data);
    updateActiveCategory(category);
  }, [category]);

  const paginatedData = paginate(
    data?.sort((a, b) => {
      if (sortBy === "asc") {
        return a?.akcija
          ? b?.akcija
            ? a?.akcija - b?.akcija
            : a?.akcija - b?.cijena
          : b?.akcija
          ? a?.cijena - b?.akcija
          : a?.cijena - b?.cijena;
      } else {
        return b?.akcija
          ? a?.akcija
            ? b?.akcija - a?.akcija
            : b?.akcija - a?.cijena
          : a?.akcija
          ? b?.cijena - a?.akcija
          : b?.cijena - a?.cijena;
      }
    }),
    currentPage,
    pageSize
  );
  const paginatedFilters = paginate(
    filteredItems?.sort((a, b) => {
      if (sortBy === "asc") {
        return a?.akcija
          ? b?.akcija
            ? a?.akcija - b?.akcija
            : a?.akcija - b?.cijena
          : b?.akcija
          ? a?.cijena - b?.akcija
          : a?.cijena - b?.cijena;
      } else {
        return b?.akcija
          ? a?.akcija
            ? b?.akcija - a?.akcija
            : b?.akcija - a?.cijena
          : a?.akcija
          ? b?.cijena - a?.akcija
          : b?.cijena - a?.cijena;
      }
    }),
    currentPage,
    pageSize
  );

  return (
    <>
      <div className="shop-component-container">
        {filteredItems?.length < 1 &&
          paginatedData?.map(item => {
            return (
              <ShopCategoryItem
                key={item.id}
                dataAll={item}
                category={category}
              />
            );
          })}
        {filteredItems?.length > 0 &&
          paginatedFilters?.map(item => {
            return (
              <ShopCategoryItem
                key={item.id}
                dataAll={item}
                category={category}
              />
            );
          })}
      </div>
      <ShopPagination
        items={filteredItems?.length > 0 ? filteredItems?.length : data?.length} // 100
        currentPage={currentPage} // 1
        pageSize={pageSize} // 10
        onPageChange={onPageChange}
        nextPage={nextPage}
        prevPage={prevPage}
      />
    </>
  );
}

export default Shop;
