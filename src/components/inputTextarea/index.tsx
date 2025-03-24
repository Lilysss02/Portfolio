import { FieldError, UseFormRegisterReturn } from 'react-hook-form'

type Props = {
  type?: string
  placeholder?: string
  register?: UseFormRegisterReturn
  error?: FieldError
}

export const InputTextarea = ({ placeholder, register, error }: Props) => (
  <div>
    <textarea
      className="block w-full rounded-xs border border-gray-400 px-3 py-2 placeholder:text-gray-400 md:text-sm"
      placeholder={placeholder}
      rows={8}
      {...register}
    />
    {error && <p className="mt-1 text-xs text-red-500">{error.message}</p>}
  </div>
)
