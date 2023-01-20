import { createContext, useContext, useState } from "react";

const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const [activeCategory, setActiveCategory] = useState("");
  const [activeView, setActiveView] = useState("list");

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
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;

export const useShopContext = () => useContext(ShopContext);
