import React from "react";
import {
  BsFillGrid3X3GapFill,
  BsFillGrid3X2GapFill,
  BsListUl,
} from "react-icons/bs";
import { Icon, Text, Select } from "@chakra-ui/react";
import { useShopContext } from "../../context/ShopContext";
function ShopHeaderBar() {
  const { activeView, updateActiveView } = useShopContext();

  return (
    <div className="shop-category-header">
      <div className="shop-category-header-count">
        <Text fontSize={"lg"} display={"inline"} color={"#0c0c0d"}>
          Stavki po stranici:
        </Text>
        <Select
          cursor={"pointer"}
          outline={"none"}
          border={"none"}
          variant={"filled"}
          width={75}
          backgroundColor={"#eaedf1"}
          _active={{ backgroundColor: "#eaedf1" }}
          _focus={{ backgroundColor: "#eaedf1" }}
          _hover={{ backgroundColor: "#eaedf1" }}
          color={"#0c0c0d"}
        >
          <option value={8}>8</option>
          <option value={16}>16</option>
          <option value={32}>32</option>
          <option value={40}>40</option>
          <option value={100}>100</option>
        </Select>
      </div>
      <div className="shop-category-header-sort">
        <Text fontSize={"lg"} color={"#0c0c0d"} display={"inline"}>
          Sortiraj:
        </Text>
        <Select
          cursor={"pointer"}
          outline={"none"}
          border={"none"}
          variant={"filled"}
          width={220}
          backgroundColor={"#eaedf1"}
          _active={{ backgroundColor: "#eaedf1" }}
          _focus={{ backgroundColor: "#eaedf1" }}
          _hover={{ backgroundColor: "#eaedf1" }}
          color={"#0c0c0d"}
        >
          <option value={"min-cijena"}>Cijena: Prema najmanjoj</option>
          <option value={"max-cijena"}>Cijena: Prema najvecoj</option>
        </Select>
      </div>
      <div className="shop-category-header-count-view">
        <Text fontSize={"lg"} color={"#0c0c0d"}>
          1-8{" "}
        </Text>
        <Text fontSize={"lg"} color={"#0c0c0d"}>
          od
        </Text>
        <Text fontSize={"lg"} color={"#0c0c0d"}>
          74
        </Text>
      </div>
    </div>
  );
}

export default ShopHeaderBar;
