import "../styles/globals.css";
import Layout from "../components/Layout";
import { ChakraProvider } from "@chakra-ui/react";
import GlobalContext from "../context/GlobalContext";
import MobileMenu from "../components/MobileMenu";

function MyApp({ Component, pageProps }) {
  return (
    <GlobalContext>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </GlobalContext>
  );
}

export default MyApp;
