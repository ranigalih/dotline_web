"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useAudio } from "@/components/providers/audio-provider";
import Link from "next/link";

const tattooServices = [
  {
    id: "handpoke",
    title: "HANDPOKE",
    subtitle: "Manual Precision",
    locationLabel: "NORTH KUTA",
    image: "/Handpoke.jpeg",
    description: "Searching for a precise, machine-free tattoo in Bali? Our handpoke tattoo process ensures minimal trauma to the skin while delivering incredibly detailed custom designs. It is the perfect choice for fine-line enthusiasts visiting Bali."
  },
  {
    id: "handtapping",
    title: "HANDTAPPING",
    subtitle: "Traditional Bali Art",
    locationLabel: "BALI",
    image: "/Handtapping.jpeg",
    description: "Experience the most authentic traditional tattoo in Bali with our signature Balinese Handtapping method. Rooted in ancient Indonesian heritage, our expert artists bring cultural storytelling to life using rhythmic tapping techniques right here near Canggu."
  },
  {
    id: "tattooing",
    title: "TATTOOING",
    subtitle: "Modern Ink",
    locationLabel: "NEAR CANGGU",
    image: "/Machine.jpeg",
    description: "Beyond traditional roots, Dotlinetattu is recognized as a premier custom tattoo studio in Bali offering high-quality machine work. From black and grey realism to bold neo-traditional ink, we turn your artistic vision into reality."
  },
  {
    id: "piercing",
    title: "PIERCING",
    subtitle: "Professional Studio",
    locationLabel: "BALI STUDIO",
    image: "/professional-piercing.jpeg",
    description: "Complete your body art journey at the safest and most trusted piercing studio in Bali. We use medical-grade jewelry and strict sterilization protocols, making us the top recommendation for locals and tourists in the North Kuta area."
  }
];

