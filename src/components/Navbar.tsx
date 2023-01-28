'use client';

import { HiMenu } from "@react-icons/all-files/hi/HiMenu";
import { HiX } from "@react-icons/all-files/hi/HiX";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaMastodon } from "@react-icons/all-files/fa/FaMastodon";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { useToggle } from "../utils/hooks/useToggle";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Container } from "./Container";

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

const Navbar: React.FC<{ border?: boolean }> = ({ border }) => {
    const { on: menuOpen, toggleOn: toggleMenuOpen, setOn: setMenuOpen } = useToggle(false);

    const [borderShown, setBorderShown] = useState(false);

    const hasScrolled = () => setBorderShown(window.scrollY > 0);

    useEffect(() => {
        document.addEventListener('scroll', hasScrolled);
        return () => document.removeEventListener('scroll', hasScrolled);
    });

    const MenuIcon: React.FC<{ className: string }> = (props) =>
        !menuOpen ? <HiMenu {...props} /> : <HiX {...props} />;

    const setMenuOff = () => setMenuOpen(false);

    let rootClass = 'fixed flex h-20 w-full items-center md:hidden text-zinc-900 backdrop-blur-[5px] bg-white bg-opacity-[0.8] backdrop-saturate-[180%] md:flex transition-all duration-200 z-50';
    if (menuOpen) rootClass += ' bg-white';
    else rootClass += ' backdrop-blue-lg';

    if (borderShown || border) rootClass += ' border-b border-zinc-200';
    else rootClass += ' border-b border-transparent';

    let rootClassDesktop = 'fixed hidden h-16 min-w-full items-center justify-center text-zinc-900 backdrop-blur-[5px] bg-white bg-opacity-[0.8] backdrop-saturate-[180%] md:flex transition-all duration-200 z-50';

    if (borderShown || border) rootClassDesktop += ' border-b border-zinc-200';
    else rootClassDesktop += ' border-b border-transparent';

    return (
        <header>
            <div className={rootClass}>
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

            <div className={rootClassDesktop}>
                <Container className="flex items-center justify-between px-6">
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
                </Container>
            </div>
        </header>
    );
};

export default Navbar;
