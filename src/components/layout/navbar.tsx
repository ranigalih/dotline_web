"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "HOME", href: "/" },
  { name: "ABOUT", href: "/about" },
  { name: "PORTFOLIO", href: "/portfolio" },
  { name: "TESTIMONIALS", href: "/testimonials" },
  { name: "FAQ", href: "/faq" },
  { name: "APPRENTICES", href: "/apprentices" },
  { name: "BLOG", href: "/blog" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-24 flex items-center pointer-events-auto ${
        isScrolled
          ? "bg-black/95 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
      aria-label="Main Navigation"
    >
      {/* Container: Navbar held at max height to prevent overflow blocking clicks below */}
      <div className="w-full h-full px-6 sm:px-8 lg:px-12 flex items-center justify-between relative max-h-24 overflow-visible pointer-events-none">
        
        {/* Left Side: Logo Sacred Ornament (Design Preserved) */}
        <Link 
          href="/" 
          className="relative z-50 block shrink-0 -ml-2 sm:-ml-4 pointer-events-auto"
          aria-label="Dotlinetattu Home"
        >
          <div className="w-20 h-20 md:w-24 md:h-24 transition-all duration-300">
            <img
              src="/Icon.png"
              alt="Dotlinetattu Sacred Ornament Logo - Premium Tattoo Studio Bali"
              className="object-contain w-full h-full filter drop-shadow-[0_2px_8px_rgba(215,114,70,0.15)]"
              loading="eager"
            />
          </div>
        </Link>

        {/* Right Side: Desktop Navigation Menu & Booking Button (FORCED HORIZONTAL TO PREVENT DROPDOWN) */}
        <div className="hidden lg:flex flex-row items-center gap-6 xl:gap-10 h-full pointer-events-auto">
          <div className="flex flex-row items-center gap-5 xl:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[11px] font-medium tracking-[0.2em] text-(--gingerbread) hover:text-white transition-colors duration-200 whitespace-nowrap"
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          <Link href="/booking" className="shrink-0 pointer-events-auto">
            <Button
              variant="outline"
              className="rounded-none border-(--gingerbread) text-(--gingerbread) hover:bg-(--gingerbread) hover:text-white text-[10px] tracking-widest h-9 px-5 transition-all duration-200"
              aria-label="Book Now - Book Your Tattoo Consultation"
            >
              BOOK NOW
            </Button>
          </Link>
        </div>

        {/* Mobile Hamburger Menu Button */}
        <button
          className="lg:hidden text-white focus:outline-none z-50 p-2 pointer-events-auto hover:text-(--gingerbread) transition-colors duration-200"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close Navigation Menu" : "Open Navigation Menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown Panel */}
      {mobileMenuOpen && (
        <div 
          className="lg:hidden absolute top-full left-0 w-full bg-black/98 backdrop-blur-lg border-b border-white/10 py-6 px-6 flex flex-col gap-4 animate-in slide-in-from-top-2 duration-200 pointer-events-auto"
          id="mobile-menu"
          role="menu"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs font-medium tracking-[0.2em] text-white hover:text-(--gingerbread) transition-colors duration-200 border-b border-white/5 pb-3"
              role="menuitem"
            >
              {link.name}
            </Link>
          ))}
          <Link href="/booking" onClick={() => setMobileMenuOpen(false)} className="pointer-events-auto">
            <Button 
              className="w-full mt-2 bg-(--gingerbread) hover:bg-(--gingerbread-hover) text-white rounded-none tracking-widest text-xs h-11 transition-all duration-200"
              role="menuitem"
            >
              BOOK NOW
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
}