import { formatDate } from '@/libs/formatDate'
import { NextRequest, NextResponse } from 'next/server'
import { createTransport } from 'nodemailer'

export async function POST(req: NextRequest) {
  const json = await req.json()
  const sendDate = formatDate(new Date(), 'yyyy年M月d日 HH:mm') // 送信日時

  // SMTP設定
  const transporter = createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT), // SSL/TLSで送信する場合は465、使用しない場合は587
    secure: false, // SSL/TLSを使用しない場合false
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  })

  // 管理者宛メール設定
  const adminMailOptions = {
    from: process.env.SMTP_USER, // 送信元アドレス
    to: process.env.SMTP_USER, // 送信先のアドレス
    subject: 'お問い合わせを受け付けました',
    text: `送信日時：${sendDate}

以下のお問い合わせを受け付けました。

=========
ご入力内容
=========
${getMessage({ content: json })}
`,
  }

  // 自動返信メールの内容
  const autoReplyMessage = getMessage({ content: json })

  try {
    // 管理者宛にメール送信
    await transporter.sendMail(adminMailOptions)

    // 自動返信メール送信
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: json.email,
      subject: 'お問い合わせを受け付けました',
      text: autoReplyMessage,
    })

    return NextResponse.json(
      { message: 'メールが送信されました。' },
      {
        status: 200,
        headers: { 'Content-Type': 'text/plain' },
      },
    )
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { message: 'メールの送信中にエラーが発生しました。' },
      {
        status: 500,
        headers: { 'Content-Type': 'text/plain' },
      },
    )
  }
}

type Props = {
  content: any
}

// 返信メールの内容
const getMessage = ({ content }: Props) => {
  return `お名前：${content.name}
フリガナ：${content.nameKana}
メールアドレス：${content.email}
お問い合わせ内容：${content.content}
`
}
