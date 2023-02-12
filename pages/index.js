import Home from "../components/LayoutComponents/Home";
import { db } from "../config/prismaClient";
export default function LandingPage({ data }) {
  console.log(data);
  return (
    <div className="homepage">
      <Home data={data} />
    </div>
  );
}

export async function getServerSideProps(ctx) {
  const laptopi = await db.laptopi.findMany();
  const monitori = await db.monitori.findMany();
  const televizori = await db.televizori.findMany();
  const telefoni = await db.telefoni.findMany();
  const mining = await db.mining.findMany();
  const periferija = await db.periferija.findMany();
  const komponente = await db.komponente.findMany();
  const racunari = await db.racunari.findMany();

  const data = {
    laptopi: laptopi,
    monitori: monitori,
    televizori: televizori,
    telefoni: telefoni,
    mining: mining,
    periferija: periferija,
    komponente: komponente,
    racunari: racunari,
  };

  return {
    props: {
      data: JSON.parse(JSON.stringify(data)),
    },
  };
}
