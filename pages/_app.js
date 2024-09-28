import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import Layout from "../components/LayoutComponents/Layout";
import { ChakraProvider } from "@chakra-ui/react";
import GlobalContext from "../context/GlobalContext";
import { useEffect, useState } from "react";
import { ThreeCircles } from "react-loader-spinner";
import AuthContextProvider, { useAuthContext } from "../context/AuthContext";
import { QueryClient } from "@tanstack/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
import { HydrationBoundary } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
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
        <SessionProvider session={session}>
          <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools />
            <HydrationBoundary state={pageProps.dehydratedState}>
              <GlobalContext>
                <AuthContextProvider>
                  <ChakraProvider>
                    <Layout>
                      <Component {...pageProps} />
                    </Layout>
                  </ChakraProvider>
                </AuthContextProvider>
              </GlobalContext>
            </HydrationBoundary>
          </QueryClientProvider>
        </SessionProvider>
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
