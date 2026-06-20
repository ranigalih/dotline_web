import { getPostBySlug, getPostSlugs } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Calendar, User, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

// 1. Generate Static Params: Memberitahu Next.js artikel apa saja yang harus di-build saat deploy
export async function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({
    slug: slug.replace(/\.mdx$/, ""),
  }));
}

// 2. Dynamic SEO Metadata: Mengambil judul & deskripsi langsung dari file MDX (Fix Async Params)
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  try {
    const post = getPostBySlug(resolvedParams.slug);
    return {
      title: `${post.title} | Dotlinetattu Journal`,
      description: post.description,
      openGraph: {
        images: [post.coverImage],
      },
    };
  } catch (error) {
    return {
      title: "Not Found | Dotlinetattu",
    };
  }
}

// 3. Halaman Utama Artikel
export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  
  let post;
  try {
    post = getPostBySlug(resolvedParams.slug);
  } catch (error) {
    // Jika artikel tidak ditemukan, lemparkan ke halaman 404 Next.js
    notFound();
  }

  return (
    <article className="min-h-screen pt-32 pb-24 relative selection:bg-gingerbread selection:text-white overflow-hidden bg-black text-white">
      
      {/* 
        === FIX TURBOPACK BUG: SINKRONISASI WARNA BURN GINGER === 
        Mengubah --color-gingerbread menjadi --gingerbread agar aman dibaca global CSS
      */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] md:w-[120%] h-[80vh] bg-[radial-gradient(ellipse_at_top,_var(--gingerbread)_0%,_transparent_70%)] opacity-20 pointer-events-none z-0" />

      {/* Konten di atas pendar cahaya */}
      <div className="container px-6 mx-auto max-w-4xl relative z-10">
        
        {/* Tombol Back */}
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground hover:text-gingerbread transition-colors mb-12"
        >
          <ArrowLeft size={14} /> Back to Journal
        </Link>

        {/* Article Header */}
        <header className="mb-16">
          <div className="flex items-center gap-4 text-xs text-muted-foreground mb-6">
            <span className="flex items-center gap-1.5">
              <Calendar size={14} className="text-gingerbread" />
              {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span className="flex items-center gap-1.5">
              <User size={14} className="text-gingerbread" />
              {post.author}
            </span>
          </div>

          {/* Kunci Font Utama Judul Artikel */}
          <h1 className="text-4xl md:text-6xl font-graduated mb-8 leading-tight text-white">
            {post.title}
          </h1>

          {/* Cover Image */}
          <div className="w-full relative overflow-hidden border border-white/10 mb-12 bg-black/20">
            <img 
              src={post.coverImage} 
              alt={post.title} 
              className="w-full h-auto max-h-[600px] object-contain mx-auto"
            />
          </div>
        </header>

        {/* 
          === KUNCI TOTAL VISUAL TIPOGRAFI MDX ===
          Seluruh heading h1, h2, h3 di dalam postingan otomatis dipaksa pakai font-graduated bawaanmu
        */}
        <div className="prose prose-invert prose-gingerbread max-w-none 
          prose-headings:font-graduated prose-headings:font-normal prose-headings:tracking-wide
          prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:font-light prose-p:text-justify
          prose-a:text-gingerbread hover:prose-a:text-gingerbread-hover prose-a:transition-colors
          prose-img:rounded-sm prose-img:border prose-img:border-white/10 prose-img:w-full
          prose-strong:text-white"
        >
          <MDXRemote source={post.content} />
        </div>

      </div>
    </article>
  );
}