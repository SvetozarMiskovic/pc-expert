import { useRouter } from "next/router";
import React, { createContext, useContext, useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { getCart } from "../helpers/getCart";
import { setLSCart } from "../helpers/setLSCart";

const Context = createContext();

function GlobalContextProvider({ children }) {
  const [allItems, setAllItems] = useState();
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileSearch, setMobileSearch] = useState(false);
  const [popover, setPopover] = useState(false);
  const [subCategory, setSubCategory] = useState("");
  const [openSub, setOpenSub] = useState(false);
  const [isCart, setIsCart] = useState(false);
  const [editProfile, setEditProfile] = useState(false);
  const [cart, setCart] = useState(() => {
    return getCart();
  });
  const [total, setTotal] = useState(0);
  const [sums, setSums] = useState([]);
  const [sentOrder, setSentOrder] = useState({});
  const [order, setOrder] = useState({
    id: "",
    ime_i_prezime: "",
    email: "",
    broj_telefona: "",
    adresa: "",
    adresa_2: "",
    ulica: "",
    grad: "",
    postanski_broj: "",
    napomena: "",
  });

  const updateAllItems = (arr) => {
    setAllItems(arr);
  };

  const resetSentOrder = () => {
    setSentOrder({});
  };

  const updateSentOrder = (ord) => {
    setSentOrder((prevState) => {
      return ord;
    });
  };
  const updateOrder = (key, value) => {
    setOrder((prevState) => {
      return {
        ...prevState,
        [key]: value,
      };
    });
  };

  const resetOrder = () => {
    setOrder((prevState) => {
      return {
        id: "",
        ime_i_prezime: "",
        email: "",
        broj_telefona: "",
        adresa: "",
        adresa_2: "",
        ulica: "",
        grad: "",
        postanski_broj: "",
        napomena: "",
      };
    });
  };

  const addCartToOrder = (cart) => {
    setOrder((prevState) => {
      return { ...prevState, artikli: cart };
    });
  };

  const updateTotal = () => {
    const total = sums?.reduce((currSum, nextSum) => currSum + nextSum, 0);
    const formated = Number(parseFloat(total).toFixed(2)).toLocaleString(
      "en-US",
      {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }
    );

    return setTotal(formated);
  };
  useEffect(() => {
    const getPrices = () => {
      const prices = cart.map((c) => {
        return c?.product?.akcija
          ? c?.qty * c?.product?.akcija
          : c?.qty * c?.product?.cijena;
      });

      return setSums(prices);
    };

    getPrices();
  }, [cart]);

  useEffect(() => {
    updateTotal();
  }, [sums]);
  const updateCart = (item) => {
    setCart((prevState) => {
      const exists = prevState?.find(
        (ps) => ps?.product?.id.toString() === item?.product?.id.toString()
      );
      if (exists) {
        const rest = prevState?.filter(
          (ps) => ps?.product?.id.toString() !== item?.product?.id.toString()
        );
        const qty = exists?.qty + item?.qty;
        const newObj = Object.assign(exists, {
          qty,
        });
        const newArr = [...rest, newObj];

        setLSCart([...newArr]);

        return [...newArr];
      }

      setLSCart([...prevState, item]);
      return [...prevState, item];
    });
  };

  const removeCartItem = (id) => {
    setCart((prevState) => {
      const filtered = prevState?.filter((item) => item?.product?.id !== id);

      setLSCart([...filtered]);
      return [...filtered];
    });
  };
  const clearCart = () => {
    setLSCart([]);
    setCart([]);
  };
  const updateEditProfile = () => {
    setEditProfile((prevState) => {
      return !prevState;
    });
  };

  const openCart = () => {
    setIsCart(true);
  };

  const closeCart = () => {
    setIsCart(false);
  };

  const updateSubCategory = (val) => {
    setSubCategory(val);
  };

  const openSubMenu = () => {
    setOpenSub(true);
  };

  const closeSubMenu = () => {
    setOpenSub(false);
  };

  const updatePopover = () => {
    setPopover((prevState) => !prevState);
  };

  const updateMobileSearch = () => {
    setMobileSearch((prevState) => !prevState);
  };

  const updateMobile = () => {
    setMobileMenu((prevState) => !prevState);
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
        openCart,

        editProfile,
        updateEditProfile,
        updateCart,
        cart,
        clearCart,
        closeCart,
        removeCartItem,
        total,
        order,
        updateOrder,
        resetOrder,
        addCartToOrder,
        sentOrder,
        resetSentOrder,
        updateSentOrder,
        allItems,
        updateAllItems,
      }}
    >
      <ToastContainer
        autoClose={3000}
        progressStyle={{ background: "#f89a20" }}
        style={{ fontSize: "0.9rem", fontWeight: "bold" }}
        newestOnTop={true}
      />
      {children}
    </Context.Provider>
  );
}

export default GlobalContextProvider;

export const useGlobalContext = () => useContext(Context);
