import React from 'react';
import Link from 'next/link';

export default function Blog({ posts }: any) {
  return (
    <div className="p-4 flex justify-center items-center flex-col h-screen bg-gray-100">
      <div className='flex basis-1/3 items-end'>
        <h1 className="text-3xl font-bold mb-6">Blog</h1>
      </div>
      <ul className='basis-2/3 flex flex-row w-full max-w-2xl justify-center'>
        {posts.map((post: any) => (
          <li key={post.slug} className="m-4 bg-slate-200 p-4 max-h-64 min-w-72 w-72 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
            <Link href={`/blog/${post.slug}`} className='flex flex-col h-full justify-start'>
              <p className="text-xl">{post.title}</p>
              <p className="text-sm text-gray-600">{post.date}</p>
              <p className='overflow-hidden text-ellipsis'>{post.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
