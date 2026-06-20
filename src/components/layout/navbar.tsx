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

  // Efek Mengubah Background saat Scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-24 flex items-center ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between relative w-full">
        
        {/* Sisi Kiri: Logo Gambar & Nama Brand */}
        <div className="flex items-center gap-4">
          <div className="relative w-12 h-12 overflow-hidden shrink-0">
            <img
              src="/Icon.png"
              alt="Dotlinetattu Logo"
              className="object-contain w-full h-full"
            />
          </div>
          {/* Perbaikan: Mengisi link kosong dengan nama brand studio */}
          <Link
            href="/"
            className="text-2xl md:text-3xl font-graduated text-gingerbread tracking-tight"
          >
            DOTLINETATTU
          </Link>
        </div>

        {/* Sisi Kanan: Menu Navigasi Desktop */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[11px] font-medium tracking-[0.2em] text-white/80 hover:text-gingerbread transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          <Link href="/booking">
            <Button
              variant="outline"
              className="rounded-none border-gingerbread text-gingerbread hover:bg-gingerbread hover:text-white text-[10px] tracking-widest h-9 px-6 transition-all"
            >
              BOOK NOW
            </Button>
          </Link>
        </div>

        {/* Tombol Hamburger Menu (Hanya muncul di Mobile) */}
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown Panel */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-background/98 backdrop-blur-lg border-b border-white/10 py-6 px-6 flex flex-col gap-4 animate-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs font-medium tracking-[0.2em] text-white hover:text-gingerbread transition-colors border-b border-white/5 pb-3"
            >
              {link.name}
            </Link>
          ))}
          <Link href="/booking" onClick={() => setMobileMenuOpen(false)}>
            <Button className="w-full mt-2 bg-gingerbread hover:bg-gingerbread-hover text-white rounded-none tracking-widest text-xs h-11">
              BOOK CONSULTATION
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
}