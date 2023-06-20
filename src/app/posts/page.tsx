import { PostListing } from '../../components/PostListing';
import { getSortedPostsData } from '../../utils/posts';

const Posts = () => {
  const postMeta = getSortedPostsData();

  return (
    <div className="mx-auto my-20 w-full max-w-screen-sm">
      <div className="mb-10 flex justify-between border-b pb-5 text-black">
        <h1 className="text-3xl font-bold">All posts</h1>
      </div>

      <div className="flex w-full flex-col gap-6">
        {postMeta.map((v, i) => {
          return (
            <PostListing
              post={v}
              key={i}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Posts;
