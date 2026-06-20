"use client";

import { useState } from "react";
import { X, ZoomIn } from "lucide-react";

const portfolioItems = [
  { id: 1, src: "/portfolio/portfolio-1.jpeg", alt: "Dotlinetattu Handpoke Tattoo Bali 1" },
  { id: 2, src: "/portfolio/portfolio-2.jpeg", alt: "Dotlinetattu Handpoke Tattoo Bali 2" },
  { id: 3, src: "/portfolio/portfolio-3.jpeg", alt: "Dotlinetattu Custom Machine Tattoo 1" },
  { id: 4, src: "/portfolio/portfolio-4.jpeg", alt: "Dotlinetattu Traditional Tattoo Art" },
  { id: 5, src: "/portfolio/portfolio-5.jpeg", alt: "Dotlinetattu Handpoke Tattoo Bali 3" },
  { id: 6, src: "/portfolio/portfolio-6.jpeg", alt: "Dotlinetattu Custom Machine Tattoo 2" },
  { id: 7, src: "/portfolio/portfolio-7.jpeg", alt: "Dotlinetattu Traditional Balinese Tattoo" },
  { id: 8, src: "/portfolio/portfolio-8.jpeg", alt: "Dotlinetattu Handpoke Tattoo Bali 4" },
  { id: 9, src: "/portfolio/portfolio-9.jpeg", alt: "Dotlinetattu Custom Machine Tattoo 3" },
  { id: 10, src: "/portfolio/portfolio-10.jpeg", alt: "Dotlinetattu Traditional Design Art" },
];

export function PortfolioGallery() {
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "ALL" },
    { id: "handpoke", label: "HANDPOKE" },
    { id: "traditional", label: "TRADITIONAL INK" },
    { id: "machine", label: "MACHINE WORK" },
  ];

  const filteredItems = activeFilter === "all"
    ? portfolioItems
    : portfolioItems.filter((item) => {
        if (activeFilter === "handpoke") return item.alt.toLowerCase().includes("handpoke");
        if (activeFilter === "traditional") return item.alt.toLowerCase().includes("traditional");
        if (activeFilter === "machine") return item.alt.toLowerCase().includes("machine");
        return true;
      });

  return (
    <div className="font-graduated">
      {/* Gallery Label */}
      <div className="flex flex-col items-center gap-6 mb-16 text-gingerbread">
        <div className="px-8 py-2.5 text-xs tracking-[0.2em] uppercase border border-gingerbread bg-gingerbread text-white font-medium select-none">
          GALLERY
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {filters.map((filter) => (
            <button
              key={filter.id}
              type="button"
              onClick={() => setActiveFilter(filter.id)}
              className={`rounded-none border px-4 py-2 text-xs tracking-[0.2em] uppercase transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gingerbread/50 ${
                activeFilter === filter.id
                  ? 'bg-gingerbread border-gingerbread text-black'
                  : 'border-white/20 text-white hover:border-gingerbread hover:text-gingerbread hover:bg-white/5'
              }`}
              aria-pressed={activeFilter === filter.id}
              aria-label={`Filter portfolio by ${filter.label}`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {/* Portfolio Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {filteredItems.map((item, index) => (
          <div 
            key={item.id} 
            className="break-inside-avoid relative group cursor-pointer overflow-hidden border border-white/10 bg-zinc-900 transition-all duration-300"
            onClick={() => setLightboxImg(item.src)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setLightboxImg(item.src);
              }
            }}
            aria-label={`${item.alt} - Click to view full size`}
          >
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-auto object-cover sepia-[0.3] brightness-110 contrast-105 group-hover:sepia-0 group-hover:brightness-100 group-hover:contrast-100 transition-all duration-700"
              loading="lazy"
            />
            
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center px-4" aria-hidden="true">
              <div className="text-gingerbread flex flex-col items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <ZoomIn size={28} />
                <span className="text-[10px] tracking-widest uppercase font-medium">VIEW ARTWORK</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {lightboxImg && (
        <div 
          className="fixed inset-0 z-100 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightboxImg(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Expanded Portfolio Image View"
        >
          <button 
            className="absolute top-6 right-6 lg:top-10 lg:right-10 text-white/50 hover:text-gingerbread transition-colors p-2 focus:outline-none focus:ring-2 focus:ring-gingerbread/50"
            onClick={() => setLightboxImg(null)}
            aria-label="Close Image View"
          >
            <X size={36} />
          </button>
          
          <img 
            src={lightboxImg} 
            alt="Expanded Tattoo Portfolio Artwork from Dotlinetattu Bali" 
            className="max-w-full max-h-[85vh] object-contain shadow-2xl border border-white/10"
            onClick={(e) => e.stopPropagation()} 
          />
        </div>
      )}
    </div>
  );
}