export default function HomeClient() {
  const { isPlaying } = useAudio();
  // Right-side accordion active tab (5s auto-advance)
  const [activeTab, setActiveTab] = useState(0);
  // Left-side image index (3s auto-advance)
  const [imageIndex, setImageIndex] = useState(0);

  // Auto-advance the accordion tabs every 5 seconds
  useEffect(() => {
    const tabTimer = setInterval(() => {
      setActiveTab((current) => (current + 1) % tattooServices.length);
    }, 5000);
    return () => clearInterval(tabTimer);
  }, []);

  // Auto-advance the left image preview every 3 seconds
  useEffect(() => {
    const imageTimer = setInterval(() => {
      setImageIndex((current) => (current + 1) % tattooServices.length);
    }, 3000);
    return () => clearInterval(imageTimer);
  }, []);

  return (
    <div className="relative min-h-screen bg-background selection:bg-gingerbread selection:text-white overflow-hidden font-graduated">
      
      {/* Background Glow - Gingerbread dominant accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] md:w-[120%] h-[80vh] bg-[radial-gradient(ellipse_at_top,var(--gingerbread)_0%,transparent_70%)] opacity-25 pointer-events-none z-0" />

      {/* Hero Section */}
      <section className="relative min-h-svh lg:min-h-[110vh] flex items-center justify-center overflow-hidden pt-24 lg:pt-20">
        <div className="container px-4 md:px-6 relative z-10 text-center flex flex-col items-center mt-12 md:mt-0">
          <p className="text-gingerbread font-medium tracking-widest uppercase mb-4 md:mb-6 block animate-in slide-in-from-bottom duration-700 text-[10px] md:text-xs">
            Authentic traditional tattoo studio in bali
          </p>
          
          <h1 className="text-5xl sm:text-7xl md:text-[100px] lg:text-[120px] leading-[0.9] md:leading-none font-graduated mb-6 md:mb-8 animate-in slide-in-from-bottom duration-1000 delay-150 text-gingerbread">
            THE BEST TATTOO EXPERIENCE IN BALI
          </h1>
          
          <p className="max-w-[90%] md:max-w-2xl text-gingerbread/85 mb-10 md:mb-12 animate-in fade-in duration-1000 delay-300 text-sm md:text-base leading-relaxed">
            Bringing authentic traditional and modern tattoo art in Bali, just minutes from Canggu. Specializing in Balinese Handpoke, Handtapping and Tattoo Machine services.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto relative z-20 px-4 sm:px-0">
            <Link href="/booking" className="w-full sm:w-auto">
              <Button 
                className="w-full bg-gingerbread hover:bg-gingerbread-hover text-white px-8 md:px-10 py-6 md:py-7 rounded-none text-sm md:text-lg transition-all duration-200" 
                size="lg"
                aria-label="Book Your Premium Tattoo Consultation at Dotlinetattu"
              >
                BOOK CONSULTATION
              </Button>
            </Link>
            
            <Link className="w-full sm:w-auto" href="/portfolio">
              <Button 
                className="w-full sm:w-auto border-white/20 px-8 md:px-10 py-6 md:py-7 rounded-none text-sm md:text-lg hover:bg-white hover:text-black transition-all duration-200" 
                size="lg" 
                variant="outline"
                aria-label="View Our Portfolio of Tattoo Designs and Work"
              >
                VIEW PORTFOLIO
              </Button>
            </Link>
          </div>
        </div>

        {!isPlaying && (
          <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-0 animate-pulse opacity-50 pointer-events-none text-center w-full">
            <p className="text-[10px] md:text-xs tracking-[0.2em] md:tracking-[0.3em] uppercase">Tap anywhere to play audio</p>
          </div>
        )}
      </section>

      {/* Local SEO & Service Showcase Section */}
      <section className="py-16 lg:py-24 bg-black/40 border-y border-white/5 overflow-hidden relative z-10 backdrop-blur-sm">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
            
            <div className="w-full lg:w-5/12 relative group order-2 lg:order-1">
              <div className="relative aspect-square md:aspect-4/5 w-full overflow-hidden border border-white/10 rounded-sm lg:rounded-none">
                <div 
                  className="relative w-full h-full"
                  role="region"
                  aria-label={`Service showcase: ${tattooServices[imageIndex].title}`}
                  aria-live="polite"
                >
                  {tattooServices.map((service, index) => (
                    <img
                      key={service.id}
                      src={service.image}
                      alt={`${service.title} Tattoo - Premium Traditional and Modern Ink at Dotlinetattu Bali Studio`}
                      aria-hidden={imageIndex !== index}
                      className={`absolute inset-0 object-cover w-full h-full transition-opacity duration-500 ease-in-out ${imageIndex === index ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                      loading={index === 0 ? 'eager' : 'lazy'}
                    />
                  ))}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90" />
                </div>
              </div>
            </div>

            <div className="w-full lg:w-7/12 space-y-6 md:space-y-8 order-1 lg:order-2">
              <div className="space-y-3 md:space-y-4">
                <span className="text-(--gingerbread) font-medium tracking-widest text-[10px] uppercase">Local Expertise</span>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-graduated leading-tight text-(--gingerbread)">
                  THE BEST TATTOO EXPERIENCE IN BALI
                </h2>
              </div>

              <p className="text-muted-foreground text-sm md:text-base">
                Based in the artistic heart of <span className="text-white font-medium">BALI</span>, Dotlinetattu proudly welcomes clients from <span className="text-white font-medium">Canggu, Ubud, Uluwatu, Denpasar</span>, and across the globe.
              </p>

              <div className="flex flex-col gap-3" role="tablist" aria-label="Tattoo service selection tabs">
                {tattooServices.map((service, index) => (
                  <button
                    key={service.id}
                    type="button"
                    role="tab"
                    aria-selected={activeTab === index}
                    onClick={() => setActiveTab(index)}
                    className={`w-full text-left p-4 rounded-sm border transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gingerbread/50 ${
                      activeTab === index
                        ? 'border-gingerbread bg-gingerbread/15 text-gingerbread shadow-[0_0_0_1px_rgba(216,104,58,0.45)]'
                        : 'border-white/10 text-white hover:border-gingerbread hover:text-gingerbread hover:bg-white/5'
                    }`}
                    aria-label={`${service.title} service tab${activeTab === index ? ', active' : ''}`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-lg font-graduated tracking-[0.15em] uppercase">{service.title}</span>
                      <span className={`h-2 w-2 rounded-full transition-colors duration-300 ${activeTab === index ? 'bg-gingerbread' : 'bg-white/20'}`} />
                    </div>
                    {activeTab === index && <p className="text-xs text-gingerbread mt-3 leading-relaxed">{service.description}</p>}
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}