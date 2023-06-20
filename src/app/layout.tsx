import Link from 'next/link';
import type { FC, ReactNode } from 'react';
import { Container } from '../components/Container';

import { FaGithub } from '@react-icons/all-files/fa/FaGithub';
import { FaLinkedin } from '@react-icons/all-files/fa/FaLinkedin';
import { FaMastodon } from '@react-icons/all-files/fa/FaMastodon';
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter';

import { Inter } from 'next/font/google';

import '../styles/globals.css';
import '../styles/hljs.css';
import { DesktopNavbar } from '../components/navbar/Desktop';
import type { Metadata } from 'next';

const inter = Inter({
  subsets: ['latin'],
  display: 'optional',
});

export const metadata: Metadata = {
  title: `Hayden's Blog`,
  description: `Kubernetes addict & polyglot software engineer`,
};

const RootLayout: FC<{ children: ReactNode | ReactNode[] }> = ({
  children,
}) => {
  return (
    <html lang="en">
      <body className={`flex min-h-screen flex-col ${inter.className}`}>
        <div className="fixed mb-10 flex h-10 w-full items-center justify-center border-b bg-zinc-50">
          <Link
            className="font-semibold"
            href="/posts/hello-world"
          >
            Latest post: Hello, world!
          </Link>
        </div>
        <div className="h-10" />

        <DesktopNavbar />

        <main className="my-6 flex flex-grow flex-col items-center overflow-y-hidden">
          {children}
        </main>

        <footer className="border-t bg-zinc-50 py-10 text-sm text-zinc-600">
          <Container>
            <div className="flex justify-between">
              <span>
                Copyright &copy; Hayden Young {new Date().getFullYear()}.
              </span>

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
      </body>
    </html>
  );
};

export default RootLayout;
