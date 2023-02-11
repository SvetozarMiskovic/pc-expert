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
import ShopCategoryItem from "../ShopComponents/ShopCategoryItem";
function NewCategories({ data }) {
  const [isOpen, setIsOpen] = useState(false);

  console.log(data);
  function getMultipleRandom(arr, num) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());

    return shuffled.slice(0, num);
  }

  const onToggle = () => {
    setIsOpen(prevState => !prevState);
  };
  const randomLaptops = getMultipleRandom(data?.laptopi, 4);
  const randomMonitors = getMultipleRandom(data?.monitori, 4);
  const randomTVs = getMultipleRandom(data?.televizori, 4);
  const randomPhones = getMultipleRandom(data?.telefoni, 4);
  const randomPerifery = getMultipleRandom(data?.periferija, 4);
  const randomComponents = getMultipleRandom(data?.komponente, 4);
  const randomComputers = getMultipleRandom(data?.racunari, 4);
  const randomMining = getMultipleRandom(data?.mining, 4);
  console.log(randomLaptops);

  return (
    <div className="new-categories-wrapper">
      <Text fontSize={"3xl"} textAlign="center" padding={"1rem 0"}>
        Proizvodi na akciji
      </Text>
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
        <Collapse in={isOpen} animateOpacity endingHeight={450}>
          <TabPanels
            display={isOpen ? "inline-block" : "none"}
            overflowX={"auto"}
            // margin="0.5rem"
          >
            <TabPanel>
              <div className="new-category-items">
                {randomLaptops?.map(item => {
                  return (
                    <ShopCategoryItem
                      key={item?.id}
                      dataAll={item}
                      category={"all"}
                    />
                  );
                })}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="new-category-items">
                {randomMonitors?.map(item => {
                  return (
                    <ShopCategoryItem
                      key={item?.id}
                      dataAll={item}
                      category={"all"}
                    />
                  );
                })}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="new-category-items">
                {randomComputers?.map(item => {
                  return (
                    <ShopCategoryItem
                      key={item?.id}
                      dataAll={item}
                      category={"all"}
                    />
                  );
                })}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="new-category-items">
                {randomTVs?.map(item => {
                  return (
                    <ShopCategoryItem
                      key={item?.id}
                      dataAll={item}
                      category={"all"}
                    />
                  );
                })}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="new-category-items">
                {randomPhones?.map(item => {
                  return (
                    <ShopCategoryItem
                      key={item?.id}
                      dataAll={item}
                      category={"all"}
                    />
                  );
                })}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="new-category-items">
                {randomComponents?.map(item => {
                  return (
                    <ShopCategoryItem
                      key={item?.id}
                      dataAll={item}
                      category={"all"}
                    />
                  );
                })}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="new-category-items">
                {randomPerifery?.map(item => {
                  return (
                    <ShopCategoryItem
                      key={item?.id}
                      dataAll={item}
                      category={"all"}
                    />
                  );
                })}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="new-category-items">
                {randomMining?.map(item => {
                  return (
                    <ShopCategoryItem
                      key={item?.id}
                      dataAll={item}
                      category={"all"}
                    />
                  );
                })}
              </div>
            </TabPanel>
          </TabPanels>
        </Collapse>
      </Tabs>
    </div>
  );
}

export default NewCategories;
