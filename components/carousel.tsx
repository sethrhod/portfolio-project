import { RefObject, useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Carousel() {
  const images: string[] = [
    "/images/screenshots/1.png",
    "/images/screenshots/2.png",
    "/images/screenshots/3.png",
    "/images/screenshots/4.png",
    "/images/screenshots/5.png",
    "/images/screenshots/6.png",
  ];

  const Screenshot = (
    { image }: { image: string },
    { index }: { index: number }
  ) => {
        const useOnScreen = (options: any) => {
          const [ImageRef, setImageRef] = useState(null);
          const [visibilty, setVisibility] = useState();

          useEffect(() => {
            const observer = new IntersectionObserver(([entry]) => {
              setVisibility(entry.isIntersecting);

            }, options);

            if (ImageRef) {
              observer.observe(ImageRef);
            }

            return () => {
              if (ImageRef) {
                observer.unobserve(ImageRef);
              }
            };
          }, [ImageRef, options]);

          return [setImageRef];
        };

        const [setImageRef] = useOnScreen({
          root: SliderRef.current,
          rootMargin: "100px",
        });

    return (
      <Image
        ref={setImageRef}
        src={image}
        key={index}
        alt="Project Screenshot"
        width={200}
        height={200}
        className="inline-block transition duration-500 ease-in-out"
      />
    );
  };

  const SliderRef: RefObject<HTMLDivElement> = useRef(null);

  let totalScroll = 0;

  useEffect(() => {
    const perView = 3;
    const imageItems = SliderRef.current.children;

    SliderRef.current.style.setProperty("--per-view", perView.toString());

    for (let i = 0; i < perView; i++) {
      SliderRef.current.appendChild(imageItems[i].cloneNode(true));
    }

    function handleScroll(event) {
      totalScroll++;
      if (totalScroll == imageItems.length - perView + 1) {
        totalScroll = 1;
      }
      SliderRef.current.scrollLeft =
        (SliderRef.current.scrollWidth / imageItems.length) * totalScroll;
    }

    if (SliderRef.current) {
      SliderRef.current.addEventListener(
        "wheel",
        (event) => {
          event.preventDefault();
          event.stopPropagation();
          event.stopImmediatePropagation();
          handleScroll(event);
        },
        { passive: false }
      );
    }
  }, [SliderRef, images]);

  return (
    <div className="flex items-center ">
      <div
        id="slider"
        ref={SliderRef}
        className="grid grid-flow-col gap-4 overflow-x-scroll"
        style={{
          gridAutoColumns:
            "calc((100% - (1.5rem * (var(--per-view) - 1))) / var(--per-view))",
          position: "relative",
          transition: "all 0.3s ease 0s",
        }}
      >
        {images.map((image, index) => (
          <Screenshot image={image} key={index} />
        ))}
      </div>
    </div>
  );
}
