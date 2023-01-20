import React from "react";
import ShopCategory from "../../../components/ShopComponents/ShopCategory";
import ShopLayout from "../../../components/ShopComponents/ShopLayout";

// import { db } from "../../../config/prismaClient";

function Category({ cat, data }) {
  return (
    <div className="category-page">
      <ShopLayout>
        <ShopCategory />
      </ShopLayout>
    </div>
  );
}

export default Category;

// export async function getServerSideProps(context) {
//   const rez = await db.laptopi.findMany();
//   return {
//     props: {
//       cat: context.query.category,
//       data: rez,
//     },
//   };
// }
