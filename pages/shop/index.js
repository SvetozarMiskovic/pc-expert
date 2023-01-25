import ShopComponent from "../../components/ShopComponents/ShopComponent";
import ShopLayout from "../../components/ShopComponents/ShopLayout";
// import { whatToFetch } from "../../helpers/whatToFetch";
// import { db } from "../../config/prismaClient";
import ShopContextProvider from "../../context/ShopContext";

export default function Shop() {
  return (
    <ShopContextProvider>
      <div className="shop-page">
        <ShopLayout>
          <ShopComponent />
        </ShopLayout>
      </div>
    </ShopContextProvider>
  );
}

// export async function getServerSideProps(context) {
//   const rez = await whatToFetch(context.query, db);
//   // console.log(context.query);
//   return {
//     props: {
//       rez: !!rez && null,
//     },
//   };
// }
