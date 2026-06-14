import { MetadataRoute } from 'next';
import { getPostSlugs } from '@/lib/mdx';


const baseUrl = 'https://dotlinetattuhandpokebali.com'; 

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
    lastModified: new Date(), 
    changeFrequency: 'weekly' as const, 
  }));

  const sitemapEntries: MetadataRoute.Sitemap = [
    ...staticRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const, 
      priority: 0.9,
    })),
    ...blogRoutes,
  ];

  return sitemapEntries;
}