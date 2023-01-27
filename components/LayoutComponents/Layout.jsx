import React from "react";
import Head from "next/head";
import Footer from "./Footer";
import FirstComponent from "./FirstComponent";

import PreFooter from "./PreFooter";
import MobileMenu from "../MobileComponents/MobileMenu";
import MobileSearch from "../MobileComponents/MobileSearch";
import NavbarComponent from "./NavbarComponent";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title>PC Expert Shop</title>
      </Head>
      <header>
        <FirstComponent />
        <NavbarComponent />
        <MobileSearch />
        <MobileMenu />
      </header>

      <main>{children}</main>
      <footer>
        <PreFooter />
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
