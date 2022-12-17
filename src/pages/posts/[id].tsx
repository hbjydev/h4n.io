import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useEffect } from "react";
import Layout from "../../components/Layout";
import { getAllPostIds, getPostData } from "../../utils/posts";
import hljs from "highlight.js";

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params?.id as string);

  return {
    props: {
      postData,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return { paths, fallback: false };
};

const Post: NextPage<{ postData: Awaited<ReturnType<typeof getPostData>> }> = ({
  postData,
}) => {
  const { html, frontmatter } = postData;

  useEffect(() => {
    hljs.configure({
      ignoreUnescapedHTML: true,
    });
    hljs.highlightAll();
  });

  return (
    <Layout title={frontmatter["title"]}>
      <div className="mx-auto my-10 flex w-full max-w-screen-sm flex-col gap-y-10">
        <div className="flex flex-col gap-y-4">
          <h1 className="text-4xl font-bold tracking-tight">
            {frontmatter["title"]}
          </h1>
          <span className="text-lg text-zinc-600">{frontmatter["date"]}</span>
        </div>

        <hr className="border-zinc-200" />

        <div
          className="prose prose-zinc max-w-none prose-pre:bg-zinc-200"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Layout>
  );
};

export default Post;
