import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Online Tattoo Booking | Dotline Tattoo Bali",
  description: "Book your traditional handpoke, handtapping, or custom machine tattoo session at Dotline Tattoo Bali.",
  alternates: {
    canonical: "https://dotlinetattuhandpokebali.com/booking",
  },
};

export default function BookingPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-black text-white selection:bg-gingerbread selection:text-white relative overflow-hidden">
      
      {/* 
        === KONSISTENSI VISUAL: EFFECT BURN GINGER === 
        Menyelipkan pendaran cahaya khas studio dari atas agar senada dengan halaman lainnya
      */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] md:w-[120%] h-[80vh] bg-[radial-gradient(ellipse_at_top,_var(--gingerbread)_0%,_transparent_70%)] opacity-20 pointer-events-none z-0" />

      <div className="container px-6 mx-auto max-w-3xl text-center relative z-10">
        
        {/* Title - Mengunci Font Graduated Bawaanmu */}
        <h1 className="text-4xl md:text-5xl font-graduated mb-6 tracking-wide uppercase">
          BOOK YOUR <span className="text-gingerbread">RITUAL</span>
        </h1>
        
        <p className="text-muted-foreground max-w-xl mx-auto mb-12 leading-relaxed text-sm md:text-base">
          Ready to get inked? To ensure the best custom design process, all consultation and session bookings are handled directly via our official WhatsApp.
        </p>

        {/* Booking Box Container */}
        <div className="border border-white/10 bg-white/5 p-8 md:p-12 text-center rounded-none max-w-2xl mx-auto">
          <h3 className="text-xl font-graduated mb-4 tracking-wider uppercase">DIRECT WHATSAPP BOOKING</h3>
          <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
            Click the button below to connect with our team. Please prepare your design reference, approximate size (in cm), and preferred dates.
          </p>
          
          <a 
            href="https://api.whatsapp.com/send?phone=62877752731119&text=Hi%20Dotlinetattu,%20I%20would%20like%20to%20book%20a%20tattoo%20session." 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block w-full sm:w-auto"
          >
            {/* FIX BUG TAILWIND HOVER: Mengubah hover ke utility-class opacity yang aman dan responsif */}
            <Button className="bg-gingerbread hover:bg-gingerbread/90 text-white rounded-none px-8 py-6 text-xs tracking-[0.2em] font-medium transition-all w-full sm:w-auto uppercase">
              CHAT TO BOOK NOW
            </Button>
          </a>
        </div>

      </div>
    </div>
  );
}