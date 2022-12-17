import type { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import Layout from "../../components/Layout";
import { getAllPostMeta } from "../../utils/posts";

export const getStaticProps: GetStaticProps = async () => {
  const postMeta = getAllPostMeta();

  return {
    props: {
      postMeta,
    }
  };
};

const Posts: NextPage<{ postMeta: ReturnType<typeof getAllPostMeta> }> = ({ postMeta }) => {
  return (
    <Layout title="Posts">
      <div className="max-w-screen-sm w-full flex flex-col items-center my-10 mx-auto gap-y-10">
        <div className="flex flex-col items-center w-full gap-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Posts</h1>
          <span className="text-zinc-600">Showing {postMeta.length} post(s).</span>
        </div>

        <div className="divide-y divide-zinc-300 flex flex-col w-full">
          {postMeta.map((v, i) => {
            return (
              <Link key={i} href={`/posts/${v.id}`} className="hover:text-fuchsia-600">
                <article className="w-full py-4 flex justify-between items-center">
                  <span className="">{v.data['title']}</span>
                  <span className="font-light text-zinc-600">{v.data['date']}</span>
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
