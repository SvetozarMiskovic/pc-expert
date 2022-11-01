import Home from "../components/Home";
import { useEffect, useState } from "react";
import { ThreeCircles } from "react-loader-spinner";

export default function LandingPage({ res }) {
  const [loading, setLoading] = useState(true);

  const updateLoading = () => {
    const t = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(t);
  };

  useEffect(() => {
    updateLoading();
  }, []);

  return (
    <div className="homepage">
      {loading ? (
        <Home />
      ) : (
        <ThreeCircles
          height="100"
          width="100"
          color="#4fa94d"
          wrapperStyle={{}}
          wrapperClass="loading-screen"
          visible={true}
          ariaLabel="three-circles-rotating"
          outerCircleColor="#007FFF "
          innerCircleColor="#4CBB17"
          middleCircleColor="#f89a20"
        />
      )}
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
