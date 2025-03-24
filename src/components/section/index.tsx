"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Section = ({
  en,
  jp,
  children,
}: {
  en: string;
  jp: string;
  children?: React.ReactNode;
}) => {
  const textEffectTriggersRef = useRef<NodeListOf<Element> | null>(null);

  useEffect(() => {
    // const textEffectTrigger = document.querySelectorAll(
    //   ".js-title-mask-trigger"
    // ); //ターゲットとなる要素を全取得

    // textEffectTrigger.forEach((trigger, index) => {
    //   const textEffectTL = gsap.timeline();
    //   const target = trigger.querySelectorAll(".js-title-mask");
    //   textEffectTL
    //     .to(target, { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.1 })
    //     .to(target, { "--translateX": "101%", duration: 0.5, stagger: 0.1 });
    //   ScrollTrigger.create({
    //     trigger: trigger,
    //     start: "bottom bottom",
    //     animation: textEffectTL,
    //     // markers: true,
    //     id: `section-trigger-${index}`, // 各トリガーに一意のIDを設定
    //     refreshPriority: 1, // 優先度を設定
    //   });
    // });

    textEffectTriggersRef.current = document.querySelectorAll(
      ".js-title-mask-trigger"
    );
    // タイトルマスクアニメーション
    textEffectTriggersRef.current?.forEach((trigger, index) => {
      console.log(trigger);
      const target = trigger.querySelectorAll(".js-title-mask");
      const textEffectTL = gsap.timeline({
        scrollTrigger: {
          trigger: trigger,
          start: "top bottom",
          end: "bottom top",   // スクロール終了位置を追加
          // markers: true,
          id: `section-trigger-${index}`, // 各トリガーに一意のIDを設定
          refreshPriority: 1, // 優先度を設定
        },
      });
      textEffectTL
        .to(target, {
          autoAlpha: 1,
          stagger: 0.1,
        })
        .to(target, {
          "--translateX": "101%",
        });
    });
    // ScrollTriggerのリフレッシュを実行
    ScrollTrigger.refresh();
  }, []);
  return (
    <section className="py-10 overflow-hidden min-h-screen">
      <div className="mb-10 max-w-7xl mx-auto w-[calc(100%-2rem)]">
        <hgroup className="js-title-mask-trigger w-fit">
          <p
            className="js-title-mask relative opacity-0 overflow-hidden invisible before:w-full before:h-full before:bg-[#DC3001] before:absolute before:top-0 before:left-0 before:translate-x-(--translateX) text-6xl font-bold font-serif italic text-[#DC3001]"
            style={{ "--translateX": "0px" } as React.CSSProperties}
          >
            {en}
          </p>
          <h2
            className="js-title-mask relative opacity-0 overflow-hidden invisible before:w-full before:h-full before:bg-[#DC3001] before:absolute before:top-0 before:left-0 before:translate-x-(--translateX) w-fit text-lg text-black"
            style={{ "--translateX": "0px" } as React.CSSProperties}
          >
            {jp}
          </h2>
        </hgroup>
      </div>
      {children}
    </section>
  );
};
