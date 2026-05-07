"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X} from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
    { name: "HOME", href: "/" },
    { name: "ABOUT", href: "/about" },
    { name: "PORTFOLIO", href: "/portfolio" },
    { name: "TESTIMONIALS", href: "/testimonials" },
    { name: "FAQ", href: "/faq" },
    { name: "APPRENTICES", href: "/apprentices" },
    { name: "BLOG", href: "/blog" },
]

export function Navbar(){
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Efek Scroll Transparant
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-md border-b border-white/10 py-4" : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3">
                    <img 
                        src="/icon.jpg" 
                        alt="Dotlinetattu Logo" 
                        className="h-14 w-auto rounded-md border border-gingerbread/40 bg-gingerbread/10 p-1 shadow-[0_0_20px_rgba(184,92,56,0.15)]"
                    />
                    <span className="hidden sm:inline text-xl md:text-2xl font-graduated text-gingerbread tracking-tight">
                        Dotlinetattu
                    </span>
                </Link>
                {/* Dekstop menu */}
                <div className="hidden lg:flex items-center gap-8">
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
                <div className="hidden lg:block">
                    <a href="https://linkbio.co/Tattoo-Booking?utm_source=website&utm_medium=organic" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" className="rounded-none border-gingerbread text-gingerbread hover:bg-gingerbread hover:text-white text-[10px] tracking-widest h-9 px-6">
                            BOOK NOW
                        </Button>
                    </a>
                </div>
                {/* Mobile Hambunger toggle */}
                <button 
                    className="lg:hidden text-white"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >   
                    {mobileMenuOpen ? <X size={28} /> : <Menu size={28}/>}
                </button>
            </div>
            {/* Mobile Menu DropDown */}
            {mobileMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 w-full bg-background border-b border-white/10 py-4 px-6 flex flex-col gap-4 animate-in slide-in-from-top-2">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-sm font-medium tracking-[0.2em] text-white hover:text-gingerbread transition-colors border-b border-white/5 pb-2"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a href="https://linkbio.co/Tattoo-Booking?utm_source=website&utm_medium=organic" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)}>
                        <Button className="w-full mt-2 bg-gingerbread hover:bg-gingerbread-hover text-white rounded-none tracking-widest">
                        BOOK CONSULTATION
                        </Button>
                    </a>
                </div>
            )}
        </nav>
    )
}