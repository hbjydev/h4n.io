import { HiMenu } from '@react-icons/all-files/hi/HiMenu';
import { HiX } from '@react-icons/all-files/hi/HiX';
import { FaGithub } from '@react-icons/all-files/fa/FaGithub';
import { FaMastodon } from '@react-icons/all-files/fa/FaMastodon';
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter';
import { FaLinkedin } from '@react-icons/all-files/fa/FaLinkedin';
import { useToggle } from "../utils/hooks/useToggle";
import Link from 'next/link';
import React from 'react';

const NavbarLink: React.FC<{ label: string; href: string; }> = ({ label, href }) => (
  <li>
    <Link className="hover:text-fuchsia-600 pb-0.5 hover:border-b border-fuchsia-600" href={href}>{label}</Link>
  </li>
);

const Navbar: React.FC = () => {
  const { on: menuOpen, toggleOn: toggleMenuOpen } = useToggle(false);

  const MenuIcon: React.FC<{ className: string }> = (props) => !menuOpen ? <HiMenu {...props} /> : <HiX {...props} />;

  return (
    <header>
      <div className={`flex items-center h-20 md:hidden fixed top-0 w-full ${menuOpen ? 'bg-white' : 'backdrop-blur-lg'} text-zinc-900 border-b border-zinc-200`}>
        <div className="flex items-center justify-between container px-6">
          <span className="font-bold text-lg">Hayden Young</span>
          <button onClick={toggleMenuOpen}>
            <MenuIcon className="w-6 h-6" />
          </button>
        {
          menuOpen ?
          (
            <div className="h-fit backdrop-blue-lg bg-white fixed left-0 top-[79px] backdrop-blur-xl shadow-md py-4 px-6 w-full min-h-[calc(100vh-79px)] scroll-y">
              <ul className="flex flex-col gap-4 text-lg">
                <NavbarLink label="Home" href="/" />
                <NavbarLink label="Posts" href="/posts" />
                <NavbarLink label="About" href="#" />
              </ul>
            </div>
          )
          : null
        }
        </div>
      </div>

      <div className="hidden min-w-full fixed h-20 md:flex items-center justify-center backdrop-blur-lg text-zinc-900 border-b border-zinc-200">
        <div className="flex items-center justify-between container px-6">
          <div className="flex items-baseline gap-x-6">
            <Link href="/" className="font-bold text-lg">Hayden Young</Link>

            <ul className="flex items-baseline gap-x-6 text-zinc-600">
              <NavbarLink label="Posts" href="/posts" />
              <NavbarLink label="About" href="#" />
            </ul>
          </div>

          <div className="flex items-center gap-x-6">
            <a href="https://github.com/hbjydev" className="hover:text-fuchsia-600">
              <FaGithub className="w-5 h-5" />
            </a>

            <a href="https://hachyderm.io/@hayden" className="hover:text-fuchsia-600">
              <FaMastodon className="w-5 h-5" />
            </a>

            <a href="https://twitter.com/hayden_dev" className="hover:text-fuchsia-600">
              <FaTwitter className="w-5 h-5" />
            </a>

            <a href="https://www.linkedin.com/in/hbjy" className="hover:text-fuchsia-600">
              <FaLinkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
