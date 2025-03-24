'use client'

import { contactInput, ContactInput } from '@/libs/validation'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { InputText } from '../inputText'
import { FormLabel } from '../formLabel'
import { InputTextarea } from '../inputTextarea'

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<ContactInput>({
    criteriaMode: 'all',
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    resolver: zodResolver(contactInput),
  })

  const [isSending, setIsSending] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string>('')

  // watchでフォームの各フィールドの値を監視
  const watchFields = watch(['name', 'nameKana', 'email', 'content'])
  const isFormFilled = watchFields.every((field) => field && field.trim() !== '')

  const isFormValid = isFormFilled && Object.keys(errors).length === 0 && !isSending

  const onSubmit: SubmitHandler<ContactInput> = async (input) => {
    setIsSending(true)
    setErrorMessage('')

    try {
      // APIエンドポイントにPOSTリクエストを送信
      const response = await fetch('/api/send-mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...input,
        }),
      })

      if (response.ok) {
        window.location.href = '/thanks/'
      }
    } catch (error: any) {
      setErrorMessage('メールの送信に失敗しました。')
      console.error(error.message)
    } finally {
      setIsSending(false)
    }
  }

  return (
    <div className="mx-auto max-w-2xl">
      <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)} id="form_contact" name="form_contact">
        <FormLabel label="お名前">
          <InputText placeholder="佐藤　花子" register={register('name')} error={errors.name} />
        </FormLabel>
        <FormLabel label="フリガナ">
          <InputText placeholder="サトウ　ハナコ" register={register('nameKana')} error={errors.nameKana} />
        </FormLabel>
        <FormLabel label="メールアドレス">
          <InputText type="email" placeholder="sample@gmail.com" register={register('email')} error={errors.email} />
        </FormLabel>
        <FormLabel label="お問い合わせ内容">
          <InputTextarea
            placeholder="お問い合わせ内容をご記入ください"
            register={register('content')}
            error={errors.content}
          />
        </FormLabel>
        <button
          type="submit"
          className={`text-foreground relative mx-auto w-full max-w-80 overflow-hidden rounded-full text-center leading-10 font-bold before:absolute before:inset-0 before:bg-white before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-80 ${isFormValid ? 'from-pink to-blue cursor-pointer bg-linear-to-r' : 'pointer-events-none bg-gray-300 text-white'}`}
          disabled={!isFormValid}
        >
          {isSending ? '送信中' : '送信する'}
        </button>
        {errorMessage && <p className="text-center text-sm font-bold text-red-500">{errorMessage}</p>}
      </form>
    </div>
  )
}
