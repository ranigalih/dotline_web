import HomeClient from "./HomeClient";

// Metadata global khusus Landing Page (Dibaca maksimal oleh Google Bot)
export const metadata = {
  title: "Dotlinetattu | Best Handpoke & Traditional Tattoo Studio in Bali",
  description: "Experience authentic traditional and modern tattoo art in Bali, minutes from Canggu. Specializing in Balinese Handpoke, Handtapping, and custom machine tattoos by Silver Jerry.",
  alternates: {
    canonical: "https://dotlinetattuhandpokebali.com",
  },
};

export default function HomePage() {
  return <HomeClient />;
}