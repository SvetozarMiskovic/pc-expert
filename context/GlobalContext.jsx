import { useDisclosure } from "@chakra-ui/react";
import React, { createContext, useContext, useState } from "react";

const Context = createContext();

function GlobalContextProvider({ children }) {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileSearch, setMobileSearch] = useState();

  const updateMobileSearch = () => {
    setMobileSearch(prevState => !prevState);
  };

  const updateMobile = () => {
    setMobileMenu(prevState => !prevState);
  };

  return (
    <Context.Provider
      value={{ mobileMenu, updateMobile, mobileSearch, updateMobileSearch }}
    >
      {children}
    </Context.Provider>
  );
}

export default GlobalContextProvider;

export const useGlobalContext = () => useContext(Context);
