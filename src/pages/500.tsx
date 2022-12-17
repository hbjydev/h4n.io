import type { NextPage } from "next";
import Layout from "../components/Layout";

const FiveHundred: NextPage = () => {
  return (
    <Layout title="500">
      <div className="w-full flex flex-col my-10">
        <h1 className="text-5xl font-bold">500</h1>
        <h2 className="text-zinc-600 text-2xl">That means something went wrong on our side. Try again soon!</h2>
      </div>
    </Layout>
  )
};

export default FiveHundred;
