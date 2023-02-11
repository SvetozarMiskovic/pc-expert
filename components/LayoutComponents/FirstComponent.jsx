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
import { Text } from "@chakra-ui/react";

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
            <Text className="number-text">
              Pozovite info broj +387 66 777-735
            </Text>
          </div>
          <div className="vl">|</div>
          <div className="email">
            <EmailIcon />
            <Text>
              Pošaljite e-mail na info@pcexpert.ba ili prodaja@pcexpert.ba
            </Text>
          </div>
        </div>
        <div className="right-side">
          <Link href="/registracija" passHref legacyBehavior>
            <div className="shop">
              <Icon w={"15px"} as={FaPowerOff} />
              <Text>Registracija</Text>
            </div>
          </Link>
          {!isLoged ? (
            <Link href={"/prijava"} passHref legacyBehavior>
              <div className="shop">
                <Icon w={"15px"} as={FaLock} />
                <Text>Prijava</Text>
              </div>
            </Link>
          ) : (
            <Link href={"/odjava"} passHref legacyBehavior>
              <div className="shop">
                <Icon w={"15px"} as={FaLockOpen} />
                <Text>Odjavi se</Text>
              </div>
            </Link>
          )}
          <Link href="/shop" passHref legacyBehavior>
            <div className="shop">
              <Icon w={"15px"} as={FaShoppingBasket} />
              <Text>Shop</Text>
            </div>
          </Link>
          <Link href="/opis" passHref legacyBehavior>
            <div className="information">
              <Icon w={"15px"} as={FaInfoCircle} />
              <Text>Naša priča</Text>
            </div>
          </Link>
          <Link href="/pravila" passHref legacyBehavior>
            <div className="rules">
              <Icon w={"15px"} as={FaUserShield} />
              <Text>Instrukcije korištenja i pravila privatnosti</Text>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FirstComponent;
