import React, { useEffect, useRef } from "react";
import ShopSidebar from "./ShopSidebar";
import ShopHeaderBar from "./ShopHeaderBar";
import ShopActiveFilters from "./ShopActiveFilters";
import { useShopContext } from "../../context/ShopContext";

function ShopLayout({ children, data }) {
  const { currentPage } = useShopContext();

  const startingRef = useRef();

  useEffect(() => {
    startingRef.current.scrollIntoView();
  }, [currentPage]);

  return (
    <div className="shop-layout-wrapper" ref={startingRef}>
      <ShopSidebar />
      <div className="shop-layout-filter-wrapper">
        <ShopHeaderBar />
        <ShopActiveFilters />
        {children}
      </div>
    </div>
  );
}

export default ShopLayout;
