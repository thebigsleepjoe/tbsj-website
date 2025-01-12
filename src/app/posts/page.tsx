import path from 'path';
import fs from 'fs';
import { Doc, DocElement } from '../doc';
import matter from 'gray-matter';

export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt?: string;
};

function getAllPosts(): Post[] {
  // Get files under /posts
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames
    .map((filename) => {
      // Remove ".md" from file name to get slug
      const slug = filename.replace(/\.md$/, '');

      // Read markdown file as string
      const fullPath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // Use gray-matter to parse the post metadata section
      const { data } = matter(fileContents);

      // Validate and type check the data
      const post: Post = {
        slug,
        title: data.title ?? slug,
        date: data.date ? new Date(data.date).toISOString() : '',
        excerpt: data.excerpt ?? '',
      };

      return post;
    })
    // Sort posts by date
    .sort((post1, post2) => post1.date > post2.date ? -1 : 1);

  return posts;
}

import Link from 'next/link';

function PostListing(post: Post) {
  return (
    <li
      key='post.slug'
      className='mb-8 bg-transparent relative border md:border-2 border-gray-700 shadow-emerald-300 rounded-2xl p-6'
    >
      <Link
        href={`/posts/${post.slug}`}
        className='group'
      >
        {/* Top transition to transparency */}
        <div className='absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-900 to-transparent opacity-10' />
        <div className='absolute inset-0 rounded-2xl bg-gradient-to-bl from-blue-700 to-transparent opacity-40' />
        <h3 className='font-bold text-lg text-balance text-white'>
          <span className='group-hover:animate-pulse'>{post.title}</span>
        </h3>
        <p className='text-gray-400 italic mb-2 text-base'>
          {new Date(post.date).toLocaleDateString()}
        </p>
        <p className='text-gray-300'>"{post.excerpt}"</p>
      </Link>
    </li>
  );
}

export default function Posts() {
  const posts = getAllPosts();

  return (
    <Doc>
      <DocElement as='h1'>Blog</DocElement>
      <DocElement as='p'>
        Here is a collection all of my blogs, sorted new to old.
      </DocElement>
      <DocElement as='p'>
        These range between train-of-thought ramblings to fully researched
        reports.
      </DocElement>

      <DocElement as='hr' />
      <DocElement as='h2'>Posts</DocElement>
      {/* List of posts */}
      <ul className='posts grid sm:grid-cols-2 grid-cols-1 sm:gap-4'>
        {posts.map((post) => (
          PostListing(post)
        ))}
      </ul>
    </Doc>
  );
}
