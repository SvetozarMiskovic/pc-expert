import "../styles/globals.css";

import Layout from "../components/Layout";
import { ChakraProvider } from "@chakra-ui/react";
import GlobalContext from "../context/GlobalContext";
import { useEffect, useState } from "react";
import { ThreeCircles } from "react-loader-spinner";

function MyApp({ Component, pageProps }) {
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
    <>
      {!loading ? (
        <GlobalContext>
          <ChakraProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ChakraProvider>
        </GlobalContext>
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
    </>
  );
}

export default MyApp;
