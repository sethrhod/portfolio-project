import {
  RefObject,
  use,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import Image from "next/image";

export default function Carousel() {
  const images: string[] = [
    "/images/screenshots/6.png",
    "/images/screenshots/1.png",
    "/images/screenshots/2.png",
    "/images/screenshots/3.png",
    "/images/screenshots/4.png",
    "/images/screenshots/5.png",
    "/images/screenshots/6.png",
    "/images/screenshots/1.png",
    "/images/screenshots/2.png",
    "/images/screenshots/3.png",
  ];

  const perView = 3;

  const SliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (SliderRef.current !== null) {
      SliderRef.current.style.setProperty("--per-view", perView.toString());

      const observer = new IntersectionObserver(
        (entries) =>
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.remove("scale-75");
            } else {
              entry.target.classList.add("scale-75");
            }
          }),
        {
          root: SliderRef.current,
          rootMargin: "1%",
        }
      );

      let renderedImages = Array.from(SliderRef.current.children);

      const lastCardObserver = new IntersectionObserver((entries) => {
        const lastCard = entries[0];
        if (lastCard.isIntersecting) {
          for (let i = 0; i < perView; i++) {
            renderedImages[i].classList.remove("scale-75");
          }
          SliderRef.current.scrollLeft = 0;
        }
      }, {});

      lastCardObserver.observe(SliderRef.current.lastElementChild);

      renderedImages.forEach((image) => {
        observer.observe(image);
      });
    }
  }, []);

  return (
    <div className="block items-center justify-center">
      <div
        id="slider"
        ref={SliderRef}
        className="grid grid-flow-col gap-4 overflow-x-scroll scrollbar-hide"
        style={{
          gridAutoColumns:
            "calc((100% - (1.5rem * (var(--per-view) - 1))) / var(--per-view))",
        }}
      >
        {images.map((image, index) => (
          <Image
            id="img"
            src={image}
            data-index={index}
            alt="Project Screenshot"
            width={200}
            height={200}
            className="inline-block transition-transform duration-500 ease-out"
          />
        ))}
      </div>
    </div>
  );
}
