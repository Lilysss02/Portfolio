import Link from 'next/link'

export default function Thanks() {
  return (
    <div className="grid flex-1 place-items-center">
      <div className="flex flex-col items-center justify-center gap-4">
        <p className="text-3xl font-bold">お問い合わせありがとうございました！</p>
        <span className="text-sm">3営業日以内に担当者よりご連絡差し上げます。</span>
        <Link href="/" className="text-primary text-sm underline transition-opacity duration-300 md:hover:opacity-80">
          HOMEに戻る
        </Link>
      </div>
    </div>
  )
}
