import { Plus } from "lucide-react";
import { doctor } from "@/data/doctor";
import Reveal from "@/components/Reveal";

export default function FAQ() {
  const items = doctor.faqs || [];
  if (!items.length) return null;

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="relative overflow-hidden bg-white py-20 md:py-28"
    >
      {/* Ambient cyan glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -bottom-24 -left-32 h-[420px] w-[420px] bg-blob-cyan opacity-40 blur-3xl" />
      </div>

      <div className="container-page grid gap-12 md:grid-cols-12 md:gap-16">
        {/* Left — heading */}
        <Reveal className="md:col-span-4">
          <p className="eyebrow">FAQ</p>
          <h2
            id="faq-heading"
            className="mt-4 font-display text-h2 text-navy-900 balance"
          >
            Common{" "}
            <span className="text-red-500">questions.</span>
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-ink-500 pretty">
            Answers to what patients most often ask before a first visit.
          </p>

          {/* Small help card */}
          <div className="mt-10 rounded-2xl border border-line bg-cream-50 p-6">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-cyan-600">
              Still have a question?
            </p>
            <p className="mt-2 text-sm leading-relaxed text-ink-500 pretty">
              Reach out directly — we&rsquo;re happy to help before your visit.
            </p>
          </div>
        </Reveal>

        {/* Right — accordion */}
        <div className="md:col-span-8">
          <Reveal delay={0.1}>
            <ul className="divide-y divide-line-strong/60 border-y border-line-strong/60">
              {items.map((item, i) => (
                <li key={i}>
                  <details className="group py-6">
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/40 focus-visible:ring-offset-2 rounded-lg">
                      <span className="font-display text-lg font-bold text-navy-900 transition-colors duration-200 group-hover:text-cyan-600 group-open:text-cyan-600 md:text-xl">
                        {item.q}
                      </span>
                      <span
                        aria-hidden="true"
                        className="mt-1 grid h-9 w-9 shrink-0 place-items-center rounded-full border border-line-strong bg-white text-navy-700 transition-all duration-300 group-hover:border-cyan-400/60 group-hover:bg-cyan-50 group-hover:text-cyan-600 group-open:rotate-45 group-open:border-red-500/60 group-open:bg-red-50 group-open:text-red-500"
                      >
                        <Plus className="h-4 w-4" strokeWidth={2} />
                      </span>
                    </summary>
                    <div className="mt-4 max-w-2xl pr-4">
                      <p className="text-sm leading-relaxed text-ink-500 pretty md:text-[0.95rem] md:leading-7">
                        {item.a}
                      </p>
                    </div>
                  </details>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}