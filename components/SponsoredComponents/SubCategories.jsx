import React from "react";
import { useGlobalContext } from "../../context/GlobalContext";
import { generateSubMenu } from "../../utils/generateSubMenu";

function SubCategories() {
  const { openSub, closeSubMenu, subCategory, openSubMenu } =
    useGlobalContext();

  return (
    <div
      onMouseEnter={() => {
        openSubMenu();
      }}
      onMouseLeave={() => {
        closeSubMenu();
      }}
      className={
        !openSub ? "categories-menu-wrapper" : "categories-menu-wrapper desktop"
      }
    >
      {generateSubMenu(subCategory)}
    </div>
  );
}

export default SubCategories;
