import { MetadataRoute } from 'next';
import { getPostSlugs } from '@/lib/mdx';

const baseUrl = 'https://dotlinetattuhandpokebali.com'; 

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // 1. Definisikan rute statis dengan kustomisasi priority & changeFrequency masing-masing
  const staticEntries: MetadataRoute.Sitemap = [
    { url: `${baseUrl}`, lastModified: new Date(), changeFrequency: 'daily', priority: 1.0 }, // Homepage harus paling tinggi
    { url: `${baseUrl}/booking`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${baseUrl}/portfolio`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/faq`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/testimonials`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/apprentices`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
  ];

  // 2. Ambil rute dinamis untuk postingan blog MDX secara otomatis dengan fallback aman
  const slugs = await Promise.resolve()
    .then(() => getPostSlugs())
    .catch(() => []);

  const blogEntries: MetadataRoute.Sitemap = (slugs ?? [])
    .filter((slug) => typeof slug === 'string' && slug.length > 0)
    .map((slug) => ({
      url: `${baseUrl}/blog/${slug.replace(/\.mdx$/, '')}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7, // Artikel blog mendapatkan prioritas menengah-tinggi
    }));

  // Gabungkan seluruh barisan rute untuk diserahkan ke Google Search Console
  return [...staticEntries, ...blogEntries];
}