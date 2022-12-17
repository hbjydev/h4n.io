import type { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import Layout from "../../components/Layout";
import { getAllPostIds } from "../../utils/posts";

export const getStaticProps: GetStaticProps = async () => {
  const postIds = getAllPostIds();

  return {
    props: {
      postIds,
    }
  };
};

const Posts: NextPage<{ postIds: Awaited<ReturnType<typeof getAllPostIds>> }> = ({ postIds }) => {
  return (
    <Layout title="Posts">
      <div className="max-w-screen-sm w-full flex flex-col items-center my-10 mx-auto gap-y-10">
        <div className="flex flex-col items-center w-full gap-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Posts</h1>
          <span className="text-zinc-600">Showing {postIds.length} post(s).</span>
        </div>

        <div className="divide-y divide-zinc-300 flex flex-col w-full">
          {postIds.map((v, i) => {
            return (
              <Link key={i} href={`/posts/${v.params.id}`} className="hover:text-fuchsia-600">
                <article className="w-full py-4 flex justify-between items-center">
                  <span className="">{v.params.id}</span>
                  <span className="font-light text-zinc-600">2022-12-17</span>
                </article>
              </Link>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Posts;
