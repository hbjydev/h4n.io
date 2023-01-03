import { HiMenu } from "@react-icons/all-files/hi/HiMenu";
import { HiX } from "@react-icons/all-files/hi/HiX";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaMastodon } from "@react-icons/all-files/fa/FaMastodon";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { useToggle } from "../utils/hooks/useToggle";
import Link from "next/link";
import React from "react";

const NavbarLink: React.FC<{ label: string; href: string, toggleMenu: () => void }> = ({
  label,
  href,
  toggleMenu,
}) => (
  <li>
    <Link
      className="hover:text-zinc-800 text-zinc-500 transition duration-200"
      href={href}
      onClick={toggleMenu}
    >
      {label}
    </Link>
  </li>
);

const Navbar: React.FC = () => {
  const { on: menuOpen, toggleOn: toggleMenuOpen, setOn: setMenuOpen } = useToggle(false);

  const MenuIcon: React.FC<{ className: string }> = (props) =>
    !menuOpen ? <HiMenu {...props} /> : <HiX {...props} />;

  const setMenuOff = () => setMenuOpen(false);

  return (
    <header>
      <div
        className={`fixed top-0 flex h-20 w-full items-center md:hidden ${
          menuOpen ? "bg-white" : "backdrop-blur-lg"
        } border-b border-zinc-200 text-zinc-900`}
      >
        <div className="container flex items-center justify-between px-6">
          <span className="text-lg font-bold">Hayden Young</span>
          <button onClick={toggleMenuOpen} role="switch" aria-checked={menuOpen}>
            <MenuIcon className="h-6 w-6" />
          </button>
          {menuOpen ? (
            <div className="backdrop-blue-lg scroll-y fixed left-0 top-[79px] h-fit min-h-[calc(100vh-79px)] w-full bg-white py-4 px-6 shadow-md backdrop-blur-xl">
              <ul className="flex flex-col gap-4 text-lg">
                <NavbarLink label="Home" href="/" toggleMenu={setMenuOff} />
                <NavbarLink label="Posts" href="/posts" toggleMenu={setMenuOff} />
                <NavbarLink label="About" href="#" toggleMenu={setMenuOff} />
              </ul>
            </div>
          ) : null}
        </div>
      </div>

      <div className="fixed hidden h-20 min-w-full items-center justify-center border-b border-zinc-200 text-zinc-900 backdrop-blur-lg md:flex">
        <div className="container flex items-center justify-between px-6">
          <div className="flex items-baseline gap-x-6">
            <Link href="/" className="text-lg font-bold">
              Hayden Young
            </Link>

            <ul className="flex items-baseline gap-x-6 text-zinc-600">
              <NavbarLink label="Posts" href="/posts" toggleMenu={setMenuOff} />
              <NavbarLink label="About" href="#" toggleMenu={setMenuOff} />
            </ul>
          </div>

          <div className="flex items-center gap-x-6">
            <a
              href="https://github.com/hbjydev"
              className="hover:text-fuchsia-600"
            >
              <FaGithub className="h-5 w-5" />
            </a>

            <a
              href="https://hachyderm.io/@hayden"
              className="hover:text-fuchsia-600"
              rel="me"
            >
              <FaMastodon className="h-5 w-5" />
            </a>

            <a
              href="https://twitter.com/hayden_dev"
              className="hover:text-fuchsia-600"
            >
              <FaTwitter className="h-5 w-5" />
            </a>

            <a
              href="https://www.linkedin.com/in/hbjy"
              className="hover:text-fuchsia-600"
            >
              <FaLinkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
