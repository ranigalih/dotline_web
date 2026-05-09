"use client";

import { useState } from "react";
import { X, ZoomIn } from "lucide-react";

// Mock Data Portfolio (Anda bisa menambahkannya nanti)
const portfolioItems = [
  { id: 1, category: "Gallery", src: "/portfolio/portfolio-1.jpg", alt: "Dotlinetattu Portfolio Photo 1" },
  // Perbaikan ID 2: Tadi ada titik di akhir ".jpg." (sudah dihapus)
  { id: 2, category: "Gallery", src: "/portfolio/portfolio-2.jpg", alt: "Dotlinetattu Portfolio Photo 2" },
  { id: 3, category: "Gallery", src: "/portfolio/portfolio-3.jpg", alt: "Dotlinetattu Portfolio Photo 3" },
  { id: 4, category: "Gallery", src: "/portfolio/portfolio-4.jpg", alt: "Dotlinetattu Portfolio Photo 4" },
  { id: 5, category: "Gallery", src: "/portfolio/portfolio-5.jpg", alt: "Dotlinetattu Portfolio Photo 5" },
  { id: 6, category: "Gallery", src: "/portfolio/portfolio-6.jpg", alt: "Dotlinetattu Portfolio Photo 6" },
  { id: 7, category: "Gallery", src: "/portfolio/portfolio-7.jpg", alt: "Dotlinetattu Portfolio Photo 7" },
  { id: 8, category: "Gallery", src: "/portfolio/portfolio-8.jpg", alt: "Dotlinetattu Portfolio Photo 8" },
  { id: 9, category: "Gallery", src: "/portfolio/portfolio-9.jpg", alt: "Dotlinetattu Portfolio Photo 9" },
  { id: 10, category: "Gallery", src: "/portfolio/portfolio-10.jpg", alt: "Dotlinetattu Portfolio Photo 10" },
  { id: 11, category: "Gallery", src: "/portfolio/portfolio-11.jpg", alt: "Dotlinetattu Portfolio Photo 11" },
  { id: 12, category: "Gallery", src: "/portfolio/portfolio-12.jpg", alt: "Dotlinetattu Portfolio Photo 12" },
  { id: 13, category: "Gallery", src: "/portfolio/portfolio-13.jpg", alt: "Dotlinetattu Portfolio Photo 13" },
  { id: 14, category: "Gallery", src: "/portfolio/portfolio-14.jpg", alt: "Dotlinetattu Portfolio Photo 14" },
  { id: 15, category: "Gallery", src: "/portfolio/portfolio-15.jpg", alt: "Dotlinetattu Portfolio Photo 15" },
  { id: 16, category: "Gallery", src: "/portfolio/portfolio-16.jpg", alt: "Dotlinetattu Portfolio Photo 16" },
  { id: 17, category: "Gallery", src: "/portfolio/portfolio-17.jpg", alt: "Dotlinetattu Portfolio Photo 17" },
  { id: 18, category: "Gallery", src: "/portfolio/portfolio-18.jpg", alt: "Dotlinetattu Portfolio Photo 18" },
  { id: 19, category: "Gallery", src: "/portfolio/portfolio-19.jpg", alt: "Dotlinetattu Portfolio Photo 19" },
  { id: 20, category: "Gallery", src: "/portfolio/portfolio-20.jpg", alt: "Dotlinetattu Portfolio Photo 20" },
  { id: 21, category: "Gallery", src: "/portfolio/portfolio-21.jpg", alt: "Dotlinetattu Portfolio Photo 21" },
];

const categories = ["Gallery"];

export function PortfolioGallery() {
  const [activeFilter, setActiveFilter] = useState("Gallery");
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  // Filter logika
  const filteredItems = portfolioItems;

  return (
    <>
      {/* Kategori Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-6 py-2 text-xs tracking-[0.2em] uppercase transition-all border ${
              activeFilter === category 
                ? "border-gingerbread bg-gingerbread text-white" 
                : "border-white/20 text-muted-foreground hover:border-gingerbread hover:text-gingerbread"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* CSS Masonry Grid */}
      {/* break-inside-avoid memastikan gambar tidak terpotong di tengah kolom */}
      {filteredItems.length > 0 ? (
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="break-inside-avoid relative group cursor-pointer overflow-hidden border border-white/10"
              onClick={() => setLightboxImg(item.src)}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-auto object-cover sepia-[0.3] brightness-110 contrast-105 group-hover:sepia-0 group-hover:brightness-100 group-hover:contrast-100 transition-all duration-700"
                loading="lazy"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gingerbread/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white flex flex-col items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <ZoomIn size={32} />
                  <span className="text-[10px] tracking-widest uppercase">View Details</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="rounded-3xl border border-white/10 bg-white/5 p-16 text-center text-muted-foreground">
          Portfolio items have been removed.
        </div>
      )}

      {/* Lightbox Overlay */}
      {lightboxImg && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setLightboxImg(null)} // Tutup saat background diklik
        >
          <button 
            className="absolute top-6 right-6 lg:top-10 lg:right-10 text-white/50 hover:text-gingerbread transition-colors p-2"
            onClick={() => setLightboxImg(null)}
          >
            <X size={40} />
          </button>
          
          <img 
            src={lightboxImg} 
            alt="Zoomed Tattoo Portfolio" 
            className="max-w-full max-h-[90vh] object-contain shadow-2xl border border-white/10 animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()} // Mencegah tertutup saat gambar diklik
          />
        </div>
      )}
    </>
  );
}