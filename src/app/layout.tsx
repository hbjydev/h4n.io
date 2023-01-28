import Link from 'next/link';
import type { FC, ReactNode } from 'react';
import { Container } from '../components/Container';
import Navbar from '../components/Navbar';

import { FaGithub } from '@react-icons/all-files/fa/FaGithub';
import { FaLinkedin } from '@react-icons/all-files/fa/FaLinkedin';
import { FaMastodon } from '@react-icons/all-files/fa/FaMastodon';
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter';

import { Inter } from '@next/font/google';

import "../styles/globals.css";
import "../styles/hljs.css";
import { DesktopNavbar } from '../components/navbar/Desktop';

const inter = Inter({
  subsets: ['latin'],
  display: 'optional',
});

const RootLayout: FC<{ children: ReactNode | ReactNode[] }> = ({ children }) => {
  return (
    <html lang="en">
      <body className={`flex flex-col min-h-screen ${inter.className}`}>
        <div className="h-10 bg-zinc-50 border-b flex items-center justify-center fixed mb-10 w-full">
          <Link className="font-semibold" href="/posts/hello-world">Latest post: Hello, world!</Link>
        </div>
        <div className="h-10" />

        <DesktopNavbar />

        <main className="my-6 flex flex-grow flex-col items-center overflow-y-hidden">
          {children}
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
      </body>
    </html>
  );
}

export default RootLayout;
