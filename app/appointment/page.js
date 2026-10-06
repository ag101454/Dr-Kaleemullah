import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { doctor } from "@/data/doctor";
import AppointmentForm from "@/components/AppointmentForm";
import ClinicInfo from "@/components/ClinicInfo";

export const metadata = {
  title: "Book an Appointment",
  description: `Request a consultation with ${doctor.name} — ${doctor.title}.`,
  alternates: { canonical: "/appointment" },
  openGraph: {
    title: `Book an Appointment — ${doctor.name}`,
    description: `Request a consultation with ${doctor.name}.`,
    url: "/appointment",
  },
};

export default function AppointmentPage() {
  return (
    <>
      <section className="container-page pt-12 pb-8 md:pt-20 md:pb-12">
        <p className="eyebrow">Appointment</p>
        <h1 className="mt-5 max-w-3xl font-display text-h1 text-ink-900 balance">
          Book a consultation.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-500 pretty md:text-lg">
          Share your details below and we&rsquo;ll get back to confirm a time.
          You can also message us directly on WhatsApp.
        </p>
      </section>

      <section className="container-page pb-16 md:pb-24">
        <AppointmentForm />
      </section>

      <ClinicInfo />

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