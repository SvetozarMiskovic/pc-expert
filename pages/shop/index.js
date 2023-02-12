import ShopComponent from "../../components/ShopComponents/ShopComponent";
import ShopLayout from "../../components/ShopComponents/ShopLayout";
import { whatToFetch } from "../../helpers/whatToFetch";
import { db } from "../../config/prismaClient";
import ShopContextProvider from "../../context/ShopContext";

export default function Shop({ cat, data }) {
  // console.log(`Iz sveg shopa:`, data);
  return (
    <ShopContextProvider>
      <div className="shop-page">
        <ShopLayout data={data}>
          <ShopComponent data={data} category={cat} />
        </ShopLayout>
      </div>
    </ShopContextProvider>
  );
}

export async function getServerSideProps(context) {
  const rez = await whatToFetch(context?.params?.category, db);

  // const final = rez.map(item => {
  //   item?.cijena = String(item?.cijena)
  //   item?.akcija = String(item?.akcija)

  //   return item
  // });

  return {
    props: {
      cat: !context.query.category && "all",
      data: !!rez ? JSON.parse(JSON.stringify(rez)) : [],
    },
  };
}
