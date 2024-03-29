import React, { useEffect, useRef, useState } from "react";
import { Fade, Text } from "@chakra-ui/react";
import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Icon,
  Collapse,
} from "@chakra-ui/react";
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
import Link from "next/link";
import { useRouter } from "next/router";
import { useShopContext } from "../../context/ShopContext";
import { generateSidebarFilters } from "../../helpers/generateSidebarFilters";
import Akcija from "./ShopSidebarMenus/Akcija";

function ShopSidebar({ data }) {
  const router = useRouter();
  const { activeCategory, updateActiveFilters, priceRange, updatePriceRange } =
    useShopContext();

  const [isPrice, setIsPrice] = useState(true);
  const [isAllCat, setIsAllCat] = useState(true);

  const updateIsPrice = () => {
    setIsPrice(prevState => !prevState);
  };
  const updateAllCat = () => {
    setIsAllCat(prevState => !prevState);
  };

  return (
    <div className="shop-sidebar-wrapper">
      <div className="shop-sidebar-container">
        <div className="shop-single-menu">
          <div
            className="shop-single-menu-header"
            onClick={() => updateAllCat()}
          >
            <Text
              fontSize={"lg"}
              paddingLeft={"0.4rem"}
              color={"#0c0c0d"}
              fontWeight="bold"
            >
              Sve kategorije
            </Text>
          </div>
          <Collapse in={isAllCat}>
            <div className="shop-single-menu-body">
              <Link href={"/shop/laptopi"}>
                <div className="shop-menu-link">
                  <Icon color={"#0c0c0d"} as={FaLaptop} fontSize={"xl"} />
                  <Text color={"#0c0c0d"} fontSize={"lg"}>
                    Laptopi
                  </Text>
                </div>
              </Link>
              <Link href={"/shop/monitori"}>
                <div className="shop-menu-link">
                  <Icon color={"#0c0c0d"} as={FaDesktop} fontSize={"xl"} />
                  <Text color={"#0c0c0d"} fontSize={"lg"}>
                    Monitori
                  </Text>
                </div>
              </Link>
              <Link href={"/shop/tv"}>
                <div className="shop-menu-link">
                  <Icon color={"#0c0c0d"} as={FaTv} fontSize={"xl"} />
                  <Text color={"#0c0c0d"} fontSize={"lg"}>
                    Televizori
                  </Text>
                </div>
              </Link>
              <Link href={"/shop/racunari"}>
                <div className="shop-menu-link">
                  <Icon color={"#0c0c0d"} as={FaWindows} fontSize={"xl"} />
                  <Text color={"#0c0c0d"} fontSize={"lg"}>
                    Računari
                  </Text>
                </div>
              </Link>
              <Link href={"/shop/telefoni"}>
                <div className="shop-menu-link">
                  <Icon color={"#0c0c0d"} as={FaMobileAlt} fontSize={"xl"} />
                  <Text color={"#0c0c0d"} fontSize={"lg"}>
                    Telefoni
                  </Text>
                </div>
              </Link>
              <Link href={"/shop/periferija"}>
                <div className="shop-menu-link">
                  <Icon color={"#0c0c0d"} as={FaKeyboard} fontSize={"xl"} />
                  <Text color={"#0c0c0d"} fontSize={"lg"}>
                    Računarska periferija
                  </Text>
                </div>
              </Link>
              <Link href={"/shop/komponente"}>
                <div className="shop-menu-link">
                  <Icon color={"#0c0c0d"} as={FaMemory} fontSize={"xl"} />
                  <Text color={"#0c0c0d"} fontSize={"lg"}>
                    Računarske komponente
                  </Text>
                </div>
              </Link>
              <Link href={"/shop/mining"}>
                <div className="shop-menu-link">
                  <Icon color={"#0c0c0d"} as={FaBitcoin} fontSize={"xl"} />
                  <Text color={"#0c0c0d"} fontSize={"lg"}>
                    Mining
                  </Text>
                </div>
              </Link>
            </div>
          </Collapse>
        </div>
        <div className="shop-single-menu">
          <div
            className="shop-single-menu-header"
            onClick={router.asPath === "/shop" ? updateIsPrice : updateIsPrice}
          >
            <Text
              paddingLeft={"0.4rem"}
              fontSize={"lg"}
              color={"#0c0c0d"}
              fontWeight="bold"
            >
              Cijena
            </Text>
          </div>
          <Collapse in={isPrice}>
            <div className="shop-single-menu-body">
              <RangeSlider
                max={12000}
                min={0}
                aria-label={["min", "max"]}
                defaultValue={[1, 12000]}
                onChangeEnd={updatePriceRange}
                // colorScheme={"green"}
              >
                <RangeSliderTrack>
                  <RangeSliderFilledTrack bg={"#4CBB17"} />
                </RangeSliderTrack>
                <RangeSliderThumb bg={"#eaedf1"} index={0} />
                <RangeSliderThumb bg={"#eaedf1"} index={1} />
              </RangeSlider>
              <div className="price-range">
                <Text fontSize={"lg"} color={"#0c0c0d"} fontWeight={"bold"}>
                  {priceRange?.[0]}
                </Text>
                <Text fontSize={"lg"} color={"#0c0c0d"} fontWeight={"bold"}>
                  {priceRange?.[1]}
                </Text>
              </div>
            </div>
          </Collapse>
        </div>
        <Akcija />
        {!!activeCategory && generateSidebarFilters(activeCategory)}
      </div>
    </div>
  );
}

export default ShopSidebar;
