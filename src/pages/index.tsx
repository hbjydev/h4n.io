import { type NextPage } from "next";
import Link from "next/link";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout title="Hey. I'm Hayden.">
      <div id="jumbotron" className="my-20 flex flex-col items-center gap-y-6">
        <h1 className="text-7xl font-extrabold tracking-tight">
          👋 Hey. &nbsp; I&apos;m Hayden.
        </h1>
        <h2 className="text-3xl tracking-tighter text-zinc-500">
          I&apos;m a DevOps engineer based in Sheffield, UK.
        </h2>
        <h3 className="text-xl text-zinc-500">
          And a Kubernetes addict, music listener, gamer, etc... You get the
          picture.
        </h3>

        <div className="flex items-center gap-6">
          <Link href="/posts" className="rounded-lg bg-fuchsia-600 px-6 py-3 text-white shadow-lg shadow-fuchsia-500 transition-shadow duration-200 hover:shadow-xl hover:shadow-fuchsia-500">
            Read what I have to say
          </Link>

          <button className="rounded-lg px-6 py-3 text-zinc-700 shadow-lg transition-shadow duration-200 hover:shadow-xl">
            Look at my About page
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
