import { type FC } from 'react';

const Page: FC = () => {
  return (
    <div className="max-w-screen-xl w-full h-28 my-20 flex flex-col gap-10">

      <div className="text-center mb-10 max-w-screen-md mx-auto">
        <h1 className="text-6xl font-bold mb-3">About me</h1>

        <p className="text-gray-600 text-xl">
          Hey there! I&apos;m a 19-year-old devops engineer with a love for both
          software engineering and automating processes.
        </p>
      </div>

      <div className="text-lg prose max-w-lg text-center mx-auto">

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
