import React from 'react';
import { getAllPosts } from '../../lib/posts';
import Link from 'next/link';

export default function Blog({ posts }: any) {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <ul>
        {posts.map((post: any) => (
          <li key={post.slug} className="mb-4">
            <Link href={`/blog/${post.slug}`}>
              <a className="text-xl text-blue-600 hover:underline">{post.title}</a>
            </Link>
            <p className="text-sm text-gray-600">{post.date}</p>
            <p>{post.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts();
  return {
    props: {
      posts
    }
  };
}
