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

  // Perbaikan: Pastikan tipe data changeFrequency didefinisikan dengan benar
  const blogRoutes = getPostSlugs().map((slug) => ({
    url: `${baseUrl}/blog/${slug.replace(/\.mdx$/, '')}`,
    lastModified: new Date(), // Lebih aman menggunakan objek Date langsung dibanding .toISOString()
    changeFrequency: 'weekly' as const, // Menggunakan CamelCase dan 'as const'
    priority: 0.7,
  }));

  const sitemapEntries: MetadataRoute.Sitemap = [
    ...staticRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const, // Menggunakan CamelCase dan 'as const'
      priority: 0.9,
    })),
    ...blogRoutes,
  ];

  return sitemapEntries;
}