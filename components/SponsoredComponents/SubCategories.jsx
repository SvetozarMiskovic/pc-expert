import React from "react";
import { useGlobalContext } from "../../context/GlobalContext";
import { generateSubMenu } from "../../utils/generateSubMenu";

function SubCategories() {
  const { openSub, closeSubMenu, subCategory, openSubMenu, updateSubCategory } =
    useGlobalContext();

  return (
    <div
      onMouseEnter={() => {
        openSubMenu();
      }}
      onMouseLeave={() => {
        closeSubMenu();
        updateSubCategory("");
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
