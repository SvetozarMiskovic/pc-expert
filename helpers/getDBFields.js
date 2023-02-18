export const getDBFields = async db => {
  const laptopField = await db.laptopi.findFirst();
  const monitorField = await db.monitori.findFirst();
  const tvField = await db.televizori.findFirst();
  const phoneField = await db.telefoni.findFirst();
  const componentField = await db.komponente.findFirst();
  const computerField = await db.racunari.findFirst();
  const miningField = await db.mining.findFirst();
  const periferyField = await db.periferija.findFirst();

  return {
    laptop: Object.keys(laptopField).sort(),
    monitor: Object.keys(monitorField).sort(),
    tv: Object.keys(tvField).sort(),
    phone: Object.keys(phoneField).sort(),
    component: Object.keys(componentField).sort(),
    computer: Object.keys(computerField).sort(),
    mining: Object.keys(miningField).sort(),
    perifery: Object.keys(periferyField).sort(),
  };
};
