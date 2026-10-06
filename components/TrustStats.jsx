import { doctor } from "@/data/doctor";
import Reveal from "@/components/Reveal";

export default function TrustStats() {
  const stats = [
    doctor.experience
      ? { value: `${doctor.experience}+`, label: "Years of Experience" }
      : null,
    doctor.qualifications?.length
      ? { value: `${doctor.qualifications.length}`, label: "Qualifications" }
      : null,
    doctor.services?.length
      ? { value: `${doctor.services.length}`, label: "Clinical Services" }
      : null,
    doctor.languages?.length
      ? { value: `${doctor.languages.length}`, label: "Languages Spoken" }
      : null,
  ].filter(Boolean);

  if (!stats.length) return null;

  return (
    <section
      aria-label="Practice highlights"
      className="container-page mt-8 md:mt-12"
    >
      <div className="divider-soft" />
      <Reveal>
        <dl className="grid grid-cols-2 gap-y-10 gap-x-6 py-10 md:grid-cols-4 md:py-12">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col gap-2">
              <dt className="sr-only">{s.label}</dt>
              <dd className="font-display text-3xl text-ink-900 md:text-4xl">
                {s.value}
              </dd>
              <dd className="text-xs uppercase tracking-[0.14em] text-ink-400">
                {s.label}
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
      <div className="divider-soft" />
    </section>
  );
}