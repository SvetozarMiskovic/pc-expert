import React from "react";
import ShopSidebar from "./ShopSidebar";

import ShopHeaderBar from "./ShopHeaderBar";

function ShopLayout({ children, data }) {
  return (
    <div className="shop-layout-wrapper">
      <ShopSidebar data={data} />

      <div className="shop-layout-filter-wrapper">
        <ShopHeaderBar />
        {children}
      </div>
    </div>
  );
}

export default ShopLayout;
