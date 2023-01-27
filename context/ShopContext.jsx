import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";

const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const router = useRouter();

  const [activeCategory, setActiveCategory] = useState("");
  const [activeView, setActiveView] = useState("grid");
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [allCategoryProducts, setAllCategoryProducts] = useState([]);

  const updateCategoryProducts = data => {
    setCategoryProducts(() => {
      return [...data];
    });
  };

  const updateAllCategoryProducts = data => {
    setAllCategoryProducts(() => {
      return [...data];
    });
  };

  const updateActiveView = view => {
    setActiveView(view);
  };

  const updateActiveCategory = cat => {
    setActiveCategory(cat);
  };

  return (
    <ShopContext.Provider
      value={{
        activeCategory,
        updateActiveCategory,
        activeView,
        updateActiveView,
        updateCategoryProducts,
        updateAllCategoryProducts,
        categoryProducts,
        allCategoryProducts,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;

export const useShopContext = () => useContext(ShopContext);
