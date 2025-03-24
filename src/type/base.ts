import { MicroCMSImage, MicroCMSContentId, MicroCMSDate } from 'microcms-js-sdk'

export type Base = {
  fv: MicroCMSImage
  about_detail: string
  about_image: MicroCMSImage
  skills: Skill[]
  services: Service[]
  works: Work[]
} & MicroCMSContentId &
  MicroCMSDate

export type Skill = {
  // スキル名
  name: string
  // 習熟度
  proficiency: number
}

export type Service = {
  // サービス名
  name: string
  // サービス詳細
  detail: string
  image: MicroCMSImage
}

export type Work = {
  // 画像
  image: MicroCMSImage
  // タイトル
  title: string
  // 詳細
  detail?: string
  // 制作期間
  period?: string
  // 担当範囲
  implementation?: string
  // 使用技術
  skill?: string
  // 実装内容
  content?: string
  // リンク
  link?: string
}
