import React from "react";
import Head from "next/head";
import Footer from "./Footer";
import FirstComponent from "./FirstComponent";
import Navbar from "./Navbar";
import PreFooter from "./PreFooter";
import MobileMenu from "./MobileMenu";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title>PC Expert Shop</title>
      </Head>
      <header>
        <FirstComponent />
        <Navbar />
        <MobileMenu />
      </header>
      <main className="container main-container">{children}</main>
      <footer>
        <PreFooter />
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
