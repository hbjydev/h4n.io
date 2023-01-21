import Head from "next/head";
import { Container } from "../components/Container";
import React from "react";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaMastodon } from "@react-icons/all-files/fa/FaMastodon";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";

const Layout: React.FC<{
  children?: React.ReactNode | React.ReactNode[];
  title?: string;
  thin?: boolean;
  hGap?: number;
  className?: string;
  noTopPad?: boolean;
}> = ({ children, title, thin, hGap = 10, className, noTopPad }) => {
  let wrapper = !thin
    ? 'container flex flex-col px-6'
    : 'my-10 mx-auto flex w-full max-w-screen-sm flex-col';

  if (hGap) wrapper += ` gap-y-${hGap}`;

  if (className) wrapper += ` ${className}`;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Hayden Young — a DevOps engineer based in Sheffield, UK."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${noTopPad ? 'my-6' : 'my-20'} flex flex-grow flex-col items-center overflow-y-hidden`}>
        <div className={wrapper}>
          {children}
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

export default Layout;
