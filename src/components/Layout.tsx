import Head from "next/head";
import React from "react";

const Layout: React.FC<{
  children?: React.ReactNode | React.ReactNode[];
  title?: string;
  thin?: boolean;
  hGap?: number;
  className?: string;
}> = ({ children, title, thin, hGap = 10, className }) => {
  let wrapper = !thin
    ? 'container flex flex-col px-6'
    : 'my-10 mx-auto flex w-full max-w-screen-sm flex-col';

  if (hGap) wrapper += ` gap-y-${hGap}`;

  if (className) wrapper += ` ${className}`;

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
        <div className={wrapper}>
          {children}
        </div>
      </main>
    </>
  );
};

export default Layout;
