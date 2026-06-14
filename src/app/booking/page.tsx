"use client";

import React, { useState } from 'react';

// Daftar gambar portofolio bergerak (carousel)
// Pastikan file-file gambar ini ada di folder public kamu, atau sesuaikan namanya
const PORTFOLIO_IMAGES = [
  "/Handpoke.jpeg",
  "/Handtapping.jpeg",
  "/jerry.jpeg",
  "/jessica.jpeg"
];

export default function BookingPage() {
  const [formData, setFormData] = useState({
    name: '',
    ageSex: '',
    email: '',
    dateConsultation: '',
    time: '',
    country: '',
    placement: '',
    phone: '',
    dateSession: '',
    downPayment: '',
  });

  // State untuk mengatur pergeseran gambar
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev === PORTFOLIO_IMAGES.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? PORTFOLIO_IMAGES.length - 1 : prev - 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const rawMessage = `Hello Dotlinetattu Studio! New Booking Request:\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Age/Sex:* ${formData.ageSex}\n` +
      `*Email:* ${formData.email}\n` +
      `*Consultation Date:* ${formData.dateConsultation}\n` +
      `*Preferred Time:* ${formData.time}\n` +
      `*Country/Region:* ${formData.country}\n` +
      `*Tattoo Placement:* ${formData.placement}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Session Date:* ${formData.dateSession}\n` +
      `*Down Payment Status:* ${formData.downPayment}`;

    const secureMessage = encodeURIComponent(rawMessage);
    const STUDIO_WHATSAPP = "6287775273111"; 
    window.open(`https://api.whatsapp.com/send?phone=${STUDIO_WHATSAPP}&text=${secureMessage}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-white text-black flex flex-col items-center pt-16 pb-24 px-4 font-sans select-none">
      
      {/* HEADER UTAMA */}
      <div className="text-center mb-6">
        <h1 className="text-4xl font-normal tracking-wide mb-2" style={{ fontFamily: 'var(--font-graduated), sans-serif' }}>
          Tattoo Booking
        </h1>
        <p className="text-xl text-black font-light">Welcome to our booking form</p>
      </div>

      {/* FORM UTAMA (Gaya Kotak Tebal Minimalis) */}
      <div className="w-full max-w-2xl border-2 border-black p-6 md:p-8 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <h2 className="text-xl font-bold uppercase tracking-tight mb-6">Drop your deets here</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input 
              type="text" name="name" required placeholder="Name *" value={formData.name} onChange={handleChange}
              className="w-full border border-black p-3 text-base outline-none focus:bg-neutral-50 transition-colors"
            />
          </div>

          <div>
            <input 
              type="text" name="ageSex" required placeholder="Age/sex *" value={formData.ageSex} onChange={handleChange}
              className="w-full border border-black p-3 text-base outline-none focus:bg-neutral-50 transition-colors"
            />
          </div>

          <div>
            <input 
              type="email" name="email" required placeholder="Email *" value={formData.email} onChange={handleChange}
              className="w-full border border-black p-3 text-base outline-none focus:bg-neutral-50 transition-colors"
            />
          </div>

          <div className="relative">
            <input 
              type="text" name="dateConsultation" required placeholder="Date consultation *" value={formData.dateConsultation} onFocus={(e) => e.target.type = 'date'} onBlur={(e) => e.target.type = 'text'} onChange={handleChange}
              className="w-full border border-black p-3 text-base outline-none bg-white cursor-pointer appearance-none text-left"
            />
            <span className="absolute right-4 top-4 text-sm pointer-events-none">❯</span>
          </div>

          <div className="relative">
            <input 
              type="text" name="time" required placeholder="Time *" value={formData.time} onFocus={(e) => e.target.type = 'time'} onBlur={(e) => e.target.type = 'text'} onChange={handleChange}
              className="w-full border border-black p-3 text-base outline-none bg-white cursor-pointer appearance-none text-left"
            />
            <span className="absolute right-4 top-4 text-sm pointer-events-none">❯</span>
          </div>

          <div className="relative">
            <select 
              name="country" required value={formData.country} onChange={handleChange}
              className="w-full border border-black p-3 text-base outline-none bg-white cursor-pointer appearance-none text-left text-neutral-500 focus:text-black"
            >
              <option value="" disabled>Country/Region *</option>
              <option value="Indonesia">Indonesia</option>
              <option value="Australia">Australia</option>
              <option value="Europe">Europe</option>
              <option value="United States">United States</option>
              <option value="Other">Other</option>
            </select>
            <span className="absolute right-4 top-4 text-sm pointer-events-none rotate-90">❯</span>
          </div>

          <div>
            <textarea 
              name="placement" required placeholder="Let us know which places do you want to get tattoo *" value={formData.placement} onChange={handleChange} rows={3}
              className="w-full border border-black p-3 text-base outline-none resize-none focus:bg-neutral-50 transition-colors"
            />
          </div>

          {/* SIMULASI CHOOSE FILE */}
          <div className="space-y-1.5">
            <span className="text-sm font-medium text-black">Send us picture *</span>
            <div className="w-full border border-black py-8 flex flex-col items-center justify-center bg-white cursor-pointer hover:bg-neutral-50 transition-colors">
              <span className="text-2xl mb-1">☁️</span>
              <span className="text-sm font-bold">Choose a file</span>
              <span className="text-xs text-neutral-500 mt-0.5">Image or PDF, Size limit: 10MB</span>
            </div>
          </div>

          <div className="flex gap-2">
            <div className="w-20 border border-black p-3 flex justify-between items-center bg-white cursor-pointer">
              <span className="text-sm">+1</span>
              <span className="text-xs">▼</span>
            </div>
            <input 
              type="tel" name="phone" required placeholder="Phone *" value={formData.phone} onChange={handleChange}
              className="flex-1 border border-black p-3 text-base outline-none focus:bg-neutral-50 transition-colors"
            />
          </div>

          <div className="relative">
            <input 
              type="text" name="dateSession" required placeholder="Date session *" value={formData.dateSession} onFocus={(e) => e.target.type = 'date'} onBlur={(e) => e.target.type = 'text'} onChange={handleChange}
              className="w-full border border-black p-3 text-base outline-none bg-white cursor-pointer appearance-none text-left"
            />
            <span className="absolute right-4 top-4 text-sm pointer-events-none">❯</span>
          </div>

          <div>
            <input 
              type="text" name="downPayment" required placeholder="Down payment *" value={formData.downPayment} onChange={handleChange}
              className="w-full border border-black p-3 text-base outline-none focus:bg-neutral-50 transition-colors"
            />
          </div>

          <button 
            type="submit"
            className="w-full border border-black bg-white hover:bg-black hover:text-white p-3.5 text-base font-bold transition-all duration-200 uppercase tracking-wider mt-4"
          >
            Submit
          </button>
        </form>

        <p className="text-[10px] text-center text-neutral-600 mt-4 leading-normal max-w-md mx-auto">
          By submitting your contact details, you are providing your data to this link owner who may contact you.
        </p>
      </div>

      {/* CAROUSEL GAMBAR BERGERAK (Sama Persis Seperti Foto Referensi) */}
      <div className="w-full max-w-2xl mt-8 relative group border border-neutral-200">
        <div className="w-full aspect-[4/3] bg-neutral-100 overflow-hidden relative">
          <img 
            src={PORTFOLIO_IMAGES[currentImageIndex]} 
            alt={`Portfolio ${currentImageIndex + 1}`} 
            className="w-full h-full object-cover transition-all duration-500 ease-in-out"
          />
        </div>

        {/* Tombol Panah Kiri */}
        <button 
          onClick={prevImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-black w-10 h-10 border border-neutral-300 flex items-center justify-center shadow-md transition-all active:scale-90"
        >
          ❮
        </button>

        {/* Tombol Panah Kanan */}
        <button 
          onClick={nextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-black w-10 h-10 border border-neutral-300 flex items-center justify-center shadow-md transition-all active:scale-90"
        >
          ❯
        </button>

        {/* Indikator Titik (Dots) */}
        <div className="absolute bottom-4 left-1/2 -translate-y-1/2 -translate-x-1/2 flex gap-2">
          {PORTFOLIO_IMAGES.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${index === currentImageIndex ? 'bg-white scale-125' : 'bg-white/50'}`}
            />
          ))}
        </div>
      </div>

    </div>
  );
}