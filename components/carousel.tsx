import styles from "../styles/Carousel.module.css";
import { useState, useEffect, useRef, useCallback, ReactComponentElement } from "react";
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

  const ImageContainerRef = useRef(null);

  return (
    <div className={styles.container}>
      <div ref={ImageContainerRef} className={styles.imageContainer}>
        <div id="slider" className={styles.slider}>
          {images.map((image, index) => {

            // const Screenshot = useCallback((node) => {
            //   if (node !== null) {
            //     const centerX = window.innerWidth / 2;
            //     const centerY = window.innerHeight / 2;


            //     node.style.transform = `scale(${scale})`;
            //   }
            // }, []);

            return (
              <Image
                // ref={Screenshot}
                src={image}
                key={index}
                alt="Project Screenshot"
                width={300}
                height={300}
                className={styles.image}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
