import ShopComponent from "../../components/ShopComponents/ShopComponent";
import ShopLayout from "../../components/ShopComponents/ShopLayout";
import { whatToFetch } from "../../helpers/whatToFetch";
import { db } from "../../config/prismaClient";
import ShopContextProvider from "../../context/ShopContext";

export default function Shop({ category, data }) {
  // console.log(`Iz sveg shopa:`, data);
  return (
    <ShopContextProvider>
      <div className="shop-page">
        <ShopLayout data={data}>
          <ShopComponent data={data} category={category} />
        </ShopLayout>
      </div>
    </ShopContextProvider>
  );
}

export async function getServerSideProps(context) {
  const rez = await whatToFetch(context.query.category, db);

  return {
    props: {
      cat: !context.query.category && null,
      data: !!rez ? rez : [],
    },
  };
}
