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
import { Text } from "@chakra-ui/react";
function FeatureList() {
  return (
    <div className="feature-wrapper">
      <div className="features">
        <div className="feature">
          <div className="feature-header">
            <Icon as={FaTruck} />
            <Text fontSize="md" fontWeight={"bold"}>
              Euroexpress 24h
            </Text>
          </div>
          <div className="feature-body">
            <Text fontSize="md">dostava unutar BIH</Text>
          </div>
        </div>
        <div className="feature">
          <div className="feature-header">
            <Icon as={FaTag} />
            <Text fontSize="md" fontWeight={"bold"}>
              Brendovi
            </Text>
          </div>
          <div className="feature-body">
            <Text fontSize="md">samo najbolji</Text>
          </div>
        </div>
        <div className="feature">
          <div className="feature-header">
            <Icon as={FaCreditCard} />
            <Text fontSize="md" fontWeight={"bold"}>
              Plaćanje
            </Text>
          </div>
          <div className="feature-body">
            <Text fontSize="md">sigurno i brzo</Text>
          </div>
        </div>
        <div className="feature">
          <div className="feature-header">
            <Icon as={FaHandshake} />
            <Text fontSize="md" fontWeight={"bold"}>
              Garancija
            </Text>
          </div>
          <div className="feature-body">
            <Text fontSize="md">na sve uređaje</Text>
          </div>
        </div>
        <div className="feature">
          <div className="feature-header">
            <Icon as={FaMoneyBillWave} />
            <Text fontSize="md" fontWeight={"bold"}>
              Vraćamo novac
            </Text>
          </div>
          <div className="feature-body">
            <Text fontSize="md">ukolike niste zadovoljni</Text>
          </div>
        </div>
        <div className="feature">
          <div className="feature-header">
            <Icon as={FaTools} />
            <Text fontSize="md" fontWeight={"bold"}>
              Servisiranje uređaja
            </Text>
          </div>
          <div className="feature-body">
            <Text fontSize="md">za sve kupce</Text>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="feature">
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
          </div> */
}

export default FeatureList;
