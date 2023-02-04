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

  const [totalPrice, setTotalPrice] = useState("0,00");
  const [bc, setBc] = useState([]); // breadcrumbs

  const updateEditProfile = () => {
    setEditProfile(prevState => {
      return !prevState;
    });
  };
  const updateBreadCrumbs = arrValue => {
    return setBc(arrValue);
  };

  const [items, setItems] = useState([
    {
      id: 1,
      price: "780,00",
      title: "Laptop Acer Z400",
    },
    {
      id: 2,
      price: "1500,00",
      title: "Laptop Alienware X1",
    },
    {
      id: 3,
      price: "450,00",
      title: "Monitor ASUS ROG 29450",
    },
    {
      id: 4,
      price: "20,00",
      title: "Miš Genius P1000",
    },
    {
      id: 5,
      price: "95,00",
      title: "Slušalice RAZOR PTSD 500",
    },
    {
      id: 6,
      price: "200,00",
      title: "Procesor Celeron G1240",
    },
    {
      id: 7,
      price: "77,00",
      title: "Kućište neko lijevo",
    },
  ]);

  const updateTotalPrice = prices => {
    let total;

    prices.map(price => {
      total += price.price;
    });

    // setTotalPrice(String(total));
    // console.log(total);
  };

  updateTotalPrice(items);
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
        updateTotalPrice,
        totalPrice,
        items,
        setItems,
        updateBreadCrumbs,
        bc,
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
