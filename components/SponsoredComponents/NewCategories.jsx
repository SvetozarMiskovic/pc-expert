import React, { useState } from "react";
import {
  FaMemory,
  FaMobileAlt,
  FaLaptop,
  FaKeyboard,
  FaDesktop,
  FaTv,
  FaBitcoin,
  FaWindows,
} from "react-icons/fa";

import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Text,
  Icon,
  Collapse,
} from "@chakra-ui/react";
function NewCategories() {
  const [isOpen, setIsOpen] = useState(false);

  const onToggle = () => {
    setIsOpen(prevState => !prevState);
  };

  return (
    <div className="new-categories-wrapper">
      {/* <Button onClick={onToggle}>Click Me</Button> */}

      <Tabs
        variant="line"
        backgroundColor={"#fff"}
        rounded={"xl"}
        isFitted
        boxShadow={"0 0 6px 0 rgb(1 1 1 / 30%)"}
      >
        <TabList overflowX={"auto"} overflowY={"hidden"}>
          <Tab
            onClick={() => {
              if (isOpen) {
                return;
              } else {
                onToggle();
              }
            }}
            onDoubleClick={onToggle}
            display={"flex"}
            alignItems="center"
            gap={"0.4rem"}
          >
            <Icon as={FaLaptop} />
            <Text fontSize={"md"}>Laptopi</Text>
          </Tab>
          <Tab
            onClick={() => {
              if (isOpen) {
                return;
              } else {
                onToggle();
              }
            }}
            onDoubleClick={onToggle}
            display={"flex"}
            alignItems="center"
            gap={"0.4rem"}
          >
            <Icon as={FaDesktop} />
            <Text fontSize={"md"}>Monitori</Text>
          </Tab>
          <Tab
            onClick={() => {
              if (isOpen) {
                return;
              } else {
                onToggle();
              }
            }}
            onDoubleClick={onToggle}
            display={"flex"}
            alignItems="center"
            gap={"0.4rem"}
          >
            <Icon as={FaWindows} />
            <Text fontSize={"md"}>Računari</Text>
          </Tab>
          <Tab
            onClick={() => {
              if (isOpen) {
                return;
              } else {
                onToggle();
              }
            }}
            onDoubleClick={onToggle}
            display={"flex"}
            alignItems="center"
            gap={"0.4rem"}
          >
            <Icon as={FaTv} />
            <Text fontSize={"md"}>Televizori</Text>
          </Tab>
          <Tab
            onClick={() => {
              if (isOpen) {
                return;
              } else {
                onToggle();
              }
            }}
            onDoubleClick={onToggle}
            display={"flex"}
            alignItems="center"
            gap={"0.4rem"}
          >
            <Icon as={FaMobileAlt} />
            <Text fontSize={"md"}>Telefoni</Text>
          </Tab>
          <Tab
            onClick={() => {
              if (isOpen) {
                return;
              } else {
                onToggle();
              }
            }}
            onDoubleClick={onToggle}
            display={"flex"}
            alignItems="center"
            gap={"0.4rem"}
          >
            <Icon as={FaMemory} />
            <Text fontSize={"md"}>Računarske komponente</Text>
          </Tab>
          <Tab
            onClick={() => {
              if (isOpen) {
                return;
              } else {
                onToggle();
              }
            }}
            onDoubleClick={onToggle}
            display={"flex"}
            alignItems="center"
            gap={"0.4rem"}
          >
            <Icon as={FaKeyboard} />
            <Text fontSize={"md"}>Računarska periferija</Text>
          </Tab>
          <Tab
            onClick={() => {
              if (isOpen) {
                return;
              } else {
                onToggle();
              }
            }}
            onDoubleClick={onToggle}
            display={"flex"}
            alignItems="center"
            gap={"0.4rem"}
          >
            <Icon as={FaBitcoin} />
            <Text fontSize={"md"}>Mining </Text>
          </Tab>
        </TabList>
        <Collapse in={isOpen} animateOpacity endingHeight={"200px"}>
          <TabPanels display={isOpen ? "block" : "none"}>
            <TabPanel>
              <Text fontSize={"2xl"}>Proizvođač</Text>
              <ul>
                <div className="value">
                  <h5>Acer</h5>
                </div>
                <div className="value">
                  <h5>Asus</h5>
                </div>
                <div className="value">
                  <h5>Dell</h5>
                </div>
                <div className="value">
                  <h5>Apple</h5>
                </div>
              </ul>
            </TabPanel>
            <TabPanel>
              <Text fontSize={"2xl"}>Proizvođač</Text>

              <ul>
                <div className="value">
                  <h5>Acer</h5>
                </div>
                <div className="value">
                  <h5>Asus</h5>
                </div>
                <div className="value">
                  <h5>AOC</h5>
                </div>
                <div className="value">
                  <h5>Dell</h5>
                </div>
              </ul>
            </TabPanel>
            <TabPanel>
              <p>Računari</p>
            </TabPanel>
            <TabPanel>
              <p>Televizori</p>
            </TabPanel>
            <TabPanel>
              <p>Telefoni</p>
            </TabPanel>
            <TabPanel>
              <p>Računarske komponente</p>
            </TabPanel>
            <TabPanel>
              <p>Računarska periferija</p>
            </TabPanel>
            <TabPanel>
              <p>Mining</p>
            </TabPanel>
          </TabPanels>
        </Collapse>
      </Tabs>
    </div>
  );
}

export default NewCategories;
