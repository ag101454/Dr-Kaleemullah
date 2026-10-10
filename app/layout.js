import { Inter, Manrope, Noto_Nastaliq_Urdu } from "next/font/google";
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

const display = Manrope({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["600", "700", "800"],
});

// Urdu font — Noto Nastaliq Urdu is the standard for readable Urdu typography
const urdu = Noto_Nastaliq_Urdu({
  subsets: ["arabic"],
  variable: "--font-urdu",
  display: "swap",
  weight: ["400", "700"],
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
  alternates: { canonical: "/" },
  verification: {
    google: "wUtZyVpXE2DLGexCd5a3iLrKFn3_6buY9PRuYSmtypE",
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
  icons: { icon: "/favicon.ico" },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A1E3F",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${display.variable} ${urdu.variable}`}
    >
      <body className="min-h-dvh antialiased">
        <StructuredData />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-full focus:bg-navy-900 focus:px-4 focus:py-2 focus:text-sm focus:text-white"
        >
          Skip to content
        </a>

        <ScrollProgress />
        <Navbar />

        <main id="main">{children}</main>

        <Footer />
        <WhatsAppButton variant="floating" />
      </body>
    </html>
  );
}