"use client";

import { useState } from "react";
import { X, ZoomIn } from "lucide-react";

// Mock Data Portfolio dengan kategori yang bervariasi untuk simulasi filter
const portfolioItems = [
  { id: 1, category: "Handpoke", src: "/portfolio/portfolio-1.jpeg", alt: "Dotlinetattu Handpoke Tattoo Bali 1" },
  { id: 2, category: "Handpoke", src: "/portfolio/portfolio-2.jpeg", alt: "Dotlinetattu Handpoke Tattoo Bali 2" },
  { id: 3, category: "Machine", src: "/portfolio/portfolio-3.jpeg", alt: "Dotlinetattu Custom Machine Tattoo 1" },
  { id: 4, category: "Traditional", src: "/portfolio/portfolio-4.jpeg", alt: "Dotlinetattu Traditional Tattoo Art" },
  { id: 5, category: "Handpoke", src: "/portfolio/portfolio-5.jpeg", alt: "Dotlinetattu Handpoke Tattoo Bali 3" },
  { id: 6, category: "Machine", src: "/portfolio/portfolio-6.jpeg", alt: "Dotlinetattu Custom Machine Tattoo 2" },
  { id: 7, category: "Traditional", src: "/portfolio/portfolio-7.jpeg", alt: "Dotlinetattu Traditional Balinese Tattoo" },
  { id: 8, category: "Handpoke", src: "/portfolio/portfolio-8.jpeg", alt: "Dotlinetattu Handpoke Tattoo Bali 4" },
  { id: 9, category: "Machine", src: "/portfolio/portfolio-9.jpeg", alt: "Dotlinetattu Custom Machine Tattoo 3" },
  { id: 10, category: "Traditional", src: "/portfolio/portfolio-10.jpeg", alt: "Dotlinetattu Traditional Design Art" },
];

// Opsi menu navigasi kategori filter (Termasuk opsi ALL untuk melihat semua karya)
const categories = ["ALL", "Handpoke", "Machine", "Traditional"];

export function PortfolioGallery() {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  // Perbaikan Logika Filter: Menyaring gambar berdasarkan state aktif yang dipilih user
  const filteredItems = activeFilter === "ALL" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category.toLowerCase() === activeFilter.toLowerCase());

  return (
    <>
      {/* Kategori Filter Navigasi */}
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-6 py-2 text-xs tracking-[0.2em] uppercase transition-all duration-300 border rounded-none ${
              activeFilter === category 
                ? "border-gingerbread bg-gingerbread text-white" 
                : "border-white/20 text-muted-foreground hover:border-gingerbread hover:text-gingerbread"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Masonry Layout Grid */}
      {filteredItems.length > 0 ? (
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="break-inside-avoid relative group cursor-pointer overflow-hidden border border-white/10 bg-zinc-900 transition-all duration-300"
              onClick={() => setLightboxImg(item.src)}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-auto object-cover sepia-[0.3] brightness-110 contrast-105 group-hover:sepia-0 group-hover:brightness-100 group-hover:contrast-100 transition-all duration-700"
                loading="lazy"
              />
              
              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gingerbread/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white flex flex-col items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <ZoomIn size={28} />
                  <span className="text-[10px] tracking-widest uppercase font-medium">View Artwork</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Empty State Layout Customization */
        <div className="border border-white/10 bg-white/5 p-16 text-center text-muted-foreground rounded-none tracking-wide text-sm">
          No portfolio items found in this category.
        </div>
      )}

      {/* Lightbox Preview Modal */}
      {lightboxImg && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setLightboxImg(null)}
        >
          {/* Tombol Close */}
          <button 
            className="absolute top-6 right-6 lg:top-10 lg:right-10 text-white/50 hover:text-gingerbread transition-colors p-2 focus:outline-none"
            onClick={() => setLightboxImg(null)}
            aria-label="Close Lightbox"
          >
            <X size={36} />
          </button>
          
          {/* Gambar Pratinjau Besar */}
          <img 
            src={lightboxImg} 
            alt="Expanded Tattoo Portfolio" 
            className="max-w-full max-h-[85vh] object-contain shadow-2xl border border-white/10 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()} 
          />
        </div>
      )}
    </>
  );
}