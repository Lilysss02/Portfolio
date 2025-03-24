"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const BgExpansion = () => {
  const serviceBgRef = useRef<HTMLDivElement | null>(null);
  const serviceStickyRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.to(serviceBgRef.current, {
      "--scaleX": 1,
      "--scaleY": 1,
      "--borderRadius": 0,
      scrollTrigger: {
        trigger: serviceStickyRef.current,
        start: "center center",
        // markers: true,
        scrub: 0.8,
        pin: true,
        id: "bg-expansion-trigger",
        refreshPriority: 2, // 優先度を設定
      },
    });
  }, []);

  return (
    <div className="overflow-hidden w-full">
      <div ref={serviceStickyRef} className="h-screen w-full flex items-end">
        <div
          ref={serviceBgRef}
          className="relative z-1 w-full h-100 flex items-center justify-center mx-auto before:-z-1 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-black before:rounded-[var(--borderRadius)] before:scaleX-[var(--scaleX)] before:scaleY-[var(--scaleY)]"
          style={
            {
              "--scaleX": ".8",
              "--scaleY": ".8",
              "--borderRadius": "200px",
            } as React.CSSProperties
          }
        >
          <p className="text-white text-2xl">Spreading Object</p>
        </div>
      </div>
      <div className="bg-black h-100 -mt-1" />
    </div>
  );
};
