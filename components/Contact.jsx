import Link from "next/link";
import { ArrowRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { doctor } from "@/data/doctor";
import { mailtoUrl, telUrl, whatsappUrl } from "@/lib/utils";
import Reveal from "@/components/Reveal";

export default function Contact() {
  const wa = whatsappUrl(
    doctor.whatsapp,
    `Hello ${doctor.name}, I would like to book an appointment.`
  );

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative overflow-hidden bg-cream-50 pt-14 pb-16 md:pt-28 md:pb-32"
    >
      {/* Ambient cyan glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -top-32 left-1/4 h-[420px] w-[420px] bg-blob-cyan opacity-50 blur-3xl" />
        <div className="absolute -bottom-24 right-1/4 h-[320px] w-[320px] bg-blob-cyan opacity-30 blur-3xl" />
      </div>

      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-line bg-white p-5 shadow-card sm:p-8 md:rounded-[2rem] md:p-14">
            {/* Red→cyan accent bar */}
            <span
              aria-hidden="true"
              className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-red-500 via-red-500 to-cyan-400"
            />

            <div className="grid gap-8 md:grid-cols-12 md:items-center md:gap-14">
              {/* Left — heading + CTAs */}
              <div className="md:col-span-7">
                <p className="eyebrow">Get in touch</p>
                <h2
                  id="contact-heading"
                  className="mt-3 font-display text-h2 text-navy-900 balance md:mt-4"
                >
                  Let&rsquo;s take the next{" "}
                  <span className="text-red-500">step in your care.</span>
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink-500 pretty md:mt-5 md:text-lg">
                  Book a consultation, message on WhatsApp, or call the clinic
                  directly — whichever is easiest for you.
                </p>

                {/* CTAs — stack on mobile, inline on desktop */}
                <div className="mt-6 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap md:mt-9 md:gap-3">
                  <Link
                    href="/appointment"
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-navy-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-navy-800 hover:shadow-lift md:px-6 md:py-3.5"
                  >
                    Book an Appointment
                    <ArrowRight
                      className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  </Link>

                  {doctor.whatsapp ? (
                    <a
                      href={wa}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center justify-center gap-2 rounded-full border border-line-strong bg-white px-5 py-3 text-sm font-semibold text-navy-900 transition-all hover:border-cyan-400/50 hover:bg-cyan-50 md:px-6 md:py-3.5"
                    >
                      <MessageCircle
                        className="h-4 w-4 text-cyan-600 transition-transform group-hover:scale-110"
                        strokeWidth={2}
                        aria-hidden="true"
                      />
                      WhatsApp
                    </a>
                  ) : null}

                  {doctor.phone ? (
                    <a
                      href={telUrl(doctor.phoneRaw || doctor.phone)}
                      className="group inline-flex items-center justify-center gap-2 rounded-full border border-line-strong bg-white px-5 py-3 text-sm font-semibold text-navy-900 transition-all hover:border-cyan-400/50 hover:bg-cyan-50 md:px-6 md:py-3.5"
                    >
                      <Phone
                        className="h-4 w-4 text-cyan-600 transition-transform group-hover:scale-110"
                        strokeWidth={2}
                        aria-hidden="true"
                      />
                      Call Clinic
                    </a>
                  ) : null}
                </div>
              </div>

              {/* Right — info rows */}
              <div className="md:col-span-5">
                <ul className="space-y-2.5 md:space-y-3">
                  {(doctor.clinic?.address ||
                    doctor.clinic?.city ||
                    doctor.clinic?.name) && (
                    <InfoRow icon={MapPin} title="Clinic">
                      {[doctor.clinic?.name, doctor.clinic?.city]
                        .filter(Boolean)
                        .join(" · ")}
                    </InfoRow>
                  )}

                  {doctor.phone ? (
                    <InfoRow icon={Phone} title="Phone">
                      <a
                        href={telUrl(doctor.phoneRaw || doctor.phone)}
                        className="font-medium text-navy-900 underline decoration-line-strong underline-offset-4 transition hover:decoration-cyan-500"
                      >
                        {doctor.phone}
                      </a>
                    </InfoRow>
                  ) : null}

                  {doctor.email ? (
                    <InfoRow icon={Mail} title="Email">
                      <a
                        href={mailtoUrl(
                          doctor.email,
                          `Enquiry — ${doctor.name}`
                        )}
                        className="break-all font-medium text-navy-900 underline decoration-line-strong underline-offset-4 transition hover:decoration-cyan-500"
                      >
                        {doctor.email}
                      </a>
                    </InfoRow>
                  ) : null}

                  {doctor.clinic?.hours?.length ? (
                    <InfoRow icon={MapPin} title="Hours">
                      <ul className="space-y-1">
                        {doctor.clinic.hours.map((h) => (
                          <li
                            key={`${h.day}-${h.time}`}
                            className="flex justify-between gap-4"
                          >
                            <span className="text-navy-700">{h.day}</span>
                            <span className="text-ink-500">{h.time}</span>
                          </li>
                        ))}
                      </ul>
                    </InfoRow>
                  ) : null}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function InfoRow({ icon: Icon, title, children }) {
  return (
    <li className="group flex items-start gap-3 rounded-xl border border-line bg-white px-4 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/40 hover:shadow-soft md:gap-4 md:rounded-2xl md:px-5 md:py-4">
      <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-cyan-50 text-cyan-600 transition-colors duration-300 group-hover:bg-cyan-500 group-hover:text-white md:h-10 md:w-10">
        <Icon className="h-3.5 w-3.5 md:h-4 md:w-4" strokeWidth={2} aria-hidden="true" />
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-[0.6rem] font-bold uppercase tracking-[0.14em] text-ink-400 md:text-xs">
          {title}
        </p>
        <div className="mt-1 text-sm text-navy-800 md:text-[0.95rem]">
          {children}
        </div>
      </div>
    </li>
  );
}