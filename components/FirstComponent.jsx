import React from "react";
import { PhoneIcon, EmailIcon, Icon } from "@chakra-ui/icons";
import {
  FaShoppingBasket,
  FaInfoCircle,
  FaLocationArrow,
  FaUserAlt,
  FaUser,
  FaLock,
} from "react-icons/fa";
import Link from "next/link";

// import Image from "next/image";
// import logo from "../assets/T1.png";
const FirstComponent = () => {
  return (
    <div className="first-component">
      <div className="container info-line">
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
          <Link href="/login">
            <div className="shop">
              <Icon w={"15px"} as={FaLock} />
              <h5>Login</h5>
            </div>
          </Link>
          <Link href="/shop">
            <div className="shop">
              <Icon w={"15px"} as={FaShoppingBasket} />
              <h5>Shop</h5>
            </div>
          </Link>
          <Link href="/about">
            <div className="information">
              <Icon w={"15px"} as={FaInfoCircle} />
              <h5>O nama</h5>
            </div>
          </Link>
          <Link href="/rules">
            <div className="rules">
              <Icon w={"15px"} as={FaUserAlt} />
              <h5>Pravila korištenja</h5>
            </div>
          </Link>
        </div>
      </div>
      {/* <Image src={logo} width="75px" height="75px" /> */}
    </div>
  );
};

export default FirstComponent;
