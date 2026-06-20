# ⚠️ This is NOT the Next.js you know (Project: Dotlinetattu)

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

## Core Project Guidelines for AI Agents:
1. **Tech Stack Constraints:** Next.js App Router, Tailwind CSS, TypeScript, and shadcn/ui.
2. **Design Language:** Brutalist/Minimalist theme. Always use strict `rounded-none`, uppercase text, wide letter-spacing (`tracking-wider` / `tracking-[0.2em]`), and the theme color `gingerbread` (and `gingerbread-hover`).
3. **Component Rules:** - Never use absolute centering layouts (`-translate-x-1/2`) for main navigation; prefer clean Flexbox/Grid structures.
   - All interactive UI buttons must use the custom `<Button>` primitive located in `@/components/ui/button` (which relies on `@radix-ui/react-slot`).
4. **Data & SEO:** - Blog posts are parsed locally from MDX files via `lib/mdx.ts`. Do not spin up an external CMS unless explicitly told.
   - Primary target domain is `https://dotlinetattuhandpokebali.com`. Keep local SEO JSON-LD structured data updated inside layouts.