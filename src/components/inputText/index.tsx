import { FieldError, UseFormRegisterReturn } from 'react-hook-form'

type Props = {
  type?: string
  placeholder?: string
  register?: UseFormRegisterReturn
  error?: FieldError
}

export const InputText = ({ type = 'text', placeholder, register, error }: Props) => (
  <div>
    <input
      type={type}
      className="w-full rounded-xs border border-gray-400 px-3.5 py-1.5 placeholder:text-gray-400 md:text-sm"
      placeholder={placeholder}
      {...register}
    />
    {error && <p className="mt-1 text-xs text-red-500">{error.message}</p>}
  </div>
)
