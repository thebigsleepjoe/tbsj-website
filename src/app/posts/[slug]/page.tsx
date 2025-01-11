import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import { Doc, DocElement } from '../../doc';

// Generate static params
export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);

  return filenames.map((filename) => ({
    slug: filename.replace(/\.md$/, ''),
  }));
}

// Page component
export default async function Post({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), 'posts', `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, 'utf8');

  // Use gray-matter to parse the post metadata
  const { data: frontmatter, content } = matter(fileContents);

  // Convert markdown to HTML
  const htmlContent = marked(content);

  const slicedTitle = frontmatter.title.length > 24 ? frontmatter.title.slice(0, 24) + "..." : frontmatter.title;

  return (
    <Doc>
      <article>
        <header className="mb-8">
          
          {/* breadcrumb trail */}
          <div className='text-gray-400 mb-2'>
            <a className='' href="/posts">Posts</a>
            <span className="mx-2">&gt;</span>
            <span>{slicedTitle}</span>
          </div>

          <h1 className="lg:text-4xl text-2xl font-bold">
            {frontmatter.title}
          </h1>
          {frontmatter.date && (
            <time className="text-gray-600">
              {new Date(frontmatter.date).toLocaleDateString()}
            </time>
          )}
        </header>
        <div
          className="prose"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </article>
    </Doc>
  );
}
