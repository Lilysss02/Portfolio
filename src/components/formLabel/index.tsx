import { ReactNode } from 'react'

type Props = {
  label: string
  isRequired?: boolean
  children: ReactNode
}

export const FormLabel = ({ label, isRequired = true, children }: Props) => (
  <div className="flex flex-col gap-2">
    <p className="flex items-center gap-1">
      {label}
      {isRequired && <span className={`text-red-500 text-xs font-bold`}>*</span>}
    </p>
    {children}
  </div>
)
