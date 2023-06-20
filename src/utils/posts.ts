import { readdirSync, readFileSync } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
// import remarkRehype from 'remark-rehype';
// import remarkParse from 'remark-parse/lib';
// import rehypeFormat from 'rehype-format';
// import rehypeStringify from 'rehype-stringify/lib';
// import rehypeHighlight from 'rehype-highlight';

export type Post = {
  id: string;
  title: string;
  date: string;
  tags: string[];
};

const postsDir = path.join(process.cwd(), 'posts');

export const getSortedPostsData = (): Post[] => {
  const fileNames = readdirSync(postsDir);
  const allPostData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');

    const fullPath = path.join(postsDir, fileName);
    const fileContents = readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);

    const post: Post = {
      id,
      title: matterResult.data.title,
      date: matterResult.data.date,
      tags: matterResult.data.tags ?? [],
    };

    return post;
  });

  return allPostData.sort((a, b) => a.date < b.date ? 1 : -1);
};

export async function getPostData(id: string) {
  const fullPath = path.join(postsDir, `${id}.md`);
  const fileContents = readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContents);

  const result = await remark()
    // .use(remarkRehype)
    // .use(rehypeHighlight)
    // .use(rehypeFormat)
    // .use(rehypeStringify)
    .use(html)
    .process(matterResult.content);

  const postWithHtml: Post & { contentHtml: string } = {
      id,
      title: matterResult.data.title,
      date: matterResult.data.date,
      tags: matterResult.data.tags ?? [],
      contentHtml: result.toString(),
  };

  return postWithHtml;
}
