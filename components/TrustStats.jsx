import { ExternalLink } from "lucide-react";
import { doctor } from "@/data/doctor";
import Reveal from "@/components/Reveal";

export default function TrustStats() {
  const hospitals = doctor.hospitals || [];

  const stats = [
    doctor.experience
      ? { value: `${doctor.experience}+`, label: "Years Exp." }
      : null,
    doctor.qualifications?.length
      ? { value: `${doctor.qualifications.length}`, label: "Qualifications" }
      : null,
    hospitals.length
      ? { value: `${hospitals.length}`, label: "Hospitals" }
      : null,
  ].filter(Boolean);

  if (!stats.length) return null;

  return (
    <section
      aria-label="Practice highlights"
      className="relative overflow-hidden bg-white pt-8 pb-10 md:pt-16 md:pb-20"
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute left-1/2 top-0 h-[200px] w-[600px] -translate-x-1/2 bg-blob-cyan opacity-40 blur-3xl" />
      </div>

      <div className="container-page">
        <Reveal>
          <div className="divider-soft" />

          {/* Stats row — 3 columns on all screen sizes */}
          <dl className="grid grid-cols-3 gap-x-2 py-6 sm:gap-x-4 md:py-12">
            {stats.map((s) => (
              <div
                key={s.label}
                className="flex flex-col items-center gap-1 text-center md:gap-2"
              >
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-2xl font-bold leading-none text-navy-900 sm:text-3xl md:text-5xl">
                  {s.value}
                </dd>
                <dd className="text-[0.55rem] font-bold uppercase tracking-[0.12em] text-ink-400 sm:text-[0.65rem] sm:tracking-[0.14em] md:text-xs md:tracking-[0.16em]">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>

          <div className="divider-soft" />

          {/* Hospitals list */}
          {hospitals.length ? (
            <div className="mt-8 text-center md:mt-10">
              <p className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-ink-400 md:text-xs">
                Practicing At — tap to view on map
              </p>

              <ul className="mx-auto mt-4 flex max-w-4xl flex-wrap items-center justify-center gap-x-3 gap-y-2 md:mt-5 md:gap-x-4 md:gap-y-3">
                {hospitals.map((h, i) => {
                  const content = (
                    <>
                      <span>{h.name}</span>
                      {h.primary ? (
                        <span className="rounded-full bg-red-50 px-1.5 py-0.5 text-[0.55rem] font-bold uppercase tracking-wider text-red-500 md:px-2 md:text-[0.6rem]">
                          Primary
                        </span>
                      ) : null}
                    </>
                  );

                  return (
                    <li
                      key={h.name}
                      className="flex items-center gap-2 text-xs font-medium text-navy-700 md:gap-3 md:text-sm"
                    >
                      {i > 0 ? (
                        <span
                          aria-hidden="true"
                          className="hidden h-1 w-1 rounded-full bg-cyan-500 sm:block"
                        />
                      ) : null}

                      {h.mapUrl ? (
                        <a
                          href={h.mapUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Open ${h.name} on Google Maps`}
                          className="group inline-flex items-center gap-1 rounded-full border border-transparent px-1.5 py-1 transition-all duration-200 hover:border-cyan-400/40 hover:bg-cyan-50 hover:text-cyan-700 md:gap-1.5 md:px-2"
                        >
                          {content}
                          <ExternalLink
                            className="h-2.5 w-2.5 text-cyan-600 opacity-0 transition-opacity duration-200 group-hover:opacity-100 md:h-3 md:w-3"
                            strokeWidth={2}
                            aria-hidden="true"
                          />
                        </a>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 px-1.5 py-1 md:gap-2 md:px-2">
                          {content}
                        </span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}