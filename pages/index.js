import Home from "../components/LayoutComponents/Home";

export default function LandingPage({ res }) {
  return (
    <div className="homepage">
      <div className="container main-container ">
        <Home />
      </div>
    </div>
  );
}

// export async function getServerSideProps() {
//   const res = await db.kategorije.findMany();

//   return {
//     props: {
//       res,
//     },
//   };
// }
