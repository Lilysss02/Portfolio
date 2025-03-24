import { microCMSClient } from '@/libs/microcms'
import { Base } from '@/type/base'

export const getBase = async () => {
  const base = await microCMSClient.get<Base>({ endpoint: 'base' })

  return base
}
