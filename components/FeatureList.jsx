import React from "react";
import { FaTruck, FaTag, FaCreditCard, FaHandshake } from "react-icons/fa";
import { Icon } from "@chakra-ui/icons";

function FeatureList() {
  return (
    <div className="feature-wrapper">
      <div className="features">
        <div className="feature">
          <div className="left-part">
            <Icon as={FaTruck} />
          </div>
          <div className="middle-part">
            <p>Brza dostava u cijeloj BIH</p>
          </div>
        </div>
        <div className="feature">
          <div className="left-part">
            <Icon as={FaTag} />
          </div>
          <div className="middle-part">
            <p>Samo najbolji brendovi</p>
          </div>
        </div>
        <div className="feature">
          <div className="left-part">
            <Icon as={FaCreditCard} />
          </div>
          <div className="middle-part">
            <p>Siguran sistem plaćanja</p>
          </div>
        </div>
        <div className="feature">
          <div className="left-part">
            <Icon as={FaHandshake} />
          </div>
          <div className="middle-part">
            <p>Plaćanje artikla pouzećem</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureList;
