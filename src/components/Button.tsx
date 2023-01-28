import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import type { LinkProps } from 'next/link';
import Link from 'next/link';
import type { HTMLAttributes, ReactNode } from 'react';
import React from 'react';

const button = cva(
    "rounded-lg relative font-semibold shadow-lg transition-shadow duration-200 hover:shadow-xl p-[1px]",
    {
        variants: {
            intent: {
                default: "bg-zinc-900 shadow-zinc-200 hover:shadow-zinc-200 border-zinc-900",

                primary: `
                    bg-gradient-to-br
                    from-purple-500
                    to-blue-500
                    shadow-purple-200
                    hover:shadow-purple-200
                `,

                success: "bg-green-500 shadow-green-200 hover:shadow-green-200 border-green-500",
                danger: "bg-red-500 shadow-red-200 hover:shadow-red-200 border-red-500",
                love: "bg-pink-500 shadow-pink-200 hover:shadow-pink-200 border-pink-500",
            },

            small: {
                true: "text-sm",
                false: "text-base",
            },

            outline: { true: '' },
        },

        compoundVariants: [
            {
                outline: true,
                intent: 'primary',
                className: 'bg-gradient-to-br from-purple-500 to-blue-500 p-[1px]',
            },
        ],
    }
);

const buttonInner = cva(
    "transition duration-100 px-6 py-3 rounded-[7px]",
    {
        variants: {
            intent: {
                default: "",

                primary: "text-zinc-900",

                success: "text-zinc-900",
                danger: "text-zinc-900",
                love: "text-zinc-900",
            },
            small: {
                true: "px-3 py-1.5",
                false: "px-6 py-3",
            },
            outline: {
                true: "bg-white hover:bg-transparent",
                false: "bg-transparent hover:bg-white"
            },
        },

        compoundVariants: [
            {
                intent: "primary",
                outline: true,
                className: "hover:text-white",
            },
            {
                intent: "primary",
                outline: false,
                className: "text-white hover:text-zinc-900",
            },

            {
                intent: "default",
                outline: true,
                className: "hover:text-white text-zinc-900",
            },
            {
                intent: "default",
                outline: false,
                className: "text-white hover:text-zinc-900",
            },
        ],
    },
);

export type ButtonProps =
    HTMLAttributes<HTMLButtonElement> &
    VariantProps<typeof button> &
    { children: ReactNode };

export const Button: React.FunctionComponent<ButtonProps> =
    ({
        children,
        intent = "default",
        small = false,
        outline = false,
        ...props
    }) => {
        return (
            <button className={button({ intent, small, outline })} {...props} >
                <div className={buttonInner({ intent, small, outline })}>
                    {children}
                </div>
            </button>
        );
    };

export type LinkButtonProps = LinkProps & VariantProps<typeof button> & { children: ReactNode };

export const LinkButton: React.FunctionComponent<LinkButtonProps> =
    ({
        children,
        intent = "default",
        small = false,
        outline = false,
        ...props
    }) => {
        return (
            <Link className={button({ intent, small, outline })} {...props} >
                <div className={buttonInner({ intent, small, outline })}>
                    {children}
                </div>
            </Link>
        );
    };
