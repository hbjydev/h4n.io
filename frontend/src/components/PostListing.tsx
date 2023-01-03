import Link from "next/link";
import React from "react";
import type { PostData } from "../utils/posts";

export const PostListing: React.FC<{ post: PostData }> = ({ post }) => {
  return (
    <Link
      href={`/posts/${post.id}`}
      className="hover:text-fuchsia-600"
    >
      <article className="flex w-full items-center justify-between py-4">
        <span className="">{post.data['title']}</span>
        <span className="font-light text-zinc-600">
          {post.data['date']}
        </span>
      </article>
    </Link>
  );
};
