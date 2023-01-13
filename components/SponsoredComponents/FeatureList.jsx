import React from "react";
import {
  FaTruck,
  FaTag,
  FaCreditCard,
  FaHandshake,
  FaMoneyBillWave,
  FaTools,
} from "react-icons/fa";
import { Icon } from "@chakra-ui/icons";

function FeatureList({ klasa }) {
  return (
    <div
      className={
        klasa === "mobile"
          ? "feature-wrapper mobile"
          : "feature-wrapper desktop"
      }
    >
      <div className="features">
        <div className="feature">
          <div className="left-part">
            <Icon as={FaTruck} />
          </div>
          <div className="middle-part">
            <h6>Euroexpress 24h</h6>
            <p>dostava unutar BIH</p>
          </div>
        </div>
        <div className="feature">
          <div className="left-part">
            <Icon as={FaTag} />
          </div>
          <div className="middle-part">
            <h6>Brendovi</h6>
            <p>samo najbolji</p>
          </div>
        </div>
        <div className="feature">
          <div className="left-part">
            <Icon as={FaCreditCard} />
          </div>
          <div className="middle-part">
            <h6>Plaćanje</h6>
            <p>sigurno i brzo</p>
          </div>
        </div>
        <div className="feature">
          <div className="left-part">
            <Icon as={FaHandshake} />
          </div>
          <div className="middle-part">
            <h6>Garancija</h6>
            <p>na sve uređaje</p>
          </div>
        </div>
        <div className="feature">
          <div className="left-part">
            <Icon as={FaMoneyBillWave} />
          </div>
          <div className="middle-part">
            <h6>Vraćamo novac</h6>
            <p>ukoliko niste zadovoljni</p>
          </div>
        </div>
        <div className="feature">
          <div className="left-part">
            <Icon as={FaTools} />
          </div>
          <div className="middle-part">
            <h6>Servisiranje uređaja</h6>
            <p>za sve kupce</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureList;
