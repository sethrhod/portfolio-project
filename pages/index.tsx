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
    <>
      <div id="headshot" className="flex flex-col h-screen overflow-hidden md:flex-row transition-all duration-500 ease-in-out">
        {/* <Headshot /> */}
        <Plaque />
      </div>
      <div id="aboutme" className="flex h-screen items-start">
        <AboutMe />
      </div>
      <div id="mobileapp">
        <MobileAppProjectShowcase />
      </div>
      <div id="blog">
        <Blog posts={posts} />
      </div>
      <div id="contact" className="flex h-screen justify-center items-center overflow-hidden">
        <ContactForm />
      </div>
    </>
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

