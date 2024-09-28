// import { get, ref } from "firebase/database";
// import { db } from "../config/firebase";

import { db } from "../config/prismaClient";

const getAllPropertiesQuery = async () => {
  // const productsRef = ref(db, "products");
  const lap = await db.laptopi.findMany();
  const mon = await db.monitori.findMany();
  const tel = await db.telefoni.findMany();
  const rac = await db.racunari.findMany();
  const komp = await db.komponente.findMany();
  const min = await db.mining.findMany();
  const per = await db.periferija.findMany();
  const tv = await db.tv.findMany();

  const properties = {
    laptopi: lap?.map((l) => {
      return Object.keys(l);
    })?.[0],
    monitori: mon?.map((l) => {
      return Object.keys(l);
    })?.[0],
    telefoni: tel?.map((l) => {
      return Object.keys(l);
    })?.[0],
    racunari: rac?.map((l) => {
      return Object.keys(l);
    })?.[0],
    komponente: komp?.map((l) => {
      return Object.keys(l);
    })?.[0],
    mining: min?.map((l) => {
      return Object.keys(l);
    })?.[0],
    periferija: per?.map((l) => {
      return Object.keys(l);
    })?.[0],
    tv: tv?.map((l) => {
      return Object.keys(l);
    })?.[0],
  };

  // console.log(properties);
  // let properties = {};

  // Object?.keys(products).map(key => {
  //   properties = { ...properties, [key]: Object?.keys(products?.[key]?.[0]) };
  // });

  return properties;
  // console.log("odje dobij sve propertijse produkata vjerovatno za shop kveri");
};

export { getAllPropertiesQuery };
