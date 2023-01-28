import { Button, LinkButton } from "../components/Button";

const Page = () => {
  return (
    <div id="jumbotron" className="py-[7rem] flex flex-col justify-center items-center gap-y-6">
      <h1 className="text-8xl font-black tracking-normal text-black">
        Hey. I&apos;m Hayden.
      </h1>

      <h2 className="max-w-screen-md w-full mx-auto text-2xl tracking-tight leading-relaxed text-center text-zinc-500">
        A DevOps engineer, kubernetes junkie, music listener, gaming, etc...
        you get the picture.
      </h2>

      <div className="flex items-center gap-6">
        <LinkButton href="/posts">Read what I have to say</LinkButton>
        <Button intent="primary" outline>Look at my About page</Button>
      </div>
    </div>
  );
};

export default Page;
