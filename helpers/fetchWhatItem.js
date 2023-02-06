export const fetchWhatItem = async (db, category, itemID) => {
  switch (category) {
    case "all": {
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

      const final = res.filter(item => item.id === itemID)[0];

      return final;
    }
    case "laptopi": {
      const res = await db.laptopi.findUnique({
        where: {
          id: itemID,
        },
      });
      return res;
    }

    case "monitori": {
      const res = await db.monitori.findUnique({
        where: {
          id: itemID,
        },
      });
      return res;
    }

    case "tv": {
      const res = await db.televizori.findUnique({
        where: {
          id: itemID,
        },
      });
      return res;
    }

    case "telefoni": {
      const res = await db.telefoni.findUnique({
        where: {
          id: itemID,
        },
      });
      return res;
    }

    case "racunari": {
      const res = await db.racunari.findUnique({
        where: {
          id: itemID,
        },
      });
      return res;
    }

    case "periferija": {
      const res = await db.periferija.findUnique({
        where: {
          id: itemID,
        },
      });
      return res;
    }
    case "komponente": {
      const res = await db.komponente.findUnique({
        where: {
          id: itemID,
        },
      });
      return res;
    }

    case "mining": {
      const res = await db.mining.findUnique({
        where: {
          id: itemID,
        },
      });
      return res;
    }
  }
};
