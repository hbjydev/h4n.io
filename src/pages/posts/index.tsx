import type { GetStaticProps, NextPage } from "next";
import Layout from "../../components/Layout";
import { PageHeader } from "../../components/PageHeader";
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
    <Layout title="Posts" thin>
      <PageHeader
        title="Posts"
        subtitle={`Showing ${postMeta.length} post(s).`}
      />

      <div className="flex w-full flex-col divide-y divide-zinc-300">
        {postMeta.map((v, i) => {
          return <PostListing post={v} key={i} />;
        })}
      </div>
    </Layout>
  );
};

export default Posts;
