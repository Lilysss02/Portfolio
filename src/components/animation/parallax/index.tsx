"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Parallax = () => {
  const ctaRef = useRef<HTMLDivElement>(null);
  const ctaImgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // パララックス
    gsap.fromTo(
      ctaImgRef.current,
      {
        y: 100,
      },
      {
        y: -100,
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top bottom",
          end: "top top",
          scrub: 1,
        },
      }
    );
    gsap.fromTo(
      ctaImgRef.current,
      {
        filter: "blur(10px)",
      },
      {
        filter: "blur(0px)",
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top bottom",
          end: "top center",
          scrub: 1,
        },
      }
    );
  }, []);

  return (
    <section ref={ctaRef} className="cta h-100 overflow-hidden relative z-1">
      <a href="./" className="cta__inner h-full w-full flex items-center group">
        <div className="cta__content max-w-225 w-full mx-auto px-5">
          <span className="cta__sub text-3xl text-gray-800">CONTACT</span>
          <h2 className="cta__heading text-lg text-gray-800">お問い合わせ</h2>
          <p className="cta__button w-fit text-white bg-gray-800 rounded py-4 px-8 mt-10 transition-colors duration-200 group-hover:bg-white group-hover:text-gray-800">
            詳しく見る
          </p>
        </div>
        <div className="cta__img-wrap absolute top-0 left-0 w-full h-full -z-1 transition-transform duration-800 ease-out group-hover:scale-105">
          <Image
            ref={ctaImgRef}
            className="cta__img w-full h-[150%] object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-1"
            width="1440"
            height="300"
            src="/image3.jpg"
            alt=""
          />
        </div>
      </a>
    </section>
  );
};
