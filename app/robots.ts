import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', '/about', '/portfolio', '/resume', '/contact'],
        disallow: ['/private/', '/tmp/', '/_next/'],
      },
    ],
    sitemap: 'https://mjawwadraza.com/sitemap.xml',
  }
}
