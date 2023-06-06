import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import Layout from "../components/LayoutComponents/Layout";
import { ChakraProvider } from "@chakra-ui/react";
import GlobalContext from "../context/GlobalContext";
import { useEffect, useState } from "react";
import { ThreeCircles } from "react-loader-spinner";
import AuthContextProvider from "../context/AuthContext";
import {
  QueryClient,
  QueryClientProvider,
  Hydrate,
} from "@tanstack/react-query";

function MyApp({ Component, pageProps }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: 1,
          },
        },
      })
  );
  const [loading, setLoading] = useState(true);
  queryClient.invalidateQueries();

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
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <GlobalContext>
              <AuthContextProvider>
                <ChakraProvider>
                  <Layout>
                    <Component {...pageProps} />
                  </Layout>
                </ChakraProvider>
              </AuthContextProvider>
            </GlobalContext>
          </Hydrate>
        </QueryClientProvider>
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
