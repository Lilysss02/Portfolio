import { Caveat, Zen_Kaku_Gothic_New } from 'next/font/google'

export const caveat = Caveat({
  weight: '700',
  subsets: ['latin'],
  variable: '--font-caveat',
  preload: true,
  display: 'swap',
})

export const zenkaku = Zen_Kaku_Gothic_New({
  weight: ['400', '500', '700', '900'],
  subsets: ['latin'],
  variable: '--font-zenkaku',
  preload: true,
  display: 'swap',
})
