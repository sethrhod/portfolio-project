import {
  RefObject,
  use,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { prefix } from "../lib/prefix";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faChevronDown, faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function Carousel({}) {

  const images: string[] = [
    `${prefix}/2.png`,
    `${prefix}/1.png`,
    `${prefix}/3.png`,
    `${prefix}/6.png`,
    `${prefix}/4.png`,
    `${prefix}/5.png`,
    `${prefix}/2.png`,
    `${prefix}/1.png`,
    `${prefix}/3.png`,
    `${prefix}/6.png`,
    `${prefix}/4.png`,
  ];

  //if screen is mobile set perView to 1
  const perView: number = getPerView();

  function getPerView(): number {
    if (typeof window !== "undefined") {
      return window.innerWidth < 768 ? 2.25 : 4;
    }
  }

  const SliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (SliderRef.current !== null) {
      SliderRef.current.addEventListener("wheel", (e) => {
        e.preventDefault();
        SliderRef.current.scrollLeft += e.deltaY;
      });

      SliderRef.current.style.setProperty("--per-view", perView.toString());

      const enteringObserver = new IntersectionObserver(
        (entries) =>
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.remove("scale-75");
            } else {
              entry.target.classList.add(
                "transition-transform",
                "duration-500",
                "ease-out",
                "scale-75"
              );
            }
          }),
        {
          root: SliderRef.current,
          rootMargin: "4%",
        }
      );

      let renderedImages = Array.from(SliderRef.current.children);

      const observeRenderedImages = () => {
        renderedImages.forEach((image) => {
          enteringObserver.observe(image);
        });
      };

      const lastCardObserver = new IntersectionObserver(
        (entries) => {
          const lastCard = entries[0];
          if (lastCard.isIntersecting) {
            for (let i = 0; i < perView; i++) {
              renderedImages[i].classList.remove(
                "transition-transform",
                "duration-500",
                "ease-out",
                "scale-75"
              );
            }
            SliderRef.current.scrollLeft = 0;
            observeRenderedImages();
          }
        },
        {
          root: SliderRef.current,
          rootMargin: "4%",
          threshold: 0,
        }
      );

      lastCardObserver.observe(SliderRef.current.lastElementChild);

      observeRenderedImages();
    }
  }, [SliderRef.current, perView]);

  return (
    <div className="flex transition-all items-center justify-center">
      <div
        id="slider"
        ref={SliderRef}
        className="grid grid-flow-col gap-4 overflow-x-scroll"
        style={{
          gridAutoColumns:
            "calc((100% - (1.5rem * (var(--per-view) - 1))) / var(--per-view))",
        }}
      >
        {images.map((image, index) => (
          <img
            id="img"
            key={index}
            src={image}
            data-index={index}
            alt="Project Screenshot"
            className="inline-block transition-transform duration-500 ease-out"
          />
        ))}
      </div>
    </div>
  );
}
