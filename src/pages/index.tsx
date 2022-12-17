import { type NextPage } from "next";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout title="Hey. I&apos;m Hayden.">
      <div id="jumbotron" className="my-20 flex flex-col items-center gap-y-6">
        <h1 className="text-7xl font-extrabold tracking-tighter">Hey. I&apos;m Hayden.</h1>
        <h2 className="text-3xl text-zinc-500 tracking-tighter">I&apos;m a DevOps engineer based in Sheffield, UK.</h2>
        <h4 className="text-xl text-zinc-500">And a Kubernetes addict, music listener, gamer, etc... You get the picture.</h4>

        <div className="flex items-center gap-6">
          <button className="transition-shadow duration-200 shadow-lg hover:shadow-xl shadow-fuchsia-500 hover:shadow-fuchsia-500 px-6 py-3 rounded-lg bg-fuchsia-600 text-white">
            Read what I have to say
          </button>

          <button className="transition-shadow duration-200 shadow-lg hover:shadow-xl px-6 py-3 rounded-lg text-zinc-700">
            Look at my About page
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
