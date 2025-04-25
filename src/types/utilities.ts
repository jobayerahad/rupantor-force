import { StatusMsg } from '@config/constants'

export type SharedMetaData = {
  title: string
  description: string
  image?: string
  path: string
}

export type ActionRes = {
  status: StatusMsg
  message: string
  data?: any
}
