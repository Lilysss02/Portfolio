import { parseISO } from 'date-fns'
import { formatInTimeZone } from 'date-fns-tz'

export const formatDate = (date: string | Date, formatType = 'yyyy.MM.dd') => {
  let dateObj: Date

  if (typeof date === 'string') {
    dateObj = parseISO(date) // Dateオブジェクトに変換
  } else {
    dateObj = date
  }

  const timeZone = 'Asia/Tokyo'

  // 指定したフォーマットで日付を出力
  return formatInTimeZone(dateObj, timeZone, formatType)
}
