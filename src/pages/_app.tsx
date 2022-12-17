import { type AppType } from "next/app";
import { trpc } from "../utils/trpc";
import "../styles/globals.css";
import "../styles/hljs.css";
import Navbar from "../components/Navbar";
import Head from "next/head";
import "@fontsource/inter/variable.css";

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
        <Navbar />
        <Component {...pageProps} />
      </div>
    </>
  );
};

export default trpc.withTRPC(MyApp);
