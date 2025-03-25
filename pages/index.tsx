import Layout from "../components/layout";
import { useState, useRef, useEffect } from "react";
import React from "react";
import ProjectShowcase from "../components/project_showcase";
import About from "../components/about";
import Headshot from "../components/headshot";

export default function Home() {
  const mainRef = useRef<HTMLDivElement>(null);
  const [currentScreen, setCurrentScreen] = useState<string>("bio");
  const screens = {
    bio: ( 
      <Headshot
        currentScreen={currentScreen}
        setCurrentScreen={setCurrentScreen}
      />
    ),
    project: (
      <ProjectShowcase
        setCurrentScreen={setCurrentScreen}
        currentScreen={currentScreen}

      />
    ),
    // about: <About
    //   setCurrentScreen={setCurrentScreen}
    //   currentScreen={currentScreen}
    //  />,
  };

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
      <div ref={mainRef} className="flex justify-center items-center">
        {screens[currentScreen]}
      </div>
    </Layout>
  );
}
