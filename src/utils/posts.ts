import { readdirSync, readFileSync } from "fs";
import path from "path";
import { unified } from "unified";
import matter from "gray-matter";
import remarkRehype from "remark-rehype";
import remarkParse from "remark-parse/lib";
import rehypeFormat from "rehype-format";
import rehypeStringify from "rehype-stringify/lib";
import rehypeHighlight from "rehype-highlight";

export type PostFrontmatter = {
  title: string;
  date: string;
  tags?: string[];
};

const postsDir = "posts";

export function getAllPostIds() {
  const fileNames = readdirSync(postsDir);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export function getAllPostMeta() {
  const fileNames = readdirSync(postsDir);
  const data: { id: string; data: matter.GrayMatterFile<string>["data"] }[] =
    [];

  for (const name of fileNames) {
    const filePath = path.join(postsDir, `${name}`);
    const matterData = matter.read(filePath);
    data.push({
      id: name.replace(/\.md$/, ""),
      data: matterData.data,
    });
  }

  data.sort((o, t) => new Date(t.data['date']).getTime() - new Date(o.data['date']).getTime());

  return data;
}

export async function getPostData(id: string) {
  const fullPath = path.join(postsDir, `${id}.md`);
  const fileContents = readFileSync(fullPath, "utf8");

  const matterResult = matter(fileContents);

  const result = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeHighlight)
    .use(rehypeFormat)
    .use(rehypeStringify)
    .process(matterResult.content);

  const html = result.toString();

  return {
    id,
    html,
    frontmatter: matterResult.data,
  };
}
