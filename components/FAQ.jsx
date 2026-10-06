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
      className="container-page py-20 md:py-28"
    >
      <div className="grid gap-10 md:grid-cols-12 md:gap-14">
        <Reveal className="md:col-span-4">
          <p className="eyebrow">FAQ</p>
          <h2
            id="faq-heading"
            className="mt-5 font-display text-h2 text-ink-900 balance"
          >
            Common <em className="not-italic text-teal-600">questions.</em>
          </h2>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-ink-500 pretty">
            Answers to what patients most often ask before a first visit.
          </p>
        </Reveal>

        <Reveal className="md:col-span-8" delay={0.1}>
          <ul className="divide-y divide-line-strong/60 border-y border-line-strong/60">
            {items.map((item, i) => (
              <li key={i}>
                <details className="group py-6">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-left focus-visible:outline-none">
                    <span className="font-display text-lg text-ink-900 md:text-xl">
                      {item.q}
                    </span>
                    <span
                      aria-hidden="true"
                      className="mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-full border border-line-strong text-ink-700 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-open:rotate-45"
                    >
                      <Plus className="h-4 w-4" strokeWidth={2} />
                    </span>
                  </summary>
                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-500 pretty">
                    {item.a}
                  </p>
                </details>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}