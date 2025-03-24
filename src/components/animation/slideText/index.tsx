"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const SlideText = () => {
  const aboutTextRef = useRef<HTMLParagraphElement | null>(null);
  const aboutTextSpanRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    gsap.fromTo(
      aboutTextRef.current,
      {
        x: "50%",
      },
      {
        x: 0,
        scrollTrigger: {
          trigger: aboutTextRef.current,
          start: "top bottom",
          end: "center center",
          scrub: 1.5,
        },
      }
    );
    gsap.to(aboutTextSpanRef.current, {
      color: "#DC3001",
      duration: 0.5,
      scrollTrigger: {
        trigger: aboutTextSpanRef.current,
        start: "top center",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <p
      ref={aboutTextRef}
      className="w-fit text-4xl font-bold font-serif italic whitespace-nowrap text-center mx-auto translate-x-1/2"
    >
      Text flows from right to left when scrolling{" "}
      <span ref={aboutTextSpanRef} className="transition-colors duration-500">
        gsap
      </span>{" "}
      is convenient! !
    </p>
  );
};
