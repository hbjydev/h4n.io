'use client';

import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";
import { VscBook } from '@react-icons/all-files/vsc/VscBook';
import { VscInfo } from '@react-icons/all-files/vsc/VscInfo';

const desktopNavbar = cva(
  `
    top-10
    fixed hidden h-16 min-w-full items-center justify-center text-zinc-900
    backdrop-blur-[5px] bg-white bg-opacity-[0.8] backdrop-saturate-[180%]
    md:flex transition-all duration-200 z-50 border-b
  `,
  {
    variants: {
      bordered: {
        false: "border-transparent",
      }
    },
  }
);

export type DesktopNavbarProps = VariantProps<typeof desktopNavbar>;

export const DesktopNavbar: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  const setScroll = useCallback(() => {
    setScrollY(window.scrollY);
  }, []);

  useEffect(() => {
    setScroll();
    document.addEventListener('scroll', setScroll);
    return () => document.removeEventListener('scroll', setScroll);
  }, [setScroll]);

  const classes = desktopNavbar({ bordered: scrollY > 0 });

  return (
    <div className={classes}>
      <div className="max-w-screen-xl w-full flex justify-between">
        <div>
          <Link href="/" className="font-bold text-lg">Hayden Young</Link>
        </div>

        <div className="text-zinc-600 flex items-center gap-6">
          <Link href="/posts" className="flex items-center gap-2 hover:text-zinc-900 hover:underline hover:underline-offset-8">
            <VscBook />
            <span>Posts</span>
          </Link>

          <Link href="#" className="flex items-center gap-2 hover:text-zinc-900 hover:underline hover:underline-offset-8">
            <VscInfo />
            <span>About</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
