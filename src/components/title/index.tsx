type Props = {
  title: string
  subtitle: string
}

export const Title = ({ title, subtitle }: Props) => {
  return (
    <hgroup className="mx-auto pb-5 text-center">
      <p className="title font-caveat text-primary from-pink to-blue clip-text mx-auto w-fit bg-linear-to-r text-6xl font-black capitalize px-5">
        {title}
      </p>
      <h2 className="text-xl font-medium">{subtitle}</h2>
    </hgroup>
  )
}
