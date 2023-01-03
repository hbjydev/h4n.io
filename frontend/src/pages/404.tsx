import type { NextPage } from "next";
import Layout from "../components/Layout";

const FourOhFour: NextPage = () => {
  return (
    <Layout title="404">
      <div className="w-full flex flex-col my-10">
        <h1 className="text-5xl font-bold">404</h1>
        <h2 className="text-zinc-600 text-2xl">That page wasn&apos;t found, maybe have a look around and see if was renamed.</h2>
      </div>
    </Layout>
  )
};

export default FourOhFour;
