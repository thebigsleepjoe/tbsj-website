import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import { baseStyles, Doc, DocElement } from '../../doc';
import { parseFromString } from 'dom-parser';

// Generate static params
export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);

  return filenames.map((filename) => ({
    slug: filename.replace(/\.md$/, ''),
  }));
}

export function blogify(htmlContent: string): string {
  for (const key in baseStyles) {
    htmlContent = htmlContent.replace(new RegExp(`<${key}>`, 'g'), `<${key} class="${baseStyles[key as keyof typeof baseStyles]}">`);
  }

  htmlContent = htmlContent.replace(`<a `, `<a class="${baseStyles.a}"`);

  return htmlContent;
}

// Page component
export default async function Post({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), 'posts', `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, 'utf8');

  // Use gray-matter to parse the post metadata
  const { data: frontmatter, content } = matter(fileContents);

  // Convert markdown to HTML
  const htmlContent = await marked(content);

  const slicedTitle = frontmatter.title.length > 24 ? frontmatter.title.slice(0, 24) + "..." : frontmatter.title;

  return (
    <Doc>
      <article>
        <header className="mb-8">
          {/* go back */}
          <a className='text-cyan-500 hover:text-cyan-300 transition-colors animate-underline text-lg' href="/posts">{'<'} Back to blog</a>

          {/* breadcrumb trail */}
          <div className='text-gray-400 mb-1 mt-4'>
            <a className='' href="/posts">Posts</a>
            <span className="mx-2">&gt;</span>
            <span>{slicedTitle}</span>
          </div>

          <h1 className="lg:text-4xl text-2xl font-bold">
            {frontmatter.title}
          </h1>
          {frontmatter.date && (
            <time className="text-gray-600">
              CREATED {new Date(frontmatter.date).toLocaleDateString()}
            </time>
          )}
        </header>
        <div
          className="prose"
          dangerouslySetInnerHTML={{ __html: blogify(htmlContent) }}
        />
      </article>
    </Doc>
  );
}
