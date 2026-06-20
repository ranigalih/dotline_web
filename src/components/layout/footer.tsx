import Link from "next/link";
import { MapPin, Mail, MessageCircle } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    // JSON-LD untuk Local SEO Business (Sudah disinkronkan ke domain baru)
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "TattooParlor",
        "name": "Dotlinetattu",
        "image": "https://dotlinetattuhandpokebali.com/Icon.png",
        "description": "Authentic traditional and modern tattoo art in Bali, minutes from Canggu. Specializing in Balinese Handpoke, Handtapping, and custom machine tattoos by Silver Jerry.",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Dalung, Kuta Utara",
            "addressLocality": "Badung",
            "addressRegion": "Bali",
            "addressCountry": "ID"
        },
        "telephone": "+62 877-7527-3111",
        "url": "https://dotlinetattuhandpokebali.com" 
    };

    return (
        <footer className="bg-black border-t border-white/10 pt-16 pb-8">
            {/* SEO JSON-LD Injection */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            
            <div className="container px-6 mx-auto">
                {/* GRID SECTION */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                    
                    {/* 1. Brand Info & CTAs */}
                    <div className="space-y-6 text-left">
                        <h2 className="text-4xl font-graduated text-gingerbread">
                            Dotlinetattu 
                        </h2>
                        <p className="text-muted-foreground text-sm max-w-xs leading-relaxed text-left">
                            Authentic traditional tattoo studio in bali
                        </p>
                        
                        {/* Booking & Instagram Buttons */}
                        <div className="flex flex-col gap-3 pt-2 items-start max-w-xs">
                            <Link 
                                href="/booking" 
                                className="bg-gingerbread hover:bg-gingerbread-hover text-white px-6 py-3.5 text-xs tracking-[0.2em] uppercase text-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gingerbread/50"
                                aria-label="Book Your Tattoo Consultation at Dotlinetattu Bali"
                            >
                                Book Your Deets Consultation
                            </Link>
                            <a 
                                href="https://www.instagram.com/dotlinetattu/" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="border border-white/20 hover:border-gingerbread hover:text-gingerbread text-white px-6 py-3.5 text-xs tracking-[0.2em] uppercase flex items-center justify-center gap-3 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gingerbread/50"
                                aria-label="Follow Dotlinetattu on Instagram - Opens in new window"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                                Follow Instagram
                            </a>
                        </div>

                        {/* Contact Social Links */}
                        <div className="flex gap-4 pt-2">
                            <a 
                                href="https://wa.me/6287775273111" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="p-2.5 border border-white/10 rounded-full hover:border-gingerbread hover:text-gingerbread transition-all text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gingerbread/50"
                                aria-label="Contact us on WhatsApp - Opens in new window"
                            >
                                <MessageCircle size={18} aria-hidden="true" />
                            </a>

                            <a 
                                href="mailto:silverjerryink@gmail.com" 
                                className="p-2.5 border border-white/10 rounded-full hover:border-gingerbread hover:text-gingerbread transition-all text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gingerbread/50"
                                aria-label="Email us at silverjerryink@gmail.com"
                            >
                                <Mail size={18} aria-hidden="true" />
                            </a>
                        </div>
                    </div>

                    {/* 2. Sitemap Links */}
                    <div>
                        <h3 className="text-white font-medium tracking-[0.2em] mb-6 text-sm">SITEMAP</h3>
                        <nav className="grid grid-cols-2 gap-y-3 gap-x-4">
                            {['Home', 'About', 'Portfolio', 'Testimonials', 'FAQ', 'Apprentices', 'Blog'].map((item) => (
                                <Link 
                                    key={item} 
                                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                                    className="text-muted-foreground hover:text-gingerbread text-sm transition-colors focus:outline-none focus:underline"
                                >
                                    {item}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* 3. Location Info */}
                    <div>
                        <h3 className="text-white font-medium tracking-[0.2em] mb-6 text-sm">STUDIO</h3>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3 text-muted-foreground text-sm">
                                <MapPin size={18} className="text-gingerbread shrink-0 mt-0.5" aria-hidden="true" />
                                <address className="not-italic">
                                    Dalung, Kuta Utara<br />
                                    Kabupaten Badung, Bali<br />
                                    Indonesia
                                </address>
                            </div>
                            <p className="text-xs text-muted-foreground mt-4 italic">
                                Book your appointment in advance
                            </p>
                        </div>
                    </div>

                </div> {/* END OF GRID */}

                {/* BOTTOM BAR */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs tracking-wider text-white/40">
                    <p>&copy; 2018 - {currentYear} Dotlinetattu. All rights reserved.</p>
                    <p>Designed by @silverjery___</p>
                </div>
                
            </div>
        </footer>
    );
}