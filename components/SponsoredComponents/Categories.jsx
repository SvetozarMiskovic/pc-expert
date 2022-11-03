import React, { useState } from "react";
import { FaThList } from "react-icons/fa";
import { Icon } from "@chakra-ui/icons";
import { LinkBox, LinkOverlay } from "@chakra-ui/react";

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
  const [isHidden, setIsHidden] = useState(true);
  return (
    <div className="categories-wrapper">
      <div className="categories-header">
        <Icon as={FaThList} />
        <h3>Kategorije</h3>
      </div>
      <div className="categories-body">
        <div className="categories-list">
          <ul>
            <div className="single-category">
              <LinkBox>
                <LinkOverlay href="laptopi">Laptopi</LinkOverlay>
              </LinkBox>
            </div>
            <div className="single-category">
              <LinkBox>
                <LinkOverlay href="monitori">Monitori</LinkOverlay>
              </LinkBox>
            </div>
            <div className="single-category">
              <LinkBox>
                <LinkOverlay href="racunari">Racunari i komponente</LinkOverlay>
              </LinkBox>
            </div>
            <div className="single-category">
              <LinkBox>
                <LinkOverlay href="televizori">Televizori</LinkOverlay>
              </LinkBox>
            </div>
            <div className="single-category">
              <LinkBox>
                <LinkOverlay href="telefoni">Telefoni</LinkOverlay>
              </LinkBox>
            </div>
            <div className="single-category">
              <LinkBox>
                <LinkOverlay href="printeri_i_skeneri">
                  Printeri i skeneri
                </LinkOverlay>
              </LinkBox>
              <h2
                onMouseEnter={() => {
                  setIsHidden(false);
                }}
                onMouseLeave={() => {
                  setIsHidden(true);
                }}
              >
                {">"}
              </h2>
              {!isHidden ? "STARIMOJ" : null}
            </div>
            <div className="single-category">
              <LinkBox>
                <LinkOverlay href="mrezna_oprema">
                  Mrezna oprema i kamere
                </LinkOverlay>
              </LinkBox>
            </div>
            <div className="single-category">
              <LinkBox>
                <LinkOverlay href="mining">Mining</LinkOverlay>
              </LinkBox>
            </div>
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
