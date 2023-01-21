import type { Emoji, Status } from "masto";
import Image from "next/image";
import React from "react";
import { trpc } from "../utils/trpc";
import reactStringReplace from 'react-string-replace';

const emojiShortcode = /(:[^:\s]*(?:::[^:\s]*)*:)/g;

const emojiFromShortcode = (sc: string, emojis: Emoji[]) => {
  const shortcode = sc.replaceAll(":", "");
  const emoji = emojis.find(v => v.shortcode == shortcode);

  if (emoji == undefined) {
    return null;
  }

  return (
    <Image alt={emoji.shortcode} src={emoji.url} width={20} height={20} />
  );
};

const MastodonList: React.FC = () => {
  const {
    data,
    isLoading,
    isError
  } = trpc.example.getMastoPosts.useQuery();

  if (isLoading && !data) {
    return (<p>Loading...</p>);
  }

  if (isError) {
    return (<p>Failed to load Mastodon posts.</p>);
  }

  return (
    <div className="flex flex-col divide-y divide-zinc-200 w-full max-w-md my-10">
      <h1 className="mb-4 text-xl font-bold">
        My latest Mastodon toots and retoots
      </h1>
      {data.statuses.map((v, i) => <MastodonStatus status={v.reblog ? v.reblog : v} key={i} />)}
    </div>
  );
}

export const MastodonStatus: React.FC<{ status: Status }> = ({ status }) => {
  const { content: statusContent, account, url } = status;

  let content = statusContent;
  if (content.length > 128) {
    content = content.substring(0, 128) + "...";
  }

  const username = reactStringReplace(account.displayName, emojiShortcode, (match, i) => {
    return emojiFromShortcode(match, account.emojis);
  });

  return (
    <a
      href={status.url ?? '#'}
      rel="noreferrer"
      target="_blank"
      className="grid grid-cols-[42px_auto] w-full py-4 gap-2"
    >
      <Image
        className="rounded shadow hover:shadow-lg transition duration-200"
        src={status.account.avatar}
        alt={`${status.account.username}'s hachyderm.io Avatar`}
        width={42}
        height={42}
      />

      <div className="flex flex-col gap-y-2 overflow-hidden">
        <div className="flex justify-between">
          <span className="font-bold flex items-center gap-x-1">
            {username as React.ReactNode[]}
          </span>
          <span className="text-zinc-500">{status.createdAt}</span>
        </div>

        <div className="prose max-w-none prose-sm" dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </a>
  );
};

export default MastodonList;
