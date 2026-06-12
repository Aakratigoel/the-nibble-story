"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type GalleryImage = {
  src: string;
  alt: string;
  title: string;
  copy: string;
  icon: string;
};

type GalleryCarouselProps = {
  images: GalleryImage[];
};

export default function GalleryCarousel({ images }: GalleryCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const cardRefs = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    function updateItemsPerPage() {
      if (window.matchMedia("(max-width: 760px)").matches) {
        setItemsPerPage(2);
        return;
      }

      if (window.matchMedia("(max-width: 1000px)").matches) {
        setItemsPerPage(3);
        return;
      }

      setItemsPerPage(4);
    }

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);

    return () => {
      window.removeEventListener("resize", updateItemsPerPage);
    };
  }, []);

  function moveCarousel(direction: "left" | "right") {
    const lastPageStart = Math.max(images.length - itemsPerPage, 0);
    const nextIndex =
      direction === "left"
        ? Math.max(activeIndex - itemsPerPage, 0)
        : Math.min(activeIndex + itemsPerPage, lastPageStart);

    scrollToImage(nextIndex);
  }

  function scrollToImage(index: number) {
    cardRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });

    setActiveIndex(index);
  }

  const pageStarts = Array.from(
    { length: Math.ceil(images.length / itemsPerPage) },
    (_, pageIndex) =>
      Math.min(pageIndex * itemsPerPage, Math.max(images.length - itemsPerPage, 0)),
  ).filter((pageStart, index, pages) => pages.indexOf(pageStart) === index);

  const activePageStart = pageStarts.reduce((currentPageStart, pageStart) => {
    return activeIndex >= pageStart ? pageStart : currentPageStart;
  }, pageStarts[0] ?? 0);

  return (
    <div className="gallery-carousel" aria-label="Gallery carousel">
      <button
        className="gallery-arrow gallery-arrow-left"
        type="button"
        aria-label="Show previous gallery images"
        onClick={() => moveCarousel("left")}
      >
        ‹
      </button>

      <div className="gallery-stage">
        {images.map((image, index) => (
          <figure
            className={`gallery-card ${index === activeIndex ? "gallery-card-active" : "gallery-card-side"}`}
            key={image.src}
            ref={(element) => {
              cardRefs.current[index] = element;
            }}
          >
            <div className="gallery-image">
              <Image src={image.src} alt={image.alt} fill sizes="320px" />
            </div>
            <figcaption className="gallery-caption">
              <span className="gallery-icon" aria-hidden="true">
                <Image
                  src={`/icons/${image.icon}.png?v=6`}
                  alt=""
                  width={28}
                  height={28}
                  className={`gallery-icon-image gallery-icon-image-${image.icon}`}
                  unoptimized
                />
              </span>
              <span>
                <strong>{image.title}</strong>
                <small>{image.copy}</small>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>

      <button
        className="gallery-arrow gallery-arrow-right"
        type="button"
        aria-label="Show next gallery images"
        onClick={() => moveCarousel("right")}
      >
        ›
      </button>

      <div className="gallery-dots" aria-label="Gallery slide selector">
        {pageStarts.map((pageStart, index) => (
          <button
            className={pageStart === activePageStart ? "active" : undefined}
            type="button"
            aria-label={`Show gallery page ${index + 1}`}
            aria-current={pageStart === activePageStart}
            key={pageStart}
            onClick={() => scrollToImage(pageStart)}
          />
        ))}
      </div>
    </div>
  );
}
