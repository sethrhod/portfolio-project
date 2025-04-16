// pages/blog/[slug].tsx
import { getPost, getAllPosts } from '../../lib/posts';
import { GetStaticPropsContext } from 'next';

export default function Post({ post }: any) {
  return (
    <article className="prose mx-auto w-2/3 p-4">
      <h1>{post.title}</h1>
      <p className="text-sm text-gray-500">{post.date}</p>
      <div className="prose-lg max-[767px]:prose"  dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
    </article>
  );
}

export async function getStaticPaths() {
  const posts = getAllPosts();
  const paths = posts.map((post) => ({
    params: { slug: post.slug }
  }));

  return { paths, fallback: false };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const slug = context.params?.slug as string;
  const post = await getPost(slug);
  return {
    props: {
      post
    }
  };
}
