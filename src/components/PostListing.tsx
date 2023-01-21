import Link from "next/link";
import React from "react";
import type { PostData } from "../utils/posts";

export const PostListing: React.FC<{ post: PostData }> = ({ post }) => {
  return (
    <Link
      href={`/posts/${post.id}`}
      className="hover:z-10 hover:shadow-lg rounded-lg transition duration-200"
    >
      <article className="flex flex-col w-full gap-4 justify-between p-8 border rounded-lg">
        <span className="font-bold text-3xl">{post.data['title']}</span>
        <span className="font-light text-zinc-600">
          {post.data['date']}
        </span>
      </article>
    </Link>
  );
};
