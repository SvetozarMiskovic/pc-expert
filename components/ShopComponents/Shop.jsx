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
  } = useShopContext();

  useEffect(() => {
    updateAllCategoryProducts(data);
    updateActiveCategory(category);
  }, [category]);

  const paginatedData = paginate(data, currentPage, pageSize);

  return (
    <>
      <div className="shop-component-container">
        {paginatedData?.map(item => {
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
        items={data.length} // 100
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
