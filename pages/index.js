import Home from "../components/LayoutComponents/Home";

export default function LandingPage({ res }) {
  return (
    <div className="homepage">
      <Home />
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
