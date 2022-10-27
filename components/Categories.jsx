import React from "react";
import { FaThList } from "react-icons/fa";
import { Icon } from "@chakra-ui/icons";
import CategoriesPopover from "./CategoriesPopover";
import Link from "next/link";
const arr = [
  "Laptopi",
  "Monitori",
  "Racunari i komponente",
  "Televizori",
  "Telefoni",
  "Printeri i skeneri",
  "Mrezna oprema i kamere",
  "Mining",
];
function Categories() {
  return (
    <div className="categories-wrapper">
      <div className="categories-header">
        <Icon as={FaThList} />
        <h3>Kategorije</h3>
      </div>
      <div className="categories-body">
        <div className="categories-list">
          <ul>
            {arr.map(item => {
              return (
                <div key={item} className="single-category">
                  <CategoriesPopover>
                    <div>{item}</div>
                  </CategoriesPopover>
                </div>
              );
            })}
            {/* <div className="single-category">
              <CategoriesPopover>
                <div>Laptopi</div>
              </CategoriesPopover>
            </div>
            <div className="single-category">
              <CategoriesPopover>
                <div>Monitori</div>
              </CategoriesPopover>
            </div>
            <div className="single-category">
              <CategoriesPopover>
                <div>Racunari i komponente</div>
              </CategoriesPopover>
            </div>
            <div className="single-category">
              <CategoriesPopover>
                <div>Televizori</div>
              </CategoriesPopover>
            </div>
            <div className="single-category">
              <CategoriesPopover>
                <div>Telefoni</div>
              </CategoriesPopover>
            </div>
            <div className="single-category">
              <CategoriesPopover>
                <div>Printeri i skeneri</div>
              </CategoriesPopover>
            </div>
            <div className="single-category">
              <CategoriesPopover>
                <div>Mrezna oprema i kamere</div>
              </CategoriesPopover>
            </div>
            <div className="single-category">
              <CategoriesPopover>
                <div>Mining oprema</div>
              </CategoriesPopover>
            </div> */}
            {/* <Link href={"#"}>
              <li>Racunari i komponente</li>
            </Link>
            <Link href={"#"}>
              <li>Televizori</li>
            </Link>
            <Link href={"#"}>
              <li>Telefoni</li>
            </Link>
            <Link href={"#"}>
              <li>Printeri i skeneri</li>
            </Link>
            <Link href={"#"}>
              <li>Mrezna oprema i kamere</li>
            </Link>
            <Link href={"#"}>
              <li>Mining oprema</li>
            </Link> */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Categories;
