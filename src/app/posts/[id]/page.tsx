import { getPostData, getSortedPostsData } from "../../../utils/posts";
import { purple, blue } from 'tailwindcss/colors';
import { Container } from "../../../components/Container";
import { notFound } from "next/navigation";

export const generateMetadata = ({ params }: { params: { id: string }}) => {
  const posts = getSortedPostsData();
  const { id } = params;

  const post = posts.find(post => post.id == id);

  if (!post) return {
    title: 'Post not found.',
  };

  return {
    title: post.title,  
  };
};

const Post = async ({ params }: { params: { id: string } }) => {
  const posts = getSortedPostsData();
  const { id } = params;

  if (!posts.find(v => v.id == id)) {
    return notFound();
  }

  const post = await getPostData(params.id);

  return (
    <div className="mt-16 w-full">
      <div style={{
        background: `
          linear-gradient(180deg, #fff 0, hsla(0, 0%, 100%, 0) 100%),
          linear-gradient(90deg, ${purple['100']} 0, ${blue['100']} 100%)
        `,
      }} className="h-80 border-b">
        <Container className="py-10 px-6 h-full flex flex-col justify-end">
          <div className="flex flex-col gap-6">
            <p className="text-zinc-600 text-sm">{post.date}</p>
            <h1 className="text-5xl font-bold">{post.title}</h1>
          </div>
        </Container>
      </div>

      <Container className="px-6 py-10">
        <div
          className="prose prose-zinc max-w-screen-md text-lg mx-auto prose-pre:bg-zinc-200"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </Container>
    </div>
  );
};

export default Post;
