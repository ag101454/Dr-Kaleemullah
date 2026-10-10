import { doctor } from "@/data/doctor";
import Reveal from "@/components/Reveal";

export default function Experience() {
  const items = doctor.experienceTimeline;
  if (!items?.length) return null;

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="relative overflow-hidden bg-white py-20 md:py-28"
    >
      {/* Ambient cyan glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -top-24 -left-32 h-[400px] w-[400px] bg-blob-cyan opacity-50 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[300px] w-[400px] bg-blob-cyan opacity-30 blur-3xl" />
      </div>

      <div className="container-page grid gap-12 md:grid-cols-12 md:gap-16">
        {/* Left column — heading */}
        <Reveal className="md:col-span-4">
          <p className="eyebrow">Experience</p>
          <h2
            id="experience-heading"
            className="mt-4 font-display text-h2 text-navy-900 balance"
          >
            A path built on{" "}
            <span className="text-red-500">care and precision.</span>
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-ink-500 pretty">
            Education, clinical training, and professional practice — presented
            in the order each step was taken.
          </p>

          {/* Small stat callout */}
          <div className="mt-10 rounded-2xl border border-line bg-cream-50 p-6">
            <p className="text-xs uppercase tracking-[0.16em] text-ink-400">
              Career Span
            </p>
            <p className="mt-2 font-display text-3xl font-bold text-navy-900">
              2007 — Present
            </p>
            <p className="mt-1 text-sm text-ink-500">
              {doctor.experience}+ years in clinical practice and academia
            </p>
          </div>
        </Reveal>

        {/* Right column — timeline */}
        <div className="md:col-span-8">
          <ol className="relative ml-3 space-y-10 border-l-2 border-line-strong pl-8">
            {items.map((item, i) => (
              <Reveal
                as="li"
                key={`${item.year}-${i}`}
                delay={i * 0.06}
                y={16}
                className="group relative"
              >
                {/* Timeline node — cyan ring + red core, glows on hover */}
                <span
                  aria-hidden="true"
                  className="absolute -left-[2.65rem] top-1.5 grid h-5 w-5 place-items-center rounded-full border-2 border-cyan-400 bg-white shadow-[0_0_0_4px_rgba(0,212,224,0.08)] transition-all duration-300 group-hover:border-red-500 group-hover:shadow-[0_0_0_6px_rgba(230,57,70,0.12)]"
                >
                  <span className="h-2 w-2 rounded-full bg-cyan-500 transition-colors duration-300 group-hover:bg-red-500" />
                </span>

                {/* Year */}
                {item.year ? (
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-cyan-600">
                    {item.year}
                  </p>
                ) : null}

                {/* Title */}
                {item.title ? (
                  <h3 className="mt-2 font-display text-xl font-bold text-navy-900 md:text-[1.35rem]">
                    {item.title}
                  </h3>
                ) : null}

                {/* Institution */}
                {item.institution ? (
                  <p className="mt-1.5 text-sm font-medium text-navy-600">
                    {item.institution}
                  </p>
                ) : null}

                {/* Description */}
                {item.description ? (
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-500 pretty md:text-[0.95rem] md:leading-7">
                    {item.description}
                  </p>
                ) : null}
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}