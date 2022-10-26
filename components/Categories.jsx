import Link from "next/link";
import React from "react";

function Categories() {
  return (
    <div className="categories-wrapper">
      <div className="categories-header">
        <h3>Kategorije</h3>
      </div>
      <div className="categories-body">
        <div className="categories-list">
          <ul>
            <Link href={"#"}>
              <li>Laptopi</li>
            </Link>
            <Link href={"#"}>
              <li>Monitori</li>
            </Link>
            <Link href={"#"}>
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
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Categories;
