import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useEffect } from "react";
import Layout from "../../components/Layout";
import { getAllPostIds, getPostData } from "../../utils/posts";
import hljs from "highlight.js";
import { PageHeader } from "../../components/PageHeader";

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
    <Layout title={frontmatter["title"]} thin hGap={10} className="w-full">
      <PageHeader
        title={frontmatter["title"]}
        subtitle={frontmatter["date"]}
        bottomGap
        leftAlign
      />

      <hr className="border-zinc-200" />

      <div
        className="prose prose-zinc max-w-none prose-pre:bg-zinc-200"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Layout>
  );
};

export default Post;
