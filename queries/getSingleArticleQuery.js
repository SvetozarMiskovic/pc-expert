import { db } from "../config/prismaClient";
import { getAllProductsQuery } from "./getAllProductsQuery";

const getSingleArticleQuery = async (category, id) => {
  if (category === "all") {
    const lap = await db.laptopi.findMany();
    const mon = await db.monitori.findMany();
    const tel = await db.telefoni.findMany();
    const rac = await db.racunari.findMany();
    const komp = await db.komponente.findMany();
    const min = await db.mining.findMany();
    const per = await db.periferija.findMany();
    const tv = await db.tv.findMany();

    const allProducts = [
      ...lap,
      ...mon,
      ...tel,
      ...rac,
      ...komp,
      ...min,
      ...per,
      ...tv,
    ];

    console.log("SVI PRODUKTI", allProducts);
    const product = allProducts?.find((item) => item?.id === id);

    console.log("JEDAN PRODUKTI", product);
    return product;
  } else {
    const product = await db?.[category]?.findUnique({
      where: {
        id,
      },
    });

    return product;
  }
};

export { getSingleArticleQuery };
