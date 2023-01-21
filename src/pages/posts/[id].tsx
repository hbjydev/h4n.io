import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useEffect } from "react";
import { getAllPostIds, getPostData } from "../../utils/posts";
import hljs from "highlight.js";
import { purple, blue } from 'tailwindcss/colors';
import { Container } from "../../components/Container";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaMastodon } from "@react-icons/all-files/fa/FaMastodon";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";

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
    <>
      <main>
        <div className="mt-16">
          <div style={{
            background: `
              linear-gradient(180deg, #fff 0, hsla(0, 0%, 100%, 0) 100%),
              linear-gradient(90deg, ${purple['100']} 0, ${blue['100']} 100%)
            `,
          }} className="h-80 border-b">
            <Container className="py-10 px-6 h-full flex flex-col justify-between">
              <div className="">

              </div>

              <div className="flex flex-col gap-6">
                <p className="text-zinc-600 text-sm">{frontmatter["date"]}</p>
                <h1 className="text-5xl font-bold">{frontmatter["title"]}</h1>
              </div>
            </Container>
          </div>

          <Container className="px-6 py-10">
            <div
              className="prose prose-zinc max-w-screen-md text-lg mx-auto prose-pre:bg-zinc-200"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </Container>
        </div>
      </main>

      <footer className="py-10 text-sm bg-zinc-50 border-t text-zinc-600">
        <Container>
          <div className="flex justify-between">
            <span>Copyright &copy; Hayden Young {(new Date()).getFullYear()}.</span>

            <div className="flex items-center gap-x-6">
              <a
                href="https://github.com/hbjydev"
                className="hover:text-purple-500"
              >
                <FaGithub className="h-5 w-5" />
              </a>

              <a
                href="https://hachyderm.io/@hayden"
                className="hover:text-purple-500"
                rel="me"
              >
                <FaMastodon className="h-5 w-5" />
              </a>

              <a
                href="https://twitter.com/hayden_dev"
                className="hover:text-purple-500"
              >
                <FaTwitter className="h-5 w-5" />
              </a>

              <a
                href="https://www.linkedin.com/in/hbjy"
                className="hover:text-purple-500"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </Container>
      </footer>

    </>
  );
};

export default Post;
