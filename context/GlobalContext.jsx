import { useRouter } from "next/router";
import React, { createContext, useContext, useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";

const Context = createContext();

function GlobalContextProvider({ children }) {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileSearch, setMobileSearch] = useState(false);
  const [popover, setPopover] = useState(false);
  const [subCategory, setSubCategory] = useState("");
  const [openSub, setOpenSub] = useState(false);
  const [isCart, setIsCart] = useState(false);
  const [editProfile, setEditProfile] = useState(false);

  const updateEditProfile = () => {
    setEditProfile(prevState => {
      return !prevState;
    });
  };

  const toggleCart = () => {
    setIsCart(prevState => !prevState);
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
        isCart,
        toggleCart,

        editProfile,
        updateEditProfile,
      }}
    >
      <ToastContainer
        autoClose={3000}
        progressStyle={{ background: "#f89a20" }}
        style={{ fontSize: "0.9rem" }}
        newestOnTop={true}
      />
      {children}
    </Context.Provider>
  );
}

export default GlobalContextProvider;

export const useGlobalContext = () => useContext(Context);
