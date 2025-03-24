"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const slides = ["bg-red-500", "bg-blue-500", "bg-green-500", "bg-yellow-500"];

export const Slider = () => {
  const sliderRef = useRef<HTMLUListElement>(null);
  const moveX = -100 + 100 / slides.length;

  useEffect(() => {
    gsap.to(sliderRef.current, {
      xPercent: moveX,
      ease: "none",
      scrollTrigger: {
        trigger: sliderRef.current,
        start: "top top",
        end: `+=${window.innerWidth * slides.length}`, // 横スクロールの長さを設定
        scrub: 1,
        pin: true,
        //画面リサイズ時の値再計算
        invalidateOnRefresh: true,
        //高速スクロール時画面ずれ防止
        anticipatePin: 1,
        // markers: true,
        id: "slider-trigger",
        refreshPriority: 3, // 優先度を設定
      },
    });
    // ScrollTriggerのリフレッシュを実行
    ScrollTrigger.refresh();
  }, []);

  return (
    <ul ref={sliderRef} className="w-fit flex h-screen">
      {slides.map((slide, index) => (
        <li
          className={`w-screen h-full flex items-center justify-center ${slide}`}
          key={slide}
        >
          <p className="text-4xl">パネル{index + 1}</p>
        </li>
      ))}
    </ul>
  );
};
