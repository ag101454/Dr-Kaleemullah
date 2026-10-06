import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { doctor } from "@/data/doctor";
import Services from "@/components/Services";

export const metadata = {
  title: "Services",
  description: `Clinical services offered by ${doctor.name}.`,
  alternates: { canonical: "/services" },
  openGraph: {
    title: `Services — ${doctor.name}`,
    description: `Clinical services offered by ${doctor.name}.`,
    url: "/services",
  },
};

export default function ServicesPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container-page">
        <p className="eyebrow">Services</p>
        <h1 className="mt-5 max-w-3xl font-display text-h1 text-ink-900 balance">
          Clinical services, delivered with care.
        </h1>
        <p className="mt-6 max-w-2xl text-ink-500 pretty">
          The full list of services currently offered in practice. Content is
          driven entirely from the doctor&rsquo;s data file.
        </p>
      </div>

      <Services />

      <div className="container-page mt-8">
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
    </div>
  );
}