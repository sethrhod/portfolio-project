import React from "react";
import Headshot from "../components/headshot";
import Plaque from "../components/plaque";
import MobileAppProjectShowcase from "../components/MobileAppProjectShowcase";
import Blog from "../components/Blog";
import { getAllPosts } from "../lib/posts";
import ContactForm from "../components/contact-form";
import AboutMe from "../components/aboutme";

export default function Home({posts}:any) {
  return (
    <div className="w-full overflow-x-hidden">
      <div id="headshot" className="flex flex-col h-screen overflow-hidden md:flex-row transition-all duration-500 ease-in-out w-full">
        {/* <Headshot /> */}
        <Plaque />
      </div>
      <div id="aboutme" className="flex h-screen items-start w-full">
        <AboutMe />
      </div>
      <div id="mobileapp" className="w-full">
        <MobileAppProjectShowcase />
      </div>
      <div id="blog" className="w-full">
        <Blog posts={posts} />
      </div>
      <div id="contact" className="flex h-screen justify-center items-center overflow-hidden w-full">
        <ContactForm />
      </div>
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

