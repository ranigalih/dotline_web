import { MetadataRoute } from 'next';
import { getPostSlugs } from '@/lib/mdx';

const baseUrl = 'https://dotlinetattu.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '/',
    '/about',
    '/portfolio',
    '/testimonials',
    '/faq',
    '/apprentices',
    '/blog',
    '/booking',
  ];

  const blogRoutes = getPostSlugs().map((slug) => ({
    url: `${baseUrl}/blog/${slug.replace(/\.mdx$/, '')}`,
    lastModified: new Date().toISOString(),
    changefreq: 'weekly',
    priority: 0.7,
  }));

  const sitemapEntries: MetadataRoute.Sitemap = [
    ...staticRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date().toISOString(),
      changefreq: 'daily',
      priority: 0.9,
    })),
    ...blogRoutes,
  ];

  return sitemapEntries;
}
