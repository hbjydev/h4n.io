import { type FC } from 'react';

const Page: FC = () => {
  return (
    <div className="my-20 flex h-28 w-full max-w-screen-xl flex-col gap-10">
      <div className="mx-auto mb-10 max-w-screen-md text-center">
        <h1 className="mb-3 text-6xl font-bold">About me</h1>

        <p className="text-xl text-gray-600">
          Hey there! I&apos;m a 19-year-old devops engineer with a love for both
          software engineering and automating processes.
        </p>
      </div>

      <div className="prose mx-auto max-w-lg text-center text-lg">
        <p>
          I have a unique perspective on the software development industry, with
          experience in a variety of technologies and tools like cloud systems,
          virtualization, and containerization.
        </p>

        <p>
          My passion is finding ways to make the software delivery pipeline more
          efficient and effective, enabling developers to worry about less and
          push out more, improving the productivity of the whole company.
        </p>
      </div>
    </div>
  );
};

export default Page;
