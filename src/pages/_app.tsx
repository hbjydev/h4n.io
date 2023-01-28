import { type AppType } from "next/app";
import { trpc } from "../utils/trpc";
import "../styles/globals.css";
import "../styles/hljs.css";
import Navbar from "../components/Navbar";
import Head from "next/head";
import { Analytics } from '@vercel/analytics/react';
import Link from "next/link";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Hayden</title>
        <meta
          name="description"
          content="Hayden Young's personal homepage and blog site"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="antialised flex min-h-screen flex-col font-main">
        <div className="h-10 bg-zinc-50 border-b flex items-center justify-center fixed mb-10 w-full">
          <Link className="font-semibold" href="/posts/hello-world">Latest post: Hello, world!</Link>
        </div>
        <div className="h-10" />
        <Navbar />
        <Component {...pageProps} />
        <Analytics />
      </div>
    </>
  );
};

export default trpc.withTRPC(MyApp);
export { reportWebVitals } from 'next-axiom';
