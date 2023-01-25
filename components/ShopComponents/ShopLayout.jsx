import React, { useEffect } from "react";
import ShopSidebar from "./ShopSidebar";
import { useShopContext } from "../../context/ShopContext";
import ShopHeaderBar from "./ShopHeaderBar";

function ShopLayout({ children, category }) {
  const { updateActiveCategory } = useShopContext();
  useEffect(() => {
    updateActiveCategory(category);
  }, [category, updateActiveCategory]);

  return (
    <div className="shop-layout-wrapper">
      <ShopSidebar />

      <div className="shop-layout-filter-wrapper">
        <ShopHeaderBar />
        {children}
      </div>
    </div>
  );
}

export default ShopLayout;
