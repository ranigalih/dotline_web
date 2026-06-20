import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Menentukan direktori penyimpanan file artikel markdown (.mdx)
const postsDirectory = path.join(process.cwd(), 'src/content/blogs');

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  description: string;
  author: string;
  coverImage: string; 
  content: string;
};

// 1. Mengambil semua daftar nama file berkas berakhiran .mdx
export function getPostSlugs() {
  if (!fs.existsSync(postsDirectory)) return [];
  return fs.readdirSync(postsDirectory).filter(file => file.endsWith('.mdx'));
}

// 2. Membaca data isi konten dan metadata frontmatter berdasarkan slug
export function getPostBySlug(slug: string): BlogPost {
  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = path.join(postsDirectory, `${realSlug}.mdx`);
  
  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug: realSlug,
      title: data.title || 'Untitled',
      date: data.date || '',
      description: data.description || '',
      author: data.author || 'Dotlinetattu',
      coverImage: data.coverImage || '/images/default-blog.jpg', 
      content: content,
    };
  } catch (error) {
    // Memberikan fallback aman jika ada berkas mdx yang rusak atau gagal dibaca
    console.error(`Gagal membaca berkas MDX pada slug: ${realSlug}`, error);
    return {
      slug: realSlug,
      title: 'Untitled',
      date: '',
      description: '',
      author: 'Dotlinetattu',
      coverImage: '/images/default-blog.jpg',
      content: '',
    };
  }
}

// 3. Mengambil seluruh postingan blog sekaligus dan mengurutkannya dari yang paling baru
export function getAllPosts(): BlogPost[] {
  const slugs = getPostSlugs();
  
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    // Perbaikan Logika Sortir: Mengonversi string tanggal menjadi angka Unix timestamp demi keakuratan sistem urutan
    .sort((post1, post2) => {
      const time1 = post1.date ? new Date(post1.date).getTime() : 0;
      const time2 = post2.date ? new Date(post2.date).getTime() : 0;
      return time2 - time1; // Tanggal paling baru berada di atas (Descending)
    });

  return posts;
}