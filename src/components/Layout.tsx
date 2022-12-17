import Head from "next/head";
import React from "react";

const Layout: React.FC<{
  children?: React.ReactNode | React.ReactNode[];
  title?: string;
}> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Hayden Young — a DevOps engineer based in Sheffield, UK."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mt-20 flex flex-grow flex-col items-center overflow-y-hidden">
        <div className="container flex flex-col px-6">{children}</div>
      </main>
    </>
  );
};

export default Layout;
