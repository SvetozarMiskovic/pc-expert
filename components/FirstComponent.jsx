import React from "react";
import { PhoneIcon, EmailIcon, Icon } from "@chakra-ui/icons";
import {
  FaShoppingBasket,
  FaInfoCircle,
  FaLocationArrow,
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
            <h5 className="number-text">
              Pozovite na broj <span className="number">+38765318132</span>
            </h5>
          </div>
          <div className="vl">|</div>
          <div className="email">
            <EmailIcon />
            <h5>
              Posaljite email na <span className="info">info@pcexpert.ba</span>{" "}
              ili <span className="store">prodaja@pcexpert.ba</span>
            </h5>
          </div>
        </div>
        <div className="right-side">
          <Link href="/shop">
            <div className="shop">
              <Icon w={"15px"} as={FaShoppingBasket} />
              <h5>Shop</h5>
            </div>
          </Link>
          <Link href="/information">
            <div className="information">
              <Icon w={"15px"} as={FaInfoCircle} />
              <h5>Informacije</h5>
            </div>
          </Link>
          <Link href="/location">
            <div className="location">
              <Icon w={"15px"} as={FaLocationArrow} />
              <h5>Lokacija</h5>
            </div>
          </Link>
        </div>
      </div>
      {/* <Image src={logo} width="75px" height="75px" /> */}
    </div>
  );
};

export default FirstComponent;
