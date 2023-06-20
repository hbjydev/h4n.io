import Link from 'next/link';
import React from 'react';
import type { Post } from '../utils/posts';

export const PostListing: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <Link
      href={`/posts/${post.id}`}
      className="rounded-lg transition duration-200 hover:z-10 hover:shadow-lg"
    >
      <article className="flex w-full flex-col justify-between gap-4 rounded-lg border p-8">
        <span className="text-3xl font-bold">{post.title}</span>
        <span className="font-light text-zinc-600">{post.date}</span>
      </article>
    </Link>
  );
};
