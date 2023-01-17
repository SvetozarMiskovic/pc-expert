import React from "react";
import { PhoneIcon, EmailIcon, Icon } from "@chakra-ui/icons";

import {
  FaShoppingBasket,
  FaInfoCircle,
  FaLocationArrow,
  FaUserShield,
  FaUser,
  FaLock,
  FaLockOpen,
  FaDoorClosed,
  FaPowerOff,
} from "react-icons/fa";
import Link from "next/link";

import { useAuthContext } from "../../context/AuthContext";

// import Image from "next/image";
// import logo from "../assets/T1.png";
const FirstComponent = () => {
  const { isLoged, updateLoged } = useAuthContext();
  return (
    <div className="first-component">
      <div className="info-line">
        <div className="left-side">
          <div className="phone-number">
            <PhoneIcon />
            <h5 className="number-text">Pozovite info broj +38765318132</h5>
          </div>
          <div className="vl">|</div>
          <div className="email">
            <EmailIcon />
            <h5>
              Pošaljite e-mail na info@pcexpert.ba ili prodaja@pcexpert.ba
            </h5>
          </div>
        </div>
        <div className="right-side">
          <Link href="/registracija" passHref legacyBehavior>
            <div className="shop">
              <Icon w={"15px"} as={FaPowerOff} />
              <h5>Registracija</h5>
            </div>
          </Link>
          {!isLoged ? (
            <Link href={"/prijava"} passHref legacyBehavior>
              <div className="shop">
                <Icon w={"15px"} as={FaLock} />
                <h5>Prijava</h5>
              </div>
            </Link>
          ) : (
            <Link href={"/odjava"} passHref legacyBehavior>
              <div className="shop">
                <Icon w={"15px"} as={FaLockOpen} />
                <h5>Odjavi se</h5>
              </div>
            </Link>
          )}
          <Link href="/shop" passHref legacyBehavior>
            <div className="shop">
              <Icon w={"15px"} as={FaShoppingBasket} />
              <h5>Shop</h5>
            </div>
          </Link>
          <Link href="/opis" passHref legacyBehavior>
            <div className="information">
              <Icon w={"15px"} as={FaInfoCircle} />
              <h5>Naša priča</h5>
            </div>
          </Link>
          <Link href="/pravila" passHref legacyBehavior>
            <div className="rules">
              <Icon w={"15px"} as={FaUserShield} />
              <h5>Instrukcije i pravila korištenja</h5>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FirstComponent;
