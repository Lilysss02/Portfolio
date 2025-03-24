import { z } from 'zod'

const kanaRegex = /^[\u30A0-\u30FF\u3000 ]*$/
const requiredString = z.string({ required_error: '必須項目です。' }).min(1, {
  message: '必須項目です。',
})
const emailValidation = requiredString.email({ message: 'メールアドレスの形式で入力してください。' })
const kanaValidation = requiredString.regex(kanaRegex, 'カタカナで入力してください。')

export const contactInput = z.object({
  name: requiredString,
  nameKana: kanaValidation,
  email: emailValidation,
  content: requiredString,
})

export type ContactInput = z.infer<typeof contactInput>
