import { Metadata } from 'next'
import { SharedMetaData } from '@types'

export const sharedMetadata = ({ description, image, path, title }: SharedMetaData): Metadata => ({
  metadataBase: new URL(`https://www.rupantorforce.com/${path}`),
  title: title,
  description: description,
  openGraph: {
    title: title,
    description: description,
    type: 'website',
    url: new URL(`https://www.rupantorforce.com/${path}`),
    countryName: 'Bangladesh',
    determiner: 'the',
    images: image || '/logo.png'
  }
})
