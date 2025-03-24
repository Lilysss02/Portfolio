import { Service } from '@/type/base'
import Image from 'next/image'

type Props = {
  services: Service[]
}

export const ServiceList = ({ services }: Props) => (
  <ul className="flex flex-col gap-5 md:flex-row">
    {services?.map((service: Service) => {
      const { image, name, detail } = service
      return (
        <li key={name} className="md:w-1/3">
          <Image src={image.url} width={image.width} height={image.height} alt={name} />
          <p className="mb-2 text-center text-xl font-bold">{name}</p>
          <p className="text-sm">{detail}</p>
        </li>
      )
    })}
  </ul>
)
