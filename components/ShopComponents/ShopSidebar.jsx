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
function ShopSidebar() {
  const router = useRouter();
  const { activeCategory } = useShopContext();

  const [isOpen, setIsOpen] = useState(() => {
    return router.asPath !== "/shop" ? true : false;
  });

  const [priceRange, setPriceRange] = useState([0, 3000]);
  const [isAllCat, setIsAllCat] = useState(() => {
    return router.asPath === "/shop" ? true : false;
  });

  const updateAllCat = () => {
    setIsAllCat(prevState => !prevState);
  };

  const updatePriceRange = price => {
    setPriceRange(price);
  };

  const onToggle = () => {
    setIsOpen(prevState => !prevState);
  };

  return (
    <div className="shop-sidebar-wrapper">
      <div className="shop-sidebar-container">
        <div className="shop-single-menu">
          <div
            className="shop-single-menu-header"
            onClick={router.asPath === "/shop" ? null : updateAllCat}
          >
            <Text fontSize={"xl"} color={"#5f5f5f"} fontWeight="bold">
              SVE KATEGORIJE
            </Text>
          </div>
          <Collapse in={isAllCat}>
            <div className="shop-single-menu-body">
              <Link href={"/shop/laptopi"}>
                <div className="shop-menu-link">
                  <Icon color={"#5f5f5f"} as={FaLaptop} fontSize={"xl"} />
                  <Text color={"#5f5f5f"} fontSize={"xl"}>
                    Laptopi
                  </Text>
                </div>
              </Link>
              <Link href={"/shop/monitori"}>
                <div className="shop-menu-link">
                  <Icon color={"#5f5f5f"} as={FaDesktop} fontSize={"xl"} />
                  <Text color={"#5f5f5f"} fontSize={"xl"}>
                    Monitori
                  </Text>
                </div>
              </Link>
              <Link href={"/shop/tv"}>
                <div className="shop-menu-link">
                  <Icon color={"#5f5f5f"} as={FaTv} fontSize={"xl"} />
                  <Text color={"#5f5f5f"} fontSize={"xl"}>
                    Televizori
                  </Text>
                </div>
              </Link>
              <Link href={"/shop/racunari"}>
                <div className="shop-menu-link">
                  <Icon color={"#5f5f5f"} as={FaWindows} fontSize={"xl"} />
                  <Text color={"#5f5f5f"} fontSize={"xl"}>
                    Računari
                  </Text>
                </div>
              </Link>
              <Link href={"/shop/telefoni"}>
                <div className="shop-menu-link">
                  <Icon color={"#5f5f5f"} as={FaMobileAlt} fontSize={"xl"} />
                  <Text color={"#5f5f5f"} fontSize={"xl"}>
                    Telefoni
                  </Text>
                </div>
              </Link>
              <Link href={"/shop/periferija"}>
                <div className="shop-menu-link">
                  <Icon color={"#5f5f5f"} as={FaKeyboard} fontSize={"xl"} />
                  <Text color={"#5f5f5f"} fontSize={"xl"}>
                    Računarska periferija
                  </Text>
                </div>
              </Link>
              <Link href={"/shop/komponente"}>
                <div className="shop-menu-link">
                  <Icon color={"#5f5f5f"} as={FaMemory} fontSize={"xl"} />
                  <Text color={"#5f5f5f"} fontSize={"xl"}>
                    Računarske komponente
                  </Text>
                </div>
              </Link>
              <Link href={"/shop/mining"}>
                <div className="shop-menu-link">
                  <Icon color={"#5f5f5f"} as={FaBitcoin} fontSize={"xl"} />
                  <Text color={"#5f5f5f"} fontSize={"xl"}>
                    Mining
                  </Text>
                </div>
              </Link>
            </div>
          </Collapse>
        </div>
        <div className="shop-single-menu">
          <div className="shop-single-menu-header">
            <Text fontSize={"xl"} color={"#5f5f5f"} fontWeight="bold">
              CIJENA
            </Text>
          </div>
          <div className="shop-single-menu-body">
            <RangeSlider
              max={3000}
              min={0}
              aria-label={["min", "max"]}
              defaultValue={[1, 3000]}
              onChangeEnd={updatePriceRange}
              colorScheme={"orange"}
            >
              <RangeSliderTrack>
                <RangeSliderFilledTrack />
              </RangeSliderTrack>
              <RangeSliderThumb index={0} />
              <RangeSliderThumb index={1} />
            </RangeSlider>
            <div className="price-range">
              <Text fontSize={"lg"} color={"#5f5f5f"} fontWeight={"bold"}>
                {priceRange?.[0]}
              </Text>
              <Text fontSize={"lg"} color={"#5f5f5f"} fontWeight={"bold"}>
                {priceRange?.[1]}
              </Text>
            </div>
          </div>
        </div>
        {!!activeCategory && generateSidebarFilters(activeCategory)}
      </div>
    </div>
  );
}

export default ShopSidebar;
