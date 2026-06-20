import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // 1. Mengabaikan folder kompilasi sampah agar proses pengecekan super cepat
  {
    ignores: [
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
      "node_modules/**"
    ],
  },
  
  // 2. Memuat aturan Core Web Vitals Next.js (Aturan wajib untuk performa SEO maksimal)
  ...compat.extends("next/core-web-vitals"),
  ...compat.extends("next/typescript"),

  // 3. Kustomisasi Aturan Tambahan (Opsional)
  {
    rules: {
      // Mencegah error build akibat tag <img> bawaan di komponen gallery
      // Karena kita sengaja memakai <img> standar demi fleksibilitas performa masonry CSS
      "@next/next/no-img-element": "off",
    }
  }
];

export default eslintConfig;
