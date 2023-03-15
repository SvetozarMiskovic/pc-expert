export const getDBData = async db => {
  const laptopFields = await db.laptopi.findMany();
  const monitorFields = await db.monitori.findMany();
  const tvFields = await db.televizori.findMany();
  const phoneFields = await db.telefoni.findMany();
  const componentFields = await db.komponente.findMany();
  const computerFields = await db.racunari.findMany();
  const miningFields = await db.mining.findMany();
  const periferyFields = await db.periferija.findMany();

  return {
    laptop: laptopFields.sort(),
    monitor: monitorFields.sort(),
    tv: tvFields.sort(),
    phone: phoneFields.sort(),
    component: componentFields.sort(),
    computer: computerFields.sort(),
    mining: miningFields.sort(),
    perifery: periferyFields.sort(),
  };
};
