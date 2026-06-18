import type { Metadata } from "next";
import { Geist, Geist_Mono, Dancing_Script } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dancingScript = Dancing_Script({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "The Nibble Story - Premium Indian Fusion Catering & Grazing Tables",
  description: "Premium Indian Fusion Catering & Grazing Tables in New Jersey. Curated experiences for weddings, baby showers, birthdays, corporate events, and celebrations. Beautiful presentation, delicious food, stress-free service.",
  keywords: [
    "catering",
    "Indian fusion catering",
    "grazing tables",
    "New Jersey catering",
    "chaat catering",
    "wedding catering",
    "baby shower catering",
    "birthday catering",
    "corporate catering",
    "event catering",
    "Indian food catering",
    "grazing table setup",
    "dessert tables",
    "party catering NJ",
    "The Nibble Story"
  ],
  authors: [{ name: "The Nibble Story" }],
  creator: "The Nibble Story",
  publisher: "The Nibble Story",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://thenibblestory.com",
    title: "The Nibble Story - Premium Indian Fusion Catering & Grazing Tables",
    description: "Premium Indian Fusion Catering & Grazing Tables in New Jersey. Curated experiences for weddings, baby showers, birthdays, corporate events, and celebrations.",
    siteName: "The Nibble Story",
    images: [
      {
        url: "/main_setup.png",
        width: 1200,
        height: 630,
        alt: "The Nibble Story - Premium Catering Setup",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Nibble Story - Premium Indian Fusion Catering & Grazing Tables",
    description: "Premium Indian Fusion Catering & Grazing Tables in New Jersey. Curated experiences for weddings, baby showers, birthdays, and corporate events.",
    images: ["/main_setup.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code-here",
  },
  alternates: {
    canonical: "https://thenibblestory.com",
  },
  category: "food & catering",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FoodEstablishment",
    name: "The Nibble Story",
    image: "https://thenibblestory.com/nibble_story_logo.png",
    "@id": "https://thenibblestory.com",
    url: "https://thenibblestory.com",
    telephone: "929-238-5263",
    email: "thenibblestory@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressRegion: "NJ",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      addressCountry: "US",
    },
    servesCuisine: "Indian Fusion",
    priceRange: "$$",
    description: "Premium Indian Fusion Catering & Grazing Tables in New Jersey. Curated experiences for weddings, baby showers, birthdays, corporate events, and celebrations.",
    sameAs: [
      "https://instagram.com/thenibblestory",
    ],
  };

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${dancingScript.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
