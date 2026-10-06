/**
 * ============================================================
 * DOCTOR DATA — Dr. Kaleem Ullah
 * ------------------------------------------------------------
 * This is the ONLY file you need to edit to customize the site.
 * Empty strings / arrays cause their sections to hide automatically.
 * ============================================================
 */

export const doctor = {
  // ---- Identity ----
  name: "Dr. Kaleem Ullah",
  title: "Professor & Chairman, Department of Thoracic Surgery",
  specialization: "Thoracic Surgery",
  subSpecialization: "Nishtar Hospital, Multan",
  experience: "17", // years since MBBS (2007 → present). Update as needed.
  tagline:
    "Evidence-based thoracic surgical care — grounded in academic rigor and a patient-first approach.",
  biography:
    "Dr. Kaleem Ullah is a Thoracic Surgeon serving as Professor and Chairman of the Department of Thoracic Surgery at Nishtar Hospital, Multan. A native of Multan, he completed his MBBS from Nishtar Medical College in 2007 and earned his Fellowship in Thoracic Surgery in 2014, following structured training at Lady Reading Hospital, Peshawar, and Nishtar Hospital, Multan. He has served in academic and clinical leadership roles at Nishtar Medical College and Multan Medical & Dental College, and since 2018 has been an accredited supervisor and examiner for FCPS and MS Thoracic Surgery. His work spans clinical thoracic surgery, postgraduate medical education, health informatics, and institutional development.",

  // ---- Contact ----
  phone: "0300 632 9916", // display format
  phoneRaw: "+923006329916", // for tel: links
  whatsapp: "923006329916", // digits only, international, no +
  email: "kaleemullah000010@gmail.com",

  // ---- Clinic ----
  clinic: {
    name: "Nishtar Hospital",
    address: "Nishtar Hospital",
    city: "Multan, Punjab, Pakistan",
    hours: [], // ← provide later
    parking: "",
    onlineConsultation: false,
    onlineConsultationNote: "",
    mapUrl: "https://maps.google.com/?q=Nishtar+Hospital+Multan",
    mapEmbedUrl: "",
  },

  // ---- Credentials ----
  qualifications: [
    {
      degree: "MBBS",
      institution: "Nishtar Medical College, Multan",
      year: "2007",
    },
    {
      degree: "FCPS — Fellowship in Thoracic Surgery",
      institution:
        "Lady Reading Hospital, Peshawar & Nishtar Hospital, Multan",
      year: "2014",
    },
  ],

  certifications: [
    {
      title: "FACS — Fellow, American College of Surgeons",
      issuer: "American College of Surgeons",
      year: "",
    },
    {
      title: "Advanced Trauma Life Support (ATLS)",
      issuer: "American College of Surgeons",
      year: "",
    },
    {
      title: "Certificate in Health Professions Education (CHPE)",
      issuer: "Nishtar Medical University",
      year: "",
    },
  ],

  memberships: [
    { name: "Department of Medical Education, Nishtar Medical University" },
    { name: "Quality Enhancement Cell (QEC), Nishtar Medical University" },
    { name: "American College of Surgeons (FACS)" },
  ],

  awards: [
    {
      title: "First Merit — Senior Registrar, Punjab Public Service Commission (PPSC)",
      issuer: "PPSC",
      year: "",
    },
    {
      title: "Selected as Professor of Thoracic Surgery via PPSC",
      issuer: "Punjab Public Service Commission",
      year: "2026",
    },
  ],

  // ---- Practice ----
  services: [
    {
      slug: "thoracic-surgical-consultation",
      icon: "Stethoscope",
      title: "Thoracic Surgical Consultation",
      description:
        "Clinical evaluation and surgical assessment for thoracic conditions, with personalized care planning.",
      details: "",
    },
    {
      slug: "surgical-evaluation-second-opinion",
      icon: "ClipboardCheck",
      title: "Surgical Evaluation & Second Opinion",
      description:
        "Detailed review of imaging, prior reports, and clinical history for patients considering thoracic surgery.",
      details: "",
    },
    {
      slug: "post-operative-follow-up",
      icon: "HeartPulse",
      title: "Post-Operative Follow-Up",
      description:
        "Structured follow-up and recovery monitoring after thoracic surgical procedures.",
      details: "",
    },
  ],

  expertise: [
    "Thoracic Surgery",
    "Postgraduate Surgical Education (FCPS & MS supervision)",
    "Health Informatics & Hospital Management Information Systems",
    "Medical Education & Clinical Training",
  ],

  experienceTimeline: [
    {
      year: "2007",
      title: "MBBS",
      institution: "Nishtar Medical College, Multan",
      description:
        "Completed undergraduate medical education at Nishtar Medical College.",
    },
    {
      year: "2014",
      title: "Fellowship in Thoracic Surgery",
      institution:
        "Lady Reading Hospital, Peshawar & Nishtar Hospital, Multan",
      description:
        "Completed structured postgraduate training in thoracic surgery.",
    },
    {
      year: "2016",
      title: "Assistant Professor — Thoracic Surgery",
      institution: "Multan Medical & Dental College",
      description:
        "Began post-fellowship academic career as Assistant Professor.",
    },
    {
      year: "2016 – 2021",
      title: "Assistant Professor (Ad-hoc)",
      institution: "Nishtar Medical College, Multan",
      description:
        "Returned to alma mater; served on ad-hoc basis for approximately five years.",
    },
    {
      year: "2021 – 2023",
      title: "Senior Registrar (PPSC — First Merit)",
      institution: "Nishtar Hospital, Multan",
      description:
        "Served as Senior Registrar through the Punjab Public Service Commission.",
    },
    {
      year: "2023 – Present",
      title: "Assistant Professor & Head of Department",
      institution: "Department of Thoracic Surgery, Nishtar Hospital, Multan",
      description:
        "Leading the department; expanded operating capacity from 2 to 8 operating tables per week.",
    },
    {
      year: "2026",
      title: "Professor of Thoracic Surgery",
      institution: "Punjab Public Service Commission (PPSC)",
      description:
        "Selected as Professor of Thoracic Surgery through the Punjab Public Service Commission.",
    },
  ],

  languages: ["English", "Urdu", "Punjabi"], // ← correct if needed

  // ---- Testimonials (empty until real, consented ones are provided) ----
  testimonials: [],

  // ---- FAQ (generic process questions; replace with practice-specific answers) ----
  faqs: [
    {
      q: "How can I book an appointment?",
      a: "You can request an appointment through the booking form on this website, or contact the clinic via WhatsApp using the floating button at the bottom of the screen.",
    },
    {
      q: "Where is the clinic located?",
      a: "Consultations are held at Nishtar Hospital, Multan. Please refer to the Contact page for the exact location and directions.",
    },
    {
      q: "What should I bring to my consultation?",
      a: "Please bring any recent imaging (X-ray, CT, MRI), prior operative notes, current medications, and any relevant medical reports from other specialists.",
    },
  ],

  // ---- Social (empty until provided) ----
  socialLinks: {
    instagram: "",
    linkedin: "",
  },

  // ---- SEO ----
  seo: {
    siteUrl: "https://drkaleemullah.com", // ← replace with the real domain once live
    siteName: "Dr. Kaleem Ullah",
    defaultDescription:
      "Professor & Chairman, Department of Thoracic Surgery, Nishtar Hospital, Multan. Clinical thoracic surgery, postgraduate education, and academic leadership.",
  },
};

// ---- Derived helpers ----
export const hasValue = (v) =>
  v !== undefined &&
  v !== null &&
  (Array.isArray(v) ? v.length > 0 : String(v).trim() !== "");

export const fullName = doctor.name;
export const shortLocation = [doctor.clinic.city].filter(Boolean).join(", ");