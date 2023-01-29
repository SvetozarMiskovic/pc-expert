import { Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useShopContext } from "../../context/ShopContext";
import ShopCategoryItem from "./ShopCategoryItem";

function Shop({ category, data }) {
  const {
    updateActiveCategory,
    updateAllCategoryProducts,
    allCategoryProducts,
    updateProductsCount,
  } = useShopContext();

  useEffect(() => {
    updateAllCategoryProducts(data);
    updateActiveCategory(category);

    updateProductsCount(data?.length);
  }, [category]);
  return (
    <div className="shop-component-container">
      {allCategoryProducts?.map(item => {
        return <ShopCategoryItem key={item.id} dataAll={item} />;
      })}
    </div>
  );
}

export default Shop;
