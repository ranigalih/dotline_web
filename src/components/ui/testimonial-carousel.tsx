"use client";

import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    date: "2 months ago",
    content: "Getting a Handtapping tattoo here was a profoundly spiritual experience. Silver Jerry's precision and deep respect for Balinese culture made it unforgettable. The studio in Bali is incredibly clean and has a great vibe. Highly recommended for traditional tattoos!",
    rating: 5,
    source: "Google Reviews"
  },
  {
    id: 2,
    name: "Alex Thompson",
    date: "1 month ago",
    content: "Absolutely the best tattoo studio near Canggu! I got a custom Handpoke piece. The attention to detail is insane, and the pain was minimal compared to a machine. The hygiene standards are top-notch.",
    rating: 5,
    source: "Google Reviews"
  },
  {
    id: 3,
    name: "Budi Santoso",
    date: "3 weeks ago",
    content: "Kualitas machine tattoo di Dotlinetattu luar biasa. Jerry sangat sabar mendengarkan ide desain saya dan mengubahnya menjadi karya seni black and grey yang sangat detail. Studio paling nyaman di daerah Kuta Utara.",
    rating: 5,
    source: "Google Reviews"
  },
  {
    id: 4,
    name: "Emma Lauren",
    date: "4 months ago",
    content: "I travelled all the way to Dalung just to get tattooed by Silver Jerry, and it was worth every minute. The intricate Indonesian motifs he designs are authentic and unique. The studio atmosphere is super relaxing.",
    rating: 5,
    source: "Google Reviews"
  },
  {
    id: 5,
    name: "David K.",
    date: "2 weeks ago",
    content: "Got my first piercing here. The artist was extremely professional, explained the sterilization process clearly, and used high-quality titanium jewelry. Very safe and hygienic environment.",
    rating: 5,
    source: "Google Reviews"
  },
  {
    id: 6,
    name: "Liam Walker",
    date: "5 months ago",
    content: "A hidden gem! If you want an authentic Balinese tattoo experience without the crazy tourist crowds of Canggu, this Dalung studio is the place. Great music, great art, and true masters of their craft.",
    rating: 5,
    source: "Google Reviews"
  }
];

export function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((current) => (current === 0 ? testimonials.length - 1 : current - 1));
  };

  useEffect(() => {
    if (!isHovered) {
      const timer = setInterval(() => {
        setActiveIndex((current) => (current + 1) % testimonials.length);
      }, 5000); 
      return () => clearInterval(timer);
    }
  }, [isHovered]); 

  return (
    <div 
      className="relative max-w-4xl mx-auto px-4 md:px-0"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gingerbread/5 blur-3xl pointer-events-none -z-10" />

      {/* Main Carousel Viewport (Menggunakan item-start agar tinggi dinamis mengikuti konten text) */}
      <div className="overflow-hidden relative border border-white/10 bg-white/5 backdrop-blur-md rounded-none">
        
        {/* Track Slider */}
        <div 
          className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] w-full"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="w-full shrink-0 flex flex-col items-center justify-between text-center p-6 sm:p-10 md:p-16 min-h-[380px] md:min-h-[420px]"
            >
              <div className="flex flex-col items-center w-full">
                <Quote className="text-gingerbread/30 w-12 h-12 md:w-16 md:h-16 mb-4 md:mb-6 shrink-0" />
                
                {/* Rating Bintang */}
                <div className="flex gap-1 mb-4 md:mb-6 shrink-0">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-gingerbread text-gingerbread" />
                  ))}
                </div>

                {/* Teks Ulasan */}
                <p className="text-base md:text-xl font-light leading-relaxed text-white/90 mb-8 italic max-w-2xl">
                  "{testimonial.content}"
                </p>
              </div>

              {/* Info Detail Klien */}
              <div className="pt-6 border-t border-white/5 w-full shrink-0">
                <h4 className="text-lg md:text-xl font-graduated tracking-wide text-white">{testimonial.name}</h4>
                <div className="flex items-center justify-center gap-2 mt-2">
                  <span className="text-xs text-muted-foreground">{testimonial.date}</span>
                  <span className="w-1 h-1 bg-gingerbread rounded-none" />
                  <span className="text-xs text-gingerbread font-medium tracking-widest uppercase">{testimonial.source}</span>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* Navigasi Tombol Kiri / Kanan (Perubahan: Desain diubah menjadi rounded-none kotak tegas) */}
      <button 
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-6 bg-black border border-white/10 hover:border-gingerbread text-white p-2.5 md:p-3 rounded-none hover:text-gingerbread transition-colors z-10 focus:outline-none"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-6 bg-black border border-white/10 hover:border-gingerbread text-white p-2.5 md:p-3 rounded-none hover:text-gingerbread transition-colors z-10 focus:outline-none"
        aria-label="Next testimonial"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      {/* Indikator Titik Bawah (Perubahan: Diubah menjadi bar kotak minimalis) */}
      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`transition-all duration-300 rounded-none h-1 ${
              activeIndex === index 
                ? "w-8 bg-gingerbread" 
                : "w-3 bg-white/20 hover:bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}