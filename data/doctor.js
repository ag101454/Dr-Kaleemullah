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

      // ---- Hospitals where the doctor practices ----
  hospitals: [
    {
      name: "Nishtar Hospital",
      area: "Multan",
      primary: true,
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Nishtar+Hospital+Multan",
    },
    {
      name: "Chenab Hospital",
      area: "Chungi No. 1, Multan",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Chenab+Hospital+Chungi+No+1+Multan",
    },
    {
      name: "South Punjab Hospital",
      area: "Multan",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=South+Punjab+Hospital+Multan",
    },
    {
      name: "Mukhtar A. Sheikh Hospital",
      area: "Multan",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Mukhtar+A+Sheikh+Hospital+Multan",
    },
    {
      name: "Buch International Hospital",
      area: "Multan",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Buch+International+Hospital+Multan",
    },
    {
      name: "City Hospital",
      area: "Multan",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=City+Hospital+Multan",
    },
    {
      name: "Fatima Hospital",
      area: "Multan",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Fatima+Hospital+Multan",
    },
  ],

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
   // ---- Services (bilingual — EN + UR) ----
   services: [
    {
      slug: "vats",
      title: "Video-Assisted Thoracoscopic Surgery (VATS)",
      titleUr: "ویڈیو اسسٹڈ تھوراکوسکوپک سرجری",
      description:
        "Minimally invasive chest surgery performed using a camera and small incisions.",
      descriptionUr:
        "کیمرے اور چھوٹے چیروں کی مدد سے سینے کا آپریشن کیا جاتا ہے۔",
    },
    {
      slug: "oesophagus-stomach",
      title: "Oesophagus and Stomach Diseases",
      titleUr: "غذائی نالی اور معدے کی بیماریاں",
      description:
        "Treatment and surgery for diseases, cancer, and obstructions of the oesophagus (food pipe) and stomach.",
      descriptionUr:
        "خوراک کی نالی اور معدے کی بیماریوں، کینسر اور رکاوٹوں کا علاج اور آپریشن۔",
    },
    {
      slug: "corrosive-ingestion",
      title: "Corrosive Ingestion",
      titleUr: "تیزابی یا مضر کیمیکل نگلنے سے ہونے والا نقصان",
      description:
        "Treatment of damage and narrowing of the food pipe caused by swallowing corrosive substances.",
      descriptionUr:
        "تیزاب یا نقصان دہ کیمیکل نگلنے سے غذائی نالی کو پہنچنے والے نقصان اور اس کی تنگی کا علاج۔",
    },
    {
      slug: "lung-tumors",
      title: "Lung Tumors",
      titleUr: "پھیپھڑوں کی رسولیاں",
      description: "Surgical treatment of lung tumors and lung cancer.",
      descriptionUr: "پھیپھڑوں کی رسولیوں اور کینسر کا جراحی علاج۔",
    },
    {
      slug: "lung-diseases",
      title: "Lung Diseases",
      titleUr: "پھیپھڑوں کی بیماریاں",
      description:
        "Treatment of various lung diseases, including bronchiectasis, tuberculosis (TB), hydatid cyst, and lung abscess.",
      descriptionUr:
        "پھیپھڑوں کی مختلف بیماریوں کا علاج، جن میں برونکیکٹیسس، تپِ دق (ٹی بی)، ہائیڈیٹڈ سسٹ، اور پھیپھڑوں میں پیپ کا پھوڑا شامل ہیں۔",
    },
    {
      slug: "tracheal-diseases",
      title: "Tracheal Diseases",
      titleUr: "سانس کی نالی کی بیماریاں",
      description:
        "Treatment and surgery for diseases, narrowing, and tumors of the trachea (windpipe).",
      descriptionUr:
        "سانس کی نالی کی بیماریوں، تنگی اور رسولیوں کا علاج اور آپریشن۔",
    },
    {
      slug: "pleural-space",
      title: "Pleural Space Diseases",
      titleUr: "پھیپھڑوں کے گرد موجود جگہ کی بیماریاں",
      description:
        "Treatment of conditions affecting the pleural space, including the accumulation of air or fluid around the lungs.",
      descriptionUr:
        "پھیپھڑوں کے گرد موجود جگہ میں ہوا یا پانی جمع ہونے جیسی بیماریوں کا علاج۔",
    },
    {
      slug: "chest-wall",
      title: "Chest Wall Diseases",
      titleUr: "سینے کی دیوار کی بیماریاں",
      description:
        "Treatment and surgery for conditions affecting the chest wall.",
      descriptionUr: "سینے کی دیوار کو متاثر کرنے والی بیماریوں کا علاج اور آپریشن۔",
    },
    {
      slug: "diaphragm-surgery",
      title: "Diaphragm Surgery",
      titleUr: "ڈایافرام کی سرجری",
      description:
        "Surgical treatment of diseases and abnormalities of the diaphragm, the muscle separating the chest and abdomen.",
      descriptionUr:
        "سینے اور پیٹ کے درمیان موجود پٹھے (ڈایافرام) کی بیماریوں اور نقائص کا آپریشن۔",
    },
    {
      slug: "mediastinal-mass",
      title: "Mediastinal Mass — Biopsy and Surgery",
      titleUr: "سینے کے درمیانی حصے کی رسولی — بایوپسی اور آپریشن",
      description:
        "Biopsy and surgical treatment of masses or tumors in the mediastinum, the central area of the chest between the lungs.",
      descriptionUr:
        "دونوں پھیپھڑوں کے درمیان سینے کے درمیانی حصے میں موجود رسولی یا گلٹی کی بایوپسی اور آپریشن۔",
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
    siteUrl: "https://dr-kaleemullah.vercel.app", // ← replace with the real domain once live
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