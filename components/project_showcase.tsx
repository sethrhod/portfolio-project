import Carousel from "./carousel";
import Image from "next/image";
import { useEffect, useRef } from "react";
import styles from "../styles/Home.module.css";

export default function ProjectShowcase() {
  const CarouselRef = useRef<HTMLDivElement>(null);
  const TextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const Observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          // const children = Array.from(entry.target.children);
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0");
            // entry.target.children[0].classList.add(styles.carousel);
            // entry.target.children[1].classList.add(styles.description);
          } else {
            entry.target.classList.add("opacity-0");
            // entry.target.children[0].classList.remove(styles.carousel);
            // entry.target.children[1].classList.remove(styles.description);
          }
        }),
      {
        threshold: 0.50,
      }
    );

    if (CarouselRef.current !== null) {
      Observer.observe(CarouselRef.current);
    }
  }, []);

  return (
    <div
      ref={CarouselRef}
      className="flex flex-1 w-screen h-screen opacity-0 flex-col justify-between transition-all duration-500 ease-in-out"
    >
      <Carousel />
      <div className="flex flex-col md:flex-row p-4">
        <div className="flex flex-[3] flex-col m-2">
          <h2 className="text-2xl mb-1 text-left font-bold">
            ATC conferences App
          </h2>
          <p className="text-base text-left">
            The ATC conferences app is a mobile app built for the{" "}
            <a
              href="https://www.atldevcon.com/"
              className="
            text-blue-500
            hover:text-blue-700
            visited:text-purple-600
            hover:visited:text-purple-700
            "
            >
              Atlanta developer's conference
            </a>{" "}
            and the{" "}
            <a
              href="https://atlcloudconf.com/"
              className="
            text-blue-500
            hover:text-blue-700
            visited:text-purple-600
            hover:visited:text-purple-700
            "
            >
              Atlanta cloud conference
            </a>
            . It's built with React Native and is out on both the Google Play
            Store and the Apple App Store.
          </p>
        </div>
        <div className="flex flex-1 flex-row md:flex-col justify-center items-center">
          <a
            className="flex flex-1 justify-end items-center m-2"
            href="https://play.google.com/store/apps/details?id=com.qimatatech.atcconferences&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
          >
            <Image
              alt="Get it on Google Play"
              src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
              height={110}
              width={110}
            />
          </a>
          <a
            className="flex flex-1 justify-start items-center m-2"
            href="https://apps.apple.com/us/app/atc-conferences/id6450556298"
          >
            <Image
              alt="Download on the App store"
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              height={100}
              width={100}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
