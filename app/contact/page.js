import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { doctor } from "@/data/doctor";
import Contact from "@/components/Contact";
import ClinicInfo from "@/components/ClinicInfo";
import FAQ from "@/components/FAQ";

export const metadata = {
  title: "Contact",
  description: `Contact ${doctor.name} — clinic address, hours, phone, WhatsApp, and email.`,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: `Contact — ${doctor.name}`,
    description: `Contact ${doctor.name} — clinic address, hours, phone, WhatsApp, and email.`,
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="container-page pt-12 pb-4 md:pt-20 md:pb-6">
        <p className="eyebrow">Contact</p>
        <h1 className="mt-5 max-w-3xl font-display text-h1 text-ink-900 balance">
          Get in touch.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-500 pretty md:text-lg">
          The clinic&rsquo;s location, contact details, and consultation hours
          are below.
        </p>
      </section>

      <ClinicInfo />
      <Contact />
      <FAQ />

      <div className="container-page pb-20 md:pb-28">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 text-sm text-ink-800 underline decoration-line-strong underline-offset-4 transition hover:decoration-teal-500"
        >
          <ArrowLeft
            className="h-4 w-4 transition-transform group-hover:-translate-x-0.5"
            strokeWidth={2}
            aria-hidden="true"
          />
          Back to home
        </Link>
      </div>
    </>
  );
}