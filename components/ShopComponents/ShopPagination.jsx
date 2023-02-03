import React from "react";

function ShopPagination({
  items,
  currentPage,
  pageSize,
  onPageChange,
  nextPage,
  prevPage,
}) {
  const pagesCount = Math.ceil(items / pageSize); // 100/10

  if (pagesCount === 1) return null;
  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);
  console.log(pages);

  return (
    <nav className="shop-pagination-wrapper">
      <ul className="pagination">
        <a
          onClick={() => {
            if (currentPage > 1) prevPage(Number(currentPage));
          }}
          className={"page-button"}
        >
          Prethodna
        </a>
        {pages.map(p => {
          return (
            <li
              key={p}
              onClick={() => onPageChange(p)}
              className={p === currentPage ? "page-item active" : "page-item"}
            >
              <a className="page-link" href="#">
                {p}
              </a>
            </li>
          );
        })}
        <a
          onClick={() => {
            if (currentPage !== pagesCount) nextPage(Number(currentPage));
          }}
          className={"page-button"}
        >
          Sledeca
        </a>
      </ul>
    </nav>
  );
}

export default ShopPagination;
