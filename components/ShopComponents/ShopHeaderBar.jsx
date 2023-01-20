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
      <div className="shop-category-header-view">
        <div
          onClick={() => updateActiveView("list")}
          className={
            activeView === "list"
              ? "shop-category-header-view-option-active"
              : "shop-category-header-view-option"
          }
        >
          <Icon as={BsListUl} fontSize={"3xl"} color={"#5f5f5f"} />
        </div>
        <div
          onClick={() => updateActiveView("flex")}
          className={
            activeView === "flex"
              ? "shop-category-header-view-option-active"
              : "shop-category-header-view-option"
          }
        >
          <Icon as={BsFillGrid3X2GapFill} fontSize={"3xl"} color={"#5f5f5f"} />
        </div>
        <div
          onClick={() => updateActiveView("grid")}
          className={
            activeView === "grid"
              ? "shop-category-header-view-option-active"
              : "shop-category-header-view-option"
          }
        >
          <Icon as={BsFillGrid3X3GapFill} fontSize={"3xl"} color={"#5f5f5f"} />
        </div>
      </div>
      <div className="shop-category-header-count">
        <Text fontSize={"lg"} display={"inline"}>
          Stavki po stranici:
        </Text>
        <Select
          cursor={"pointer"}
          outline={"none"}
          border={"none"}
          variant={"filled"}
          width={75}
        >
          <option value={8}>8</option>
          <option value={16}>16</option>
          <option value={32}>32</option>
          <option value={40}>40</option>
          <option value={100}>100</option>
        </Select>
      </div>
      <div className="shop-category-header-sort">
        <Text fontSize={"lg"} display={"inline"}>
          Sortiraj:
        </Text>
        <Select
          cursor={"pointer"}
          outline={"none"}
          border={"none"}
          variant={"filled"}
          width={220}
        >
          <option value={"min-cijena"}>Cijena: Prema najmanjoj</option>
          <option value={"max-cijena"}>Cijena: Prema najvecoj</option>
        </Select>
      </div>
      <div className="shop-category-header-count-view">
        <Text fontSize={"lg"}>1-8 </Text>
        <Text fontSize={"lg"}>od</Text>
        <Text fontSize={"lg"}>74</Text>
      </div>
    </div>
  );
}

export default ShopHeaderBar;
