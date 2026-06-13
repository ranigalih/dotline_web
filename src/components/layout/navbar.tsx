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
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 min-h-[7.5rem] ${isScrolled ? "bg-background/95 backdrop-blur-md border-b border-white/10" : 'bg-transparent'}`}>
            <div className="absolute top-0 left- z-10 pointer-events-none opacity-60">
                <img
                    src="/Icon.png"
                    alt=""
                    aria-hidden="true"
                    className="h-[7.5rem] w-auto"
                />
            </div>
            <div className="relative z-20 container mx-auto px-6 h-[7.5rem]">
                <Link href="/" className="absolute bottom-2 left-9 z-0 text-4xl md:text-5xl font-graduated text-gingerbread tracking-tight">
                    
                </Link>
                <div className="absolute top-1/2 left-1/2 z-20 flex -translate-y-1/2 translate-x-1 items-left justify-left gap-1 lg:translate-x-1">
                    <div className="hidden lg:flex items-center gap-6">
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
                        <Link href="/booking">
                            <Button variant="outline" className="rounded-none border-gingerbread text-gingerbread hover:bg-gingerbread hover:text-white text-[10px] tracking-widest h-9 px-6">
                                BOOK NOW
                            </Button>
                        </Link>
                    </div>
                </div>
                <div className="flex items-center justify-between h-full">
                    <div />
                    <button 
                        className="lg:hidden text-white"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >   
                        {mobileMenuOpen ? <X size={28} /> : <Menu size={28}/>}
                    </button>
                </div>
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
                    <Link href="/booking" onClick={() => setMobileMenuOpen(false)}>
                        <Button className="w-full mt-2 bg-gingerbread hover:bg-gingerbread-hover text-white rounded-none tracking-widest">
                        BOOK CONSULTATION
                        </Button>
                    </Link>
                </div>
            )}
        </nav>
    )
}