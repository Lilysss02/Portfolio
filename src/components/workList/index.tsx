import { Work } from '@/type/base'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  works: Work[]
}

export const WorkList = ({ works }: Props) => (
  <ul className="flex">
    {works.map((work: Work) => {
      const { image, title, detail, period, implementation, skill, content, link } = work
      return (
        <li key={title} className="md:w-1/3">
          <Image src={image.url} width={image.width} height={image.height} alt={title} />
          <p className="text-center text-xl font-bold">{title}</p>
          <p>制作期間：{period}</p>
          <p>担当範囲：{implementation}</p>
          <p>使用技術：{skill}</p>
          {link && (
            <Link href={link}>Link</Link>
          )}
        </li>
      )
    })}
  </ul>
)
