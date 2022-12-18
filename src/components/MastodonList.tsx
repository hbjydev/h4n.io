import { Status } from "masto";
import Image from "next/image";
import React from "react";
import { trpc } from "../utils/trpc";

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
  let content = status.content;
  if (content.length > 128) {
    content = content.substring(0, 128) + "...";
  }

  return (
    <a
      href={status.url ?? '#'}
      rel="noreferrer"
      target="_blank"
      className="grid grid-cols-[42px_auto] w-full py-4 gap-2"
    >

      <a
        rel="noreferrer"
        href={status.account.url}
        target="_blank"
        className="font-bold"
      >
        <Image
          className="rounded shadow hover:shadow-lg transition duration-200"
          src={status.account.avatar}
          alt={`${status.account.username}'s hachyderm.io Avatar`}
          width={42}
          height={42}
          />
      </a>

      <div className="flex flex-col gap-y-2 overflow-hidden">
        <div className="flex justify-between">
          <a
            rel="noreferrer"
            href={status.account.url}
            target="_blank"
            className="font-bold"
          >
            {status.account.displayName}
          </a>
          <span className="text-zinc-500">{status.createdAt}</span>
        </div>

        <div className="prose max-w-none prose-sm" dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </a>
  );
};

export default MastodonList;
