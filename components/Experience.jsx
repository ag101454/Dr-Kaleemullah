import { doctor } from "@/data/doctor";
import Reveal from "@/components/Reveal";

export default function Experience() {
  const items = doctor.experienceTimeline;
  if (!items?.length) return null;

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="container-page py-20 md:py-28"
    >
      <div className="grid gap-12 md:grid-cols-12 md:gap-14">
        <Reveal className="md:col-span-4">
          <p className="eyebrow">Experience</p>
          <h2
            id="experience-heading"
            className="mt-5 font-display text-h2 text-ink-900 balance"
          >
            A path built on{" "}
            <em className="not-italic text-teal-600">care and precision.</em>
          </h2>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-ink-500 pretty">
            Education, clinical training, and professional practice — presented
            in the order each step was taken.
          </p>
        </Reveal>

        <div className="md:col-span-8">
          <ol className="relative ml-2 space-y-10 border-l border-line-strong pl-8">
            {items.map((item, i) => (
              <Reveal
                as="li"
                key={`${item.year}-${i}`}
                delay={i * 0.06}
                y={16}
                className="relative"
              >
                <span
                  aria-hidden="true"
                  className="absolute -left-[2.1rem] top-1.5 grid h-4 w-4 place-items-center rounded-full border border-line-strong bg-cream-50"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
                </span>

                {item.year ? (
                  <p className="text-xs uppercase tracking-[0.16em] text-ink-400">
                    {item.year}
                  </p>
                ) : null}

                {item.title ? (
                  <h3 className="mt-2 font-display text-xl text-ink-900">
                    {item.title}
                  </h3>
                ) : null}

                {item.institution ? (
                  <p className="mt-1 text-sm text-ink-600">
                    {item.institution}
                  </p>
                ) : null}

                {item.description ? (
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-500 pretty">
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