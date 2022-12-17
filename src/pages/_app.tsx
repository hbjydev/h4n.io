import { Inter } from "@next/font/google";
import { type AppType } from "next/app";
import { trpc } from "../utils/trpc";
import "../styles/globals.css";
import "../styles/hljs.css";
import Navbar from "../components/Navbar";
import Head from "next/head";

const inter = Inter({ subsets: ['latin'], variable: '--h4n-inter' });

const MyApp: AppType = ({ Component, pageProps }) => {
  return ( 
    <>
      <Head>
        <title>Hayden</title>
        <meta name="description" content="Hayden Young's personal homepage and blog site" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div style={inter.style} className="font-main antialised min-h-screen flex flex-col">
        <Navbar />
        <Component {...pageProps} />
      </div>
    </>
  );
};

export default trpc.withTRPC(MyApp);
