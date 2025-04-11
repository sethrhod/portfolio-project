import React from "react";

export default function Articles(){
  const articles = [
    {
      title: "Understanding React Fiber",
      description: "A deep dive into how React Fiber works under the hood.",
      link: "https://reactjs.org/docs/faq-internals.html",
    },
    {
      title: "Next.js Optimization Techniques",
      description: "Learn how to optimize your Next.js applications.",
      link: "https://nextjs.org/docs/advanced-features/optimization",
    },
    {
      title: "Three.js Basics",
      description: "An introduction to 3D rendering with Three.js.",
      link: "https://threejs.org/docs/",
    },
  ];

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-4xl font-bold mb-6">Articles</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article, index) => (
          <a
            key={index}
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 border rounded-lg shadow hover:shadow-lg transition"
          >
            <h2 className="text-2xl font-semibold">{article.title}</h2>
            <p className="text-gray-600">{article.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
}