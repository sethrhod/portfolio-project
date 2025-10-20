import React from 'react';
import Link from 'next/link';

export default function Blog({ posts }: any) {
  return (
    <div className="p-4 flex justify-center items-center flex-col min-h-screen bg-gray-100 w-full overflow-x-hidden">
      <div className='flex items-end'>
        <h1 className="text-3xl font-bold mb-6">Blog</h1>
      </div>
      <ul className='flex flex-col md:flex-row w-full max-w-4xl justify-center items-center md:items-start gap-4'>
        {posts.map((post: any) => (
          <li key={post.slug} className="bg-slate-200 p-4 min-w-72 w-72 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out group hover:scale-105 hover:z-10">
            <Link href={`/blog/${post.slug}`} className='flex flex-col justify-start'>
              <p className="text-xl font-semibold mb-2 line-clamp-2 group-hover:line-clamp-none">{post.title}</p>
              <p className="text-sm text-gray-600 mb-3">{post.date}</p>
              <p className='text-sm text-gray-700 line-clamp-4 group-hover:line-clamp-none transition-all duration-300'>
                {post.description}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
