export const getDBFields = async db => {
  const laptopField = await db.laptopi.findFirst();
  const monitorField = await db.monitori.findFirst();
  const tvField = await db.televizori.findFirst();
  const phoneField = await db.telefoni.findFirst();
  const componentField = await db.komponente.findFirst();
  const computerField = await db.racunari.findFirst();
  const miningField = await db.mining.findFirst();
  const periferyField = await db.periferija.findFirst();

  // const createEmptyValues = (object, value = "") => {
  //   const arr = Object.keys(laptopField);

  //   // console.log(arr);
  //   const obj = {};
  //   arr.forEach(val => {
  //     // console.log(val);
  //     obj[val] = value;
  //     // console.log("objeket", obj);
  //   });

  //   console.log(obj);
  // };
  // createEmptyValues(laptopField);

  return {
    laptop: Object.keys(laptopField),
    monitor: Object.keys(monitorField),
    tv: Object.keys(tvField),
    phone: Object.keys(phoneField),
    component: Object.keys(componentField),
    computer: Object.keys(computerField),
    mining: Object.keys(miningField),
    perifery: Object.keys(periferyField),
  };
};
