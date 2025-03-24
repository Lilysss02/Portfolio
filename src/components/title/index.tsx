type Props = {
  title: string
  subtitle: string
}

export const Title = ({ title, subtitle }: Props) => {
  return (
    <hgroup className="mx-auto pb-5 text-center">
      <p className="title font-caveat text-primary from-pink to-blue clip-text mx-auto w-fit bg-linear-to-r px-5 text-5xl font-black capitalize md:text-6xl">
        {title}
      </p>
      <h2 className="font-medium md:text-xl">{subtitle}</h2>
    </hgroup>
  )
}
