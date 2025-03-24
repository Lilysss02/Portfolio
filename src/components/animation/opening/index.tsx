"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
export const Opening = () => {
  const links = ["Home", "About", "Service", "News", "Recruit"];
  const openingImg = useRef<HTMLImageElement>(null);
  const bodyRef = useRef<HTMLBodyElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const textAnimationRef = useRef<NodeListOf<Element> | null>(null);

  useEffect(() => {
    bodyRef.current = document.querySelector("body");
    gsap.set(bodyRef.current, {
      overflow: "hidden",
    });
    textAnimationRef.current = document.querySelectorAll(
      ".js-textAnimation span"
    );
    // MVアニメーション
    const openingTL = gsap.timeline();
    openingTL
      .to(openingImg.current, {
        y: 0,
        duration: 1.5,
        ease: "power3.out",
      })
      .to(openingImg.current, {
        scale: 1,
        duration: 1.5,
      })
      .to(openingImg.current, {
        filter: "grayscale(0)",
        duration: 0.5,
      })
      .to(textAnimationRef.current, {
        y: 0,
        duration: 1,
        stagger: 0.1,
      })
      .to(
        headerRef.current,
        {
          y: 0,
          duration: 1,
        },
        "-=.8"
      )
      .set(bodyRef.current, {
        overflow: "visible",
      });
  }, []);
  return (
    <>
      <header
        ref={headerRef}
        className="header fixed top-0 left-0 w-full z-20 h-25 -translate-y-full"
      >
        <nav className="header__nav w-full h-full">
          <ul className="header__lists flex justify-end items-center h-full w-full px-8">
            {links.map((link, index) => (
              <li key={index} className="header__list h-full">
                <a
                  className="flex items-center justify-center h-full text-2xl font-bold px-2.5 py-5 text-black"
                  href=""
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <div className="opening h-screen w-screen inset-0 z-10">
        <img
          ref={openingImg}
          className="opening__img absolute top-0 left-0 w-full h-full object-cover translate-y-1/2 scale-50 grayscale-100"
          width="1920"
          height="1080"
          src="https://ryo-sukeblog.net/wp-content/uploads/2023/02/search.webp"
          alt=""
        />
        <div className="opening__container absolute left-0 bottom-0 w-fit h-fit p-10">
          <h1 className="js-textAnimation overflow-hidden opening__title text-7xl font-black font-serif italic text-black">
            <span className="inline-block translate-y-full">Site Title</span>
          </h1>
          <h2 className="js-textAnimation overflow-hidden opening__heading text-6xl font-black font-serif italic my-10 text-black">
            <span className="inline-block translate-y-full">
              Lorem ipsum dolor
            </span>
          </h2>
          <p className="js-textAnimation overflow-hidden opening__text text-3xl font-black font-serif italic text-black">
            <span className="inline-block translate-y-full">
              Laborum quia amet facilis voluptate sed?
            </span>
          </p>
          <p className="js-textAnimation overflow-hidden opening__text text-3xl font-black font-serif italic text-black">
            <span className="inline-block translate-y-full">
              Illo incidunt reprehenderit harum
            </span>
          </p>
          <p className="js-textAnimation overflow-hidden opening__text text-3xl font-black font-serif italic text-black">
            <span className="inline-block translate-y-full">
              eos beatae qui magni praesentium?
            </span>
          </p>
        </div>
      </div>
    </>
  );
};
