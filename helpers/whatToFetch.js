export const whatToFetch = async (category, db) => {
  switch (category) {
    case undefined: {
      const laptopi = await db.laptopi.findMany();
      const monitori = await db.monitori.findMany();
      const tv = await db.televizori.findMany();
      const telefoni = await db.telefoni.findMany();
      const racunari = await db.racunari.findMany();
      const periferija = await db.periferija.findMany();
      const komponente = await db.komponente.findMany();
      const mining = await db.mining.findMany();

      const res = [
        ...laptopi,
        ...monitori,
        ...tv,
        ...telefoni,
        ...racunari,
        ...periferija,
        ...komponente,
        ...mining,
      ];

      return res;
    }

    case "laptopi": {
      const res = await db.laptopi.findMany();
      return res;
    }

    case "monitori": {
      const res = await db.monitori.findMany();
      return res;
    }

    case "tv": {
      const res = await db.televizori.findMany();
      return res;
    }

    case "telefoni": {
      const res = await db.telefoni.findMany();
      return res;
    }

    case "racunari": {
      const res = await db.racunari.findMany();
      return res;
    }

    case "periferija": {
      const res = await db.periferija.findMany();
      return res;
    }
    case "komponente": {
      const res = await db.komponente.findMany();
      return res;
    }

    case "mining": {
      const res = await db.mining.findMany();
      return res;
    }
  }
};
