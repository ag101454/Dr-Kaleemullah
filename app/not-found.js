import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { doctor } from "@/data/doctor";

export const metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <section className="container-page grid min-h-[70vh] place-items-center py-20">
      <div className="mx-auto max-w-md text-center">
        <p className="eyebrow justify-center">404</p>
        <h1 className="mt-5 font-display text-h1 text-ink-900 balance">
          This page isn&rsquo;t here.
        </h1>
        <p className="mt-6 text-sm leading-relaxed text-ink-500 pretty">
          The link may be broken or the page may have been removed. Let&rsquo;s
          get you back to {doctor.name}&rsquo;s practice.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-ink-900 px-6 py-3.5 text-sm font-medium text-cream-50 transition hover:bg-ink-800"
          >
            <ArrowLeft className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
            Back to home
          </Link>
          <Link
            href="/appointment"
            className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-surface px-6 py-3.5 text-sm font-medium text-ink-900 transition hover:border-teal-500/40 hover:bg-teal-50"
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </section>
  );
}