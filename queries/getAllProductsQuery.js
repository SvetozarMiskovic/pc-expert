import { db } from "../config/prismaClient";

const getAllProductsQuery = async () => {
  const lap = await db.laptopi.findMany();
  const mon = await db.monitori.findMany();
  const tel = await db.telefoni.findMany();
  const rac = await db.racunari.findMany();
  const komp = await db.komponente.findMany();
  const min = await db.mining.findMany();
  const per = await db.periferija.findMany();
  const tv = await db.tv.findMany();
  // console.log("TEVEJOVI", await db.tv.findMany());
  // console.log(tv, "EVO TEVEJOVA");
  const data = {
    laptopi: lap,
    monitori: mon,
    tv: tv,
    telefoni: tel,
    racunari: rac,
    komponente: komp,
    mining: min,
    periferija: per,
  };

  // console.log("ODJE IZ KVERIJA ODMA NAKON EJPI AJA", data);
  // const productsRef = ref(db, "products");

  return data;
  // const products = await get(productsRef).then(snapshot => {
  //   const value = snapshot.val();
  //   return value;
  // });

  // let final = {};

  // Object.keys(products).map(key => {
  //   // let obj = { [key]:  };
  //   final[key] = Object.values(products?.[key]);
  // });
  // // console.log(final);
  // return final;
  // console.log("odje dobij sve produkte kveri");
};

export { getAllProductsQuery };
