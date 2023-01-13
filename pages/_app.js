import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import Layout from "../components/LayoutComponents/Layout";
import { ChakraProvider } from "@chakra-ui/react";
import GlobalContext from "../context/GlobalContext";
import { useEffect, useState } from "react";
import { ThreeCircles } from "react-loader-spinner"; 
import AuthContextProvider from "../context/AuthContext";

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
          <AuthContextProvider>
            <ChakraProvider>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </ChakraProvider>
          </AuthContextProvider>
        </GlobalContext>
      ) : (
        <div className="loading-screen">
          <h3 style={{ color: "#4CBB17" }}>
            <span style={{ color: "#007FFF" }}>PC</span> Expert
          </h3>
          <ThreeCircles
            height="100"
            width="100"
            color="#4fa94d"
            wrapperStyle={{}}
            visible={true}
            ariaLabel="three-circles-rotating"
            outerCircleColor="#007FFF"
            innerCircleColor="#4CBB17"
            middleCircleColor="#f89a20"
          />
        </div>
      )}
    </>
  );
}

export default MyApp;
