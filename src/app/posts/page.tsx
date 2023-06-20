import { PostListing } from "../../components/PostListing";
import { getSortedPostsData } from "../../utils/posts";

const Posts = () => {
  const postMeta = getSortedPostsData();

  return (
    <div className="my-20 max-w-screen-sm mx-auto w-full">
      <div className="border-b text-black flex justify-between pb-5 mb-10">
        <h1 className="text-3xl font-bold">All posts</h1>
      </div>

      <div className="flex w-full gap-6 flex-col">
        {postMeta.map((v, i) => {
          return <PostListing post={v} key={i} />;
        })}
      </div>
    </div>
  );
};

export default Posts;
