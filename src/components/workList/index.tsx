'use client'

import { Work } from '@/type/base'
import Image from 'next/image'
import Link from 'next/link'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Fragment } from 'react'
import './style.css'

type Props = {
  works: Work[]
}

export const WorkList = ({ works }: Props) => (
  <div className="overflow-hidden">
    <Swiper
      loop
      centeredSlides
      speed={1000}
      slidesPerView={1.2}
      spaceBetween={10}
      modules={[Pagination]}
      pagination={{
        clickable: true,
        el: `#swiper-pagination-work`,
      }}
      breakpoints={{
        768: {
          spaceBetween: 20,
          slidesPerView: 2.4,
        },
        1024: {
          slidesPerView: 3,
          centeredSlides: false,
        },
      }}
    >
      {works.map((work: Work) => {
        const { image, title, detail, period, implementation, skill, content, link } = work
        return (
          <SwiperSlide key={title}>
            <Image src={image.url} width={image.width} height={image.height} alt={title} />
            <p className="text-center text-xl font-bold">{title}</p>
            <p>制作期間：{period}</p>
            <p>担当範囲：{implementation}</p>
            <p>使用技術：{skill}</p>
            {link && <Link href={link}>Link</Link>}
          </SwiperSlide>
        )
      })}
    </Swiper>
    <div
      id="swiper-pagination-work"
      className="work-pagination swiper-pagination !static mt-5 flex w-full justify-center"
    />
  </div>
)
