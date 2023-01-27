import React from "react";
import ShopSidebar from "./ShopSidebar";

import ShopHeaderBar from "./ShopHeaderBar";

function ShopLayout({ children }) {
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
