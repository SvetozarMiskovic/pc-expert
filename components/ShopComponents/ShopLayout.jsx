import React from "react";
import ShopSidebar from "./ShopSidebar";
import ShopContextProvider from "../../context/ShopContext";
import ShopHeaderBar from "./ShopHeaderBar";

function ShopLayout({ children }) {
  return (
    <div className="shop-layout-wrapper">
      <ShopContextProvider>
        <ShopSidebar />

        <div className="shop-layout-filter-wrapper">
          <ShopHeaderBar />
          {children}
        </div>
      </ShopContextProvider>
    </div>
  );
}

export default ShopLayout;
