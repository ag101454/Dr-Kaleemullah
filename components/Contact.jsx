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
      className="container-page pt-16 pb-20 md:pt-24 md:pb-28"
    >
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] border border-line bg-gradient-to-br from-cream-100 via-cream-50 to-teal-50 p-8 md:p-14">
          <div className="grid gap-10 md:grid-cols-12 md:items-center">
            <div className="md:col-span-7">
              <p className="eyebrow">Get in touch</p>
              <h2
                id="contact-heading"
                className="mt-4 font-display text-h2 text-ink-900 balance"
              >
                Let&rsquo;s take the next step in your care.
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink-500 pretty md:text-base">
                Book a consultation, message on WhatsApp, or call the clinic
                directly — whichever is easiest for you.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  href="/appointment"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-ink-900 px-6 py-3.5 text-sm font-medium text-cream-50 transition hover:bg-ink-800"
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
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-line-strong bg-surface px-6 py-3.5 text-sm font-medium text-ink-900 transition hover:border-teal-500/40 hover:bg-teal-50"
                  >
                    <MessageCircle
                      className="h-4 w-4 text-teal-600"
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                    WhatsApp
                  </a>
                ) : null}

                {doctor.phone ? (
                  <a
                    href={telUrl(doctor.phoneRaw || doctor.phone)}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-line-strong bg-surface px-6 py-3.5 text-sm font-medium text-ink-900 transition hover:border-teal-500/40 hover:bg-teal-50"
                  >
                    <Phone
                      className="h-4 w-4 text-teal-600"
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                    Call Clinic
                  </a>
                ) : null}
              </div>
            </div>

            <div className="md:col-span-5">
              <ul className="space-y-3">
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
                      className="underline decoration-line-strong underline-offset-4 transition hover:decoration-teal-500"
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
                      className="break-all underline decoration-line-strong underline-offset-4 transition hover:decoration-teal-500"
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
                          <span className="text-ink-700">{h.day}</span>
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
    </section>
  );
}

function InfoRow({ icon: Icon, title, children }) {
  return (
    <li className="flex items-start gap-4 rounded-2xl border border-line bg-surface/70 p-4">
      <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-2xl bg-teal-50 text-teal-600">
        <Icon className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-xs uppercase tracking-[0.14em] text-ink-400">
          {title}
        </p>
        <div className="mt-1 text-sm text-ink-800">{children}</div>
      </div>
    </li>
  );
}