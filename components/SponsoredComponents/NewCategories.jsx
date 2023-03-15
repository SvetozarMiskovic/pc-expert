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
import EmptySale from "./EmptySale";
function NewCategories({ data }) {
  const [isOpen, setIsOpen] = useState(false);

  function getMultipleRandom(arr, num) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());

    return shuffled.slice(0, num);
  }

  const onToggle = () => {
    setIsOpen(prevState => !prevState);
  };

  const saleLaptops = data?.laptopi.filter(item => item?.akcija);
  const saleMonitors = data?.monitori.filter(item => item?.akcija);
  const saleTVs = data?.televizori.filter(item => item?.akcija);
  const salePhones = data?.telefoni.filter(item => item?.akcija);
  const salePerifery = data?.periferija.filter(item => item?.akcija);
  const saleComponents = data?.komponente.filter(item => item?.akcija);
  const saleComputers = data?.racunari.filter(item => item?.akcija);
  const saleMining = data?.mining.filter(item => item?.akcija);

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
        <Collapse
          in={isOpen}
          animateOpacity
          endingHeight={470}
          style={{ overflowY: "hidden", overflowX: "auto" }}
        >
          <TabPanels
            width={"100%"}
            height={"100%"}
            display={isOpen ? "flex" : "none"}
            // scrollbarGutter={"auto"}
            // margin="0.5rem"
          >
            <TabPanel width={"100%"}>
              <div className="new-category-items">
                {saleLaptops?.length === 0 && <EmptySale />}

                {saleLaptops?.map(item => {
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
            <TabPanel width={"100%"}>
              <div className="new-category-items">
                {saleMonitors?.length === 0 && <EmptySale />}

                {saleMonitors?.map(item => {
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
            <TabPanel width={"100%"}>
              <div className="new-category-items">
                {saleComputers?.length === 0 && <EmptySale />}

                {saleComputers?.map(item => {
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
            <TabPanel width={"100%"}>
              <div className="new-category-items">
                {saleTVs?.length === 0 && <EmptySale />}

                {saleTVs?.map(item => {
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
            <TabPanel width={"100%"}>
              <div className="new-category-items">
                {salePhones?.length === 0 && <EmptySale />}

                {salePhones?.map(item => {
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
            <TabPanel width={"100%"}>
              <div className="new-category-items">
                {saleComponents?.length === 0 && <EmptySale />}

                {saleComponents?.map(item => {
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
            <TabPanel width={"100%"}>
              <div className="new-category-items">
                {salePerifery?.length === 0 && <EmptySale />}

                {salePerifery?.map(item => {
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
            <TabPanel width={"100%"}>
              <div className="new-category-items">
                {saleMining?.length === 0 && <EmptySale />}
                {saleMining?.map(item => {
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
