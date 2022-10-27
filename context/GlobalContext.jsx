import { useDisclosure } from "@chakra-ui/react";
import React, { createContext, useContext, useState } from "react";

const Context = createContext();

function GlobalContextProvider({ children }) {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileSearch, setMobileSearch] = useState(false);
  const [popover, setPopover] = useState(false);

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
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default GlobalContextProvider;

export const useGlobalContext = () => useContext(Context);
