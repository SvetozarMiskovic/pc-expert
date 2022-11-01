import Categories from "../components/Categories";
import FirstProductLine from "../components/FirstProductLine";
import Home from "../components/Home";
import SecondProductLine from "../components/SecondProductLine";
import SponsoredProducts from "../components/SponsoredProducts";
import { db } from "../util/db.server";

export default function LandingPage({ res }) {
  console.log(res);
  return (
    <div className="homepage">
      <Home />
    </div>
  );
}

export async function getServerSideProps() {
  const res = await db.kategorije.findMany();

  return {
    props: {
      res,
    },
  };
}
