"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Gallery = () => {
  const galleryInnerRef = useRef<HTMLDivElement>(null);
  const galleryFlexRef = useRef<HTMLDivElement>(null);
  const galleryImgsRef = useRef<NodeListOf<HTMLImageElement>>(null);

  useEffect(() => {
    galleryImgsRef.current = document.querySelectorAll(".js-gallery img");
    gsap.fromTo(
      galleryImgsRef.current,
      {
        autoAlpha: 0,
        scale: 0.7,
      },
      {
        autoAlpha: 1,
        scale: 1,
        scrollTrigger: {
          trigger: galleryFlexRef.current,
          start: "top center",
          toggleActions: "play none none reverse",
        },
      }
    );
    gsap.fromTo(galleryFlexRef.current, {
      x: 200,
    }, {
      x: 0,
      scrollTrigger: {
        trigger: galleryFlexRef.current,
        start: "top center",
        toggleActions: "play none none reverse",
      },
    })
    gsap.to(galleryInnerRef.current, {
      x: -200,
      scrollTrigger: {
        trigger: galleryFlexRef.current,
        start: "top center",
        toggleActions: "play none none reverse",
        scrub: true,
        markers: true,
      },
    });
  }, []);

  return (
    <div className="w-full py-16">
      <div className="w-fit" ref={galleryInnerRef}>
        <div className="w-fit flex" ref={galleryFlexRef}>
          <div className="js-gallery grid w-fit mx-auto gap-5 grid-cols-[200px_300px_500px_200px] grid-rows-[200px_100px_200px] px-2.5">
            <Image
              className="block rounded-2xl overflow-hidden w-full h-full col-start-1 row-start-1 row-end-4"
              src="https://picsum.photos/200/500"
              alt=""
              width={200}
              height={500}
            />
            <Image
              className="block rounded-2xl overflow-hidden w-full h-full col-start-2 row-start-1 row-end-3"
              src="https://picsum.photos/300/300"
              alt=""
              width={300}
              height={300}
            />
            <Image
              className="block rounded-2xl overflow-hidden w-full h-full col-start-2 row-start-3 row-end-4"
              src="https://picsum.photos/300/200"
              alt=""
              width={300}
              height={200}
            />
            <Image
              className="block rounded-2xl overflow-hidden w-full h-full row-start-1 row-end-4"
              src="https://picsum.photos/500/500"
              alt=""
              width={500}
              height={500}
            />
            <Image
              className="block rounded-2xl overflow-hidden w-full h-full col-start-4 row-start-1 row-end-2"
              src="https://picsum.photos/200/200"
              alt=""
              width={200}
              height={200}
            />
            <Image
              className="block rounded-2xl overflow-hidden w-full h-full col-start-4 row-start-2 row-end-4"
              src="https://picsum.photos/200/300"
              alt=""
              width={200}
              height={300}
            />
          </div>
          <div className="js-gallery grid w-fit mx-auto gap-5 grid-cols-[200px_300px_500px_200px] grid-rows-[200px_100px_200px] px-2.5">
            <Image
              className="block rounded-2xl overflow-hidden w-full h-full col-start-1 row-start-1 row-end-4"
              src="https://picsum.photos/200/500"
              alt=""
              width={200}
              height={500}
            />
            <Image
              className="block rounded-2xl overflow-hidden w-full h-full col-start-2 row-start-1 row-end-3"
              src="https://picsum.photos/300/300"
              alt=""
              width={300}
              height={300}
            />
            <Image
              className="block rounded-2xl overflow-hidden w-full h-full col-start-2 row-start-3 row-end-4"
              src="https://picsum.photos/300/200"
              alt=""
              width={300}
              height={200}
            />
            <Image
              className="block rounded-2xl overflow-hidden w-full h-full row-start-1 row-end-4"
              src="https://picsum.photos/500/500"
              alt=""
              width={500}
              height={500}
            />
            <Image
              className="block rounded-2xl overflow-hidden w-full h-full col-start-4 row-start-1 row-end-2"
              src="https://picsum.photos/200/200"
              alt=""
              width={200}
              height={200}
            />
            <Image
              className="block rounded-2xl overflow-hidden w-full h-full col-start-4 row-start-2 row-end-4"
              src="https://picsum.photos/200/300"
              alt=""
              width={200}
              height={300}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
