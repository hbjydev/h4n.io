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
    <div className="my-10 flex w-full flex-col">
      <h1 className="text-5xl font-bold">500</h1>
      <h2 className="text-2xl text-zinc-600">
        That means something went wrong on our side. Try again soon!
      </h2>
      <p className="text-base text-zinc-600">{error.message}</p>

      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
