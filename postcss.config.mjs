const config = {
  plugins: {
    // 1. Integrasi mesin kompilasi utama Tailwind CSS v4
    "@tailwindcss/postcss": {},
    
    // 2. Plugin optimasi bawaan Next.js (Normalisasi CSS & Flexbox bug-fixing)
    "postcss-flexbugs-fixes": {},
  },
};

export default config;