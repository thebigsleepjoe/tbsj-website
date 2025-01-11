import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

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

  return (
    <article className="max-w-2xl mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">
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
  );
}
