import { Fraunces, Inter } from "next/font/google";
import { doctor } from "@/data/doctor";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollProgress from "@/components/ScrollProgress";
import StructuredData from "@/components/StructuredData";
import "./globals.css";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const serif = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
});

const siteUrl = doctor.seo?.siteUrl || "https://example.com";
const siteName = doctor.seo?.siteName || doctor.name;
const description = doctor.seo?.defaultDescription || doctor.tagline;

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${doctor.name} — ${doctor.title}`,
    template: `%s — ${doctor.name}`,
  },
  description,
  keywords: [
    doctor.specialization,
    doctor.subSpecialization,
    "consultation",
    "doctor",
    doctor.clinic?.city,
  ].filter(Boolean),
  authors: [{ name: doctor.name }],
  creator: doctor.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName,
    title: `${doctor.name} — ${doctor.title}`,
    description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${doctor.name} — ${doctor.title}`,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FAF8F5",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body className="min-h-dvh antialiased">
      <StructuredData />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-full focus:bg-ink-900 focus:px-4 focus:py-2 focus:text-sm focus:text-cream-50"
        >
          Skip to content
        </a>

        <ScrollProgress />
        <Navbar />

        <main id="main" className="pt-20 md:pt-24">
          {children}
        </main>

        <Footer />
        <WhatsAppButton variant="floating" />
      </body>
    </html>
  );
}