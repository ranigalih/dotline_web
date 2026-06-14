"use client";

import { useState } from "react";

export default function BookingPage() {
  // Nomor WhatsApp Studio Kamu
  const STUDIO_WHATSAPP = "6287775273111"; 

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    tattooType: "Handpoke",
    placement: "",
    size: "",
    bookingDate: "", 
    description: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const formatDateForWhatsApp = (dateString: string) => {
    if (!dateString) return "-";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedDate = formatDateForWhatsApp(formData.bookingDate);

    const message = `Hello Dotlinetattu Studio! I would like to book a session.%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Method:* ${formData.tattooType}%0A` +
      `*Placement:* ${formData.placement}%0A` +
      `*Estimated Size:* ${formData.size}%0A` +
      `*Requested Date:* ${formattedDate}%0A` + 
      `*Design Idea:* ${formData.description}`;

    window.open(`https://api.whatsapp.com/send?phone=${STUDIO_WHATSAPP}&text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen pt-32 pb-24 relative selection:bg-gingerbread selection:text-white overflow-hidden bg-black text-white">
      {/* Efek Burn Ginger */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] md:w-[120%] h-[80vh] bg-[radial-gradient(ellipse_at_top,_var(--color-gingerbread)_0%,_transparent_70%)] opacity-20 pointer-events-none z-0" />

      <div className="container px-6 mx-auto max-w-2xl relative z-10">
        <div className="text-center mb-10">
          <span className="text-xs text-gingerbread tracking-widest uppercase font-medium">Sacred Ritual Application</span>
          <h1 className="text-4xl md:text-5xl font-graduated mt-2 mb-4">
            BOOKING <span className="text-gingerbread">FORM</span>
          </h1>
          <p className="text-muted-foreground text-sm">
            Fill out the form below. Once submitted, your data will be instantly structured into our WhatsApp consultation chat.
          </p>
        </div>

        {/* Form Interaktif */}
        <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 p-6 md:p-10 space-y-6 backdrop-blur-sm shadow-xl">
          <div>
            <label className="block text-xs uppercase tracking-wider text-white/70 mb-2 font-medium">Full Name</label>
            <input 
              type="text" name="name" required value={formData.name} onChange={handleChange}
              className="w-full bg-black/50 border border-white/10 px-4 py-3 text-sm rounded-none focus:outline-none focus:border-gingerbread transition-colors text-white" 
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-white/70 mb-2 font-medium">Email Address</label>
            <input 
              type="email" name="email" required value={formData.email} onChange={handleChange}
              className="w-full bg-black/50 border border-white/10 px-4 py-3 text-sm rounded-none focus:outline-none focus:border-gingerbread transition-colors text-white" 
              placeholder="yourname@email.com"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs uppercase tracking-wider text-white/70 mb-2 font-medium">Tattoo Method</label>
              <select 
                name="tattooType" value={formData.tattooType} onChange={handleChange}
                className="w-full bg-black border border-white/10 px-4 py-3 text-sm rounded-none focus:outline-none focus:border-gingerbread transition-colors text-white appearance-none"
              >
                <option value="Handpoke" className="bg-black">Handpoke Tattoo</option>
                <option value="Handtapping" className="bg-black">Handtapping Tattoo</option>
                <option value="Custom Machine" className="bg-black">Custom Machine</option>
              </select>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-white/70 mb-2 font-medium">Body Placement</label>
              <input 
                type="text" name="placement" required value={formData.placement} onChange={handleChange}
                className="w-full bg-black/50 border border-white/10 px-4 py-3 text-sm rounded-none focus:outline-none focus:border-gingerbread transition-colors text-white" 
                placeholder="e.g., Forearm, Ankle"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs uppercase tracking-wider text-white/70 mb-2 font-medium">Estimated Size (cm or inches)</label>
              <input 
                type="text" name="size" required value={formData.size} onChange={handleChange}
                className="w-full bg-black/50 border border-white/10 px-4 py-3 text-sm rounded-none focus:outline-none focus:border-gingerbread transition-colors text-white" 
                placeholder="e.g., 10x10 cm"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-white/70 mb-2 font-medium">Preferred Date</label>
              <input 
                type="date" name="bookingDate" required value={formData.bookingDate} onChange={handleChange}
                className="w-full bg-black/50 border border-white/10 px-4 py-3 text-sm rounded-none focus:outline-none focus:border-gingerbread transition-colors text-white" 
                style={{ colorScheme: "dark" }} 
              />
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-white/70 mb-2 font-medium">Design Description & Ideas</label>
            <textarea 
              name="description" rows={4} required value={formData.description} onChange={handleChange}
              className="w-full bg-black/50 border border-white/10 px-4 py-3 text-sm rounded-none focus:outline-none focus:border-gingerbread transition-colors text-white resize-none" 
              placeholder="Describe your ornament ideas, meaning, or special requests..."
            />
          </div>

          {/* Menggunakan button HTML asli bawaan yang anti-gagal kompilasi */}
          <button 
            type="submit" 
            className="w-full bg-gingerbread hover:opacity-90 text-white rounded-none py-4 tracking-widest text-xs uppercase transition-all duration-300 font-bold mt-4 block text-center"
          >
            Submit & Send to WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
}