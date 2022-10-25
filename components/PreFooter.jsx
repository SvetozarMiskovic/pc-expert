import React from "react";
import Image from "next/image";
import logo from "../assets/T1.png";
import partner from "../assets/Prointer.png";
import amazon from "../assets/amazon-logo-transparent.png";
import { PhoneIcon, EmailIcon, Icon } from "@chakra-ui/icons";
import {
  FaInfoCircle,
  FaLocationArrow,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
function PreFooter() {
  return (
    <div className="pre-footer">
      <div className=" pre-footer-child">
        <div className="contact">
          <div className="footer-logo">
            <Image width={100} height={100} src={logo} />
          </div>
          <div className="small-text">
            <p>Mladena Stojanovića br. 44</p>
            <p>78240 Čelinac</p>
          </div>
          <div className="small-text-2">
            <p>JIB: 4511548430002</p>
            <p>Carinski broj: 511548430002</p>
          </div>
        </div>
        <div className="footer-information">
          <h3 className="contact-info-header">Kontakt informacije</h3>
          <div className="footer-info">
            <div className="footer-info-email">
              <Icon as={FaInfoCircle} />
              <p>info@pcexpert.ba</p>
            </div>
            <div className="footer-sale-email">
              <EmailIcon />
              <p>prodaja@pcexpert.ba</p>
            </div>
            <div className="footer-number">
              <PhoneIcon />
              <p>+38765318132</p>
            </div>
          </div>
        </div>
        <div className="partners">
          <h3 className="partners-heading">Partneri</h3>
          <div className="single-partner">
            <Image src={partner} />
          </div>
          <div className="single-partner amazon">
            <Image src={amazon} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PreFooter;
