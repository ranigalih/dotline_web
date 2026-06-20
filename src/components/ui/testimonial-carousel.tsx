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
        nextSlide();
      }, 5000); 
      return () => clearInterval(timer);
    }
  }, [isHovered, activeIndex]); 

  return (
    <div 
      className="relative max-w-4xl mx-auto px-4 md:px-0 select-none z-20"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="region"
      aria-label="Customer testimonials carousel"
      aria-live="polite"
      aria-atomic="true"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[var(--gingerbread)]/5 blur-3xl pointer-events-none -z-10" />

      {/* Main Carousel Viewport */}
      <div className="border border-white/10 bg-white/5 backdrop-blur-md rounded-none w-full relative overflow-hidden">
        
        {/* Main Card Stack Container */}
        <div className="relative w-full min-h-[420px] sm:min-h-[380px] md:min-h-[400px]">
          {testimonials.map((testimonial, index) => {
            const isActive = index === activeIndex;
            return (
              <div 
                key={testimonial.id} 
                className={`absolute inset-0 w-full h-full flex flex-col items-center justify-between text-center p-6 sm:p-10 md:p-12 transition-all duration-500 ease-in-out ${
                  isActive 
                    ? "opacity-100 pointer-events-auto scale-100 z-10" 
                    : "opacity-0 pointer-events-none scale-95 z-0"
                }`}
                role={isActive ? "article" : undefined}
              >
                <div className="flex flex-col items-center w-full">
                  <Quote className="text-[var(--gingerbread)]/20 w-12 h-12 md:w-16 md:h-16 mb-4 md:mb-6 shrink-0" aria-hidden="true" />
                  
                  {/* Star Rating */}
                  <div className="flex gap-1 mb-4 md:mb-6 shrink-0" aria-label={`${testimonial.rating} out of 5 stars`}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="w-4 h-4 md:w-5 md:h-5 text-[var(--gingerbread)]" 
                        style={{ fill: "var(--gingerbread)" }}
                        aria-hidden="true"
                      />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-base md:text-lg lg:text-xl font-light leading-relaxed text-white/90 mb-6 italic max-w-2xl">
                    "{testimonial.content}"
                  </p>
                </div>

                {/* Client Detail Info */}
                <div className="pt-6 border-t border-white/5 w-full shrink-0">
                  <h4 className="text-lg md:text-xl font-graduated tracking-wide text-white">{testimonial.name}</h4>
                  <div className="flex items-center justify-center gap-2 mt-2">
                    <span className="text-xs text-muted-foreground">{testimonial.date}</span>
                    <span className="w-1 h-1 bg-[var(--gingerbread)] rounded-none" aria-hidden="true" />
                    <span className="text-xs text-[var(--gingerbread)] font-medium tracking-widest uppercase">{testimonial.source}</span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation Buttons - Left / Right */}
      <button 
        onClick={(e) => { e.stopPropagation(); prevSlide(); }}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-6 bg-black border border-white/10 hover:border-[var(--gingerbread)] text-white p-2.5 md:p-3 rounded-none hover:text-[var(--gingerbread)] transition-colors z-40 focus:outline-none cursor-pointer focus:ring-2 focus:ring-[var(--gingerbread)]/50"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
      </button>
      
      <button 
        onClick={(e) => { e.stopPropagation(); nextSlide(); }}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-6 bg-black border border-white/10 hover:border-[var(--gingerbread)] text-white p-2.5 md:p-3 rounded-none hover:text-[var(--gingerbread)] transition-colors z-40 focus:outline-none cursor-pointer focus:ring-2 focus:ring-[var(--gingerbread)]/50"
        aria-label="Next testimonial"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      {/* Dot Indicators */}
      <div className="flex justify-center gap-2 mt-8 relative z-40" role="tablist" aria-label="Testimonial page indicator">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`transparent h-3 flex items-center justify-center cursor-pointer transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--gingerbread)]/50`}
            aria-label={`Go to slide ${index + 1} of ${testimonials.length}`}
            aria-selected={activeIndex === index}
            role="tab"
          >
            <span className={`transition-all duration-300 h-1 rounded-none ${
              activeIndex === index ? "w-8 bg-[var(--gingerbread)]" : "w-3 bg-white/20"
            }`} aria-hidden="true" />
          </button>
        ))}
      </div>
    </div>
  );
}