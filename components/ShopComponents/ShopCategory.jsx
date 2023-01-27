import React, { useEffect } from "react";
import { useShopContext } from "../../context/ShopContext";
import ShopCategoryItem from "./ShopCategoryItem";

function ShopCategory({ category, data }) {
  const { updateActiveCategory, updateCategoryProducts, categoryProducts } =
    useShopContext();

  useEffect(() => {
    updateCategoryProducts(data);
    updateActiveCategory(category);
  }, [category]);
  return (
    <div className="shop-category-wrapper">
      <div className="shop-category-container">
        {categoryProducts.map(item => {
          return <ShopCategoryItem key={item.id} dataCategory={item} />;
        })}
      </div>
    </div>
  );
}

export default ShopCategory;
