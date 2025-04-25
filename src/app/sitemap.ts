import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.rupantorforce.com',
      lastModified: new Date()
    },
    {
      url: 'https://www.rupantorforce.com/about-us',
      lastModified: new Date()
    }
  ]
}
