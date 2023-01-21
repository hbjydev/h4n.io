import { type NextPage } from "next";
import Link from "next/link";
import Layout from "../components/Layout";
import MastodonList from "../components/MastodonList";

const Home: NextPage = () => {
  return (
    <Layout title="Hey. I'm Hayden.">
      <div id="jumbotron" className="py-[7rem] flex flex-col justify-center items-center gap-y-6">
        <h1 className="text-8xl font-black tracking-normal text-black">
          Hey. &nbsp; I&apos;m Hayden.
        </h1>

        <h2 className="max-w-screen-md w-full mx-auto text-2xl tracking-tight leading-relaxed text-center text-zinc-500">
          A DevOps engineer, kubernetes junkie, music listener, gaming, etc...
          you get the picture.
        </h2>

        <div className="flex items-center gap-6">
          <Link
            href="/posts"
            className="
              rounded-lg
              p-[1px]
              text-zinc-700
              shadow-lg
              transition-shadow
              duration-200
              hover:shadow-xl
              bg-zinc-900
              shadow-zinc-200
            "
          >
            <div className="bg-zinc-900 hover:bg-white hover:text-zinc-900 transition duration-100 text-white px-6 py-3 rounded-[7px]">
              Read what I have to say
            </div>
          </Link>

          <button
            className="
              rounded-lg
              p-[1px]
              text-zinc-900
              font-semibold
              shadow-lg
              transition-shadow
              duration-200
              hover:shadow-xl
              hover:shadow-purple-200
              bg-gradient-to-br
              from-purple-500
              to-blue-500
              shadow-purple-200
            "
          >
            <div className="bg-white hover:bg-transparent hover:text-white transition duration-100 px-6 py-3 rounded-[7px]">
            Look at my About page
            </div>
          </button>
        </div>

      </div>

      <div className="flex flex-col lg:flex-row justify-between gap-x-10">
        <MastodonList />
        <MastodonList />
      </div>
    </Layout>
  );
};

export default Home;
