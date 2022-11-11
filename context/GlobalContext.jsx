import React, { createContext, useContext, useState } from "react";

const Context = createContext();

function GlobalContextProvider({ children }) {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileSearch, setMobileSearch] = useState(false);
  const [popover, setPopover] = useState(false);
  const [subCategory, setSubCategory] = useState("");
  const [openSub, setOpenSub] = useState(false);
  const [isLogged, setIsLogged] = useState(false);

  const updateLoggedIn = () => {
    setIsLogged(prevState => !prevState);
  };

  const updateSubCategory = val => {
    setSubCategory(val);
  };

  const openSubMenu = () => {
    setOpenSub(true);
  };

  const closeSubMenu = () => {
    setOpenSub(false);
  };

  const updatePopover = () => {
    setPopover(prevState => !prevState);
  };

  const updateMobileSearch = () => {
    setMobileSearch(prevState => !prevState);
  };

  const updateMobile = () => {
    setMobileMenu(prevState => !prevState);
  };

  return (
    <Context.Provider
      value={{
        mobileMenu,
        updateMobile,
        mobileSearch,
        updateMobileSearch,
        popover,
        updatePopover,
        openSub,
        openSubMenu,
        closeSubMenu,
        subCategory,
        updateSubCategory,
        updateLoggedIn,
        isLogged,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default GlobalContextProvider;

export const useGlobalContext = () => useContext(Context);
