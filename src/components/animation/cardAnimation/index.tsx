"use client";

import Image from "next/image";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type CardData = {
  id: number;
  image: string;
  text: string;
  color: string;
  isRight?: boolean;
};

const cardData: CardData[] = [
  {
    id: 1,
    image: "https://ryo-sukeblog.net/wp-content/uploads/2023/02/season01.webp",
    text: "桜、蛍、芽吹き、春雨",
    color: "bg-[#FC5E67]",
  },
  {
    id: 2,
    image: "https://ryo-sukeblog.net/wp-content/uploads/2023/02/season02.webp",
    text: "海、夏祭り、かき氷、蝉",
    color: "bg-[#18D1E6]",
    isRight: true,
  },
  {
    id: 3,
    image: "https://ryo-sukeblog.net/wp-content/uploads/2023/02/season03.webp",
    text: "紅葉、銀杏、食欲の秋、薄",
    color: "bg-[#A34E11]",
  },
  {
    id: 4,
    image: "https://ryo-sukeblog.net/wp-content/uploads/2023/02/season04.webp",
    text: "雪、餅、かまくら、七草",
    color: "bg-[#3A5D68]",
    isRight: true,
  },
];

const Card: React.FC<CardData> = ({ image, text, color, isRight }) => (
  <li className={`card w-100 h-130 relative ${isRight ? "ml-auto" : ""}`}>
    <a
      href="./"
      className={`block w-full h-full ${
        isRight ? "translate-x-25" : "-translate-x-25"
      } translate-y-10`}
    >
      <Image
        className={`w-full h-full object-cover opacity-0 invisible ${
          isRight ? "-rotate-8 origin-top-right" : "rotate-8 origin-top-left"
        }`}
        width="380"
        height="530"
        src={image}
        alt=""
      />
      <div
        className={`text-wrap w-fit h-auto py-10 px-5 absolute bottom-0 z-1 translate-y-[30%] ${color} ${
          isRight
            ? "right-0 rounded-l-lg [clip-path:inset(0_0_0_100%)]"
            : "left-0 rounded-r-lg [clip-path:inset(0_100%_0_0)]"
        }`}
      >
        <p className="text-white font-bold text-lg">{text}</p>
      </div>
    </a>
  </li>
);

export const CardAnimation = () => {
  const setupAnimation = (
    cards: HTMLDivElement[],
    cardImgs: HTMLImageElement[],
    cardLinks: HTMLAnchorElement[],
    cardTexts: HTMLDivElement[]
  ) => {
    cards.forEach((_, index) => {
      const tl = gsap.timeline();
      tl.to(cardImgs[index], {
        autoAlpha: 1,
        rotate: 0,
        duration: 0.7,
        ease: "power2.inOut",
      })
        .to(
          cardLinks[index],
          {
            y: 0,
            x: 0,
            duration: 0.7,
            ease: "power2.inOut",
          },
          "<"
        )
        .to(cardTexts[index], {
          clipPath: "inset(0 0% 0 0%)",
          duration: 0.7,
          ease: "power2.inOut",
        });

      ScrollTrigger.create({
        animation: tl,
        trigger: cards[index],
        start: "top center",
        toggleActions: "play none none reverse",
      });
    });
  };

  useEffect(() => {
    const cards = gsap.utils.toArray<HTMLDivElement>(".card");
    const cardImgs = gsap.utils.toArray<HTMLImageElement>(".card img");
    const cardLinks = gsap.utils.toArray<HTMLAnchorElement>(".card a");
    const cardTexts = gsap.utils.toArray<HTMLDivElement>(".text-wrap");

    setupAnimation(cards, cardImgs, cardLinks, cardTexts);
  }, []);

  return (
    <div className="max-w-[900px] mx-auto w-full min-h-screen overflow-hidden py-20">
      <ul className="grid grid-cols-2 gap-x-10 gap-y-20">
        {cardData.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </ul>
    </div>
  );
};
