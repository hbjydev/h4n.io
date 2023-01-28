'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  console.log(error);

  return (
    <div className="w-full flex flex-col my-10">
      <h1 className="text-5xl font-bold">500</h1>
      <h2 className="text-zinc-600 text-2xl">That means something went wrong on our side. Try again soon!</h2>
      <p className="text-zinc-600 text-base">{error.message}</p>

      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
