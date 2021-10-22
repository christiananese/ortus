import Head from "next/head";
import React from "react";
import Navigation from "../Navigation";
import BottomNav from "../BottomNav";
import Footer from "../Footer";
import TopNav from "../TopNav";

function Layout({ children, title, intl }) {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopNav />
      <main className="flex-grow">
        <Navigation intl={intl.navigation} />
        {children}
      </main>
      <Footer intl={intl?.footer} />
      <BottomNav intl={intl} />
    </div>
  );
}

export default Layout;
