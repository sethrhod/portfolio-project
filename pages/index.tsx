import Layout from "../components/layout";
import { useState, useRef, useEffect } from "react";
import React from "react";
import About from "../components/about";
import Headshot from "../components/headshot";
import Articles from "../components/articles";
import Link from "next/link";

export default function Home() {
  const mainRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  // if (mainRef.current) {
  //   setScreens(mainRef.current.children.length);
  // }
  // window.scrollTo({
  //   top: (mainRef.current?.children[currentScreen] as HTMLElement)?.offsetTop,
  //   behavior: "smooth",
  // });
  // if (headshotRef.current) {
  //   headshotRef.current.addEventListener("animationend", () => {
  //     setTransitionEnd(true);
  //   });
  // }
  // return () => {
  //   if (headshotRef.current) {
  //     headshotRef.current.removeEventListener("animationend", () => {
  //       setTransitionEnd(true);
  //     });
  //   }
  // };
  // }, [
  //   currentScreen,
  //   (mainRef.current?.children[currentScreen] as HTMLElement)?.offsetTop,
  //   mainRef.current,
  // ]);

  return (
    <Layout>
      <Headshot/>
    </Layout>
  );
}
