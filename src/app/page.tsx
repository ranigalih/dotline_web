import HomeClient from "./HomeClient";

export const metadata = {
  title: "Premium Tattoo Studio Bali | Dotlinetattu Handpoke & Traditional Ink",
  description: "Experience premium handpoke, traditional Balinese handtapping, and modern custom tattoos at Dotlinetattu in Canggu, Ubud, Uluwatu, and Denpasar, Bali. Expert tattoo artist Silver Jerry brings authentic cultural ink to life.",
  keywords: ['tattoo bali', 'handpoke tattoo bali', 'balinese handtapping tattoo', 'traditional tattoo bali', 'premium tattoo studio bali', 'canggu tattoo artist', 'bali tattoo studio', 'sacred ornament tattoo'],
  openGraph: {
    title: "Premium Tattoo Studio Bali | Dotlinetattu Handpoke & Traditional Ink",
    description: "Experience premium handpoke, traditional Balinese handtapping, and modern custom tattoos at Dotlinetattu in Canggu, Ubud, Uluwatu, and Denpasar, Bali.",
    type: "website",
    url: "https://dotlinetattuhandpokebali.com/",
    images: [
      {
        url: "https://dotlinetattuhandpokebali.com/Icon.png",
        width: 1200,
        height: 1200,
        alt: "Dotlinetattu Sacred Ornament Logo - Premium Tattoo Studio Bali",
      }
    ]
  },
  alternates: {
    canonical: "https://dotlinetattuhandpokebali.com/",
  },
};

export default function HomePage() {
  return <HomeClient />;
}