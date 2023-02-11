import React from "react";
import Image from "next/image";

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
      <div className=" pre-footer-child container">
        <div className="contact">
          <div className="footer-logo">
            <Image width={100} height={100} src="/static/T1.png" alt="logo" />
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
              <p>+387 66 777-735</p>
            </div>
          </div>
        </div>
        <div className="partners">
          <h3 className="partners-heading">Partneri</h3>
          <div className="single-partner-wrapper">
            <div className="single-partner">
              <Image
                width={300}
                height={150}
                src={"/static/Prointer.png"}
                alt="partner"
              />
            </div>
            <div className="single-partner amazon">
              <Image
                width={300}
                height={150}
                src={"/static/amazon-logo-transparent.png"}
                alt="partner"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PreFooter;
