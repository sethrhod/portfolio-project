import Layout from "../components/layout";
import React from "react";
import Headshot from "../components/headshot";
import Plaque from "../components/plaque";
import MobileAppProjectShowcase from "../components/MobileAppProjectShowcase";
import Blog from "./blog";
import { getAllPosts } from "../lib/posts";
import ContactForm from "../components/contact-form";

export default function Home({posts}:any) {
  return (
    <Layout>
      <div id="headshot" className="flex flex-col h-screen overflow-hidden md:flex-row transition-all duration-500 ease-in-out">
        <Headshot />
        <Plaque />
      </div>
      <div id="mobileapp">
        <MobileAppProjectShowcase />
      </div>
      <div id="blog">
        <Blog posts={posts} />
      </div>
      <div id="contact" className="flex flex-col h-screen overflow-hidden">
        <ContactForm />
      </div>
    </Layout>
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

