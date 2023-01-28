import type { GetStaticProps, NextPage } from "next";
import Layout from "../../components/Layout";
import { PostListing } from "../../components/PostListing";
import { getAllPostMeta, type PostData } from "../../utils/posts";

export const getStaticProps: GetStaticProps = async () => {
  const postMeta = getAllPostMeta();

  return {
    props: {
      postMeta,
    },
  };
};

const Posts: NextPage<{ postMeta: PostData[] }> = ({
  postMeta,
}) => {
  return (
    <Layout title="Posts" thin className="px-6">
      <div className="border-b text-black flex justify-between pb-5 mb-10">
        <h1 className="text-3xl font-bold">All posts</h1>
      </div>

      <div className="flex w-full gap-6 flex-col">
        {postMeta.map((v, i) => {
          return <PostListing post={v} key={i} />;
        })}
      </div>
    </Layout>
  );
};

export default Posts;
