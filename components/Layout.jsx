import React from "react";
import Head from "next/head";
import Footer from "./Footer";
import FirstComponent from "./FirstComponent";
import Navbar from "./Navbar";
import PreFooter from "./PreFooter";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title>PC Expert Shop</title>
      </Head>
      <header>
        <FirstComponent />
        <Navbar />
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
