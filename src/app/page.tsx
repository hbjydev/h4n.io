import { LinkButton } from '../components/Button';

const Page = () => {
  return (
    <div
      id="jumbotron"
      className="flex flex-col items-center justify-center gap-y-6 py-[7rem]"
    >
      <h1 className="text-8xl font-black tracking-normal text-black">
        Hey. I&apos;m Hayden.
      </h1>

      <h2 className="mx-auto w-full max-w-screen-md text-center text-2xl leading-relaxed tracking-tight text-zinc-500">
        A DevOps engineer, kubernetes junkie, music listener, gaming, etc... you
        get the picture.
      </h2>

      <div className="flex items-center gap-6">
        <LinkButton href="/posts">Read what I have to say</LinkButton>
        <LinkButton
          href="/about"
          intent="primary"
          outline
        >
          Look at my About page
        </LinkButton>
      </div>
    </div>
  );
};

export default Page;
