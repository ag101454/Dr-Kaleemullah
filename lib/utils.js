/**
 * ============================================================
 * UTILITIES
 * ============================================================
 */

/**
 * Merge class names, skipping falsy values.
 */
export function cn(...args) {
  return args.filter(Boolean).join(" ");
}

/**
 * Strip everything except digits from a phone-ish string.
 */
export function toDigits(input = "") {
  return String(input).replace(/\D/g, "");
}

/**
 * Build a safe wa.me URL.
 * @param {string} number  International number, digits only OR with + and spaces.
 * @param {string} message Plain text message to encode.
 */
export function whatsappUrl(number, message = "") {
  const digits = toDigits(number);
  const base = `https://wa.me/${digits}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

/**
 * Build a tel: URL.
 */
export function telUrl(number) {
  return `tel:${String(number).replace(/[\s()-]/g, "")}`;
}

/**
 * Build a mailto: URL with optional subject and body.
 */
export function mailtoUrl(email, subject = "", body = "") {
  const params = new URLSearchParams();
  if (subject) params.set("subject", subject);
  if (body) params.set("body", body);
  const qs = params.toString();
  return `mailto:${email}${qs ? `?${qs}` : ""}`;
}

/**
 * True if a value is present and non-empty.
 */
export function isConfigured(value) {
  if (value === undefined || value === null) return false;
  if (Array.isArray(value)) return value.length > 0;
  return String(value).trim() !== "";
}

/**
 * Format a phone number for display (best-effort, non-destructive).
 */
export function formatPhone(number = "") {
  return String(number).trim();
}

/**
 * Smoothly scroll to an element id — respects reduced motion.
 */
export function scrollToId(id) {
  if (typeof document === "undefined") return;
  const el = document.getElementById(id);
  if (!el) return;
  const reduce =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
  el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
}