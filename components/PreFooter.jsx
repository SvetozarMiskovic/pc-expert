import React from "react";
import Image from "next/image";
import logo from "../assets/T1.png";
import partner from "../assets/Prointer.png";
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
            <h3>PC Expert Prodavnica</h3>
          </div>
          <div className="small-text">
            <p>
              Imate pitanje ili zelite da narucite uredjaj koji trenutno nije u
              ponudi?
            </p>
            <p>Kontaktirajte nas na bilo koji od navedenih nacina!</p>
          </div>
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
            <div className="footer-address">
              <Icon as={FaLocationArrow} />
              <div>
                <p>Celinac 78240</p>
              </div>
            </div>
          </div>
        </div>
        <div className="partners">
          <h3 className="partners-heading">Partners</h3>
          <div className="single-partner">
            <Image src={partner} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PreFooter;
