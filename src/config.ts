/**
 * Central site configuration.
 *
 * ▸ Edit the values below to customise the website.
 *   Almost all text, contact details, links, coaches, training times and
 *   prices live here so you rarely have to touch the components.
 */

import type { Localized } from './i18n';

export interface NavLink {
  label: string;
  href: string;
}

export interface TrainingSlot {
  /** Canonical English weekday (e.g. "Friday") – used for schema.org mapping
   *  and to look up the localized label. */
  day: string;
  time: string;
  title: Localized;
  /** Optional skill-level tag (e.g. "All levels"). Omit to hide the tag. */
  level?: Localized;
  room: string;
  /** Optional Google Maps link for the room/building. */
  roomUrl?: string;
}

export interface Coach {
  name: string;
  role: Localized;
  belt: Localized;
  bio?: Localized;
  /** Optional short italic tagline shown under the belt. */
  tagline?: Localized;
  /** Path relative to /public, e.g. "/images/coach-1.svg" */
  photo: string;
  /** Alt text describing the photo for screen readers. */
  photoAlt: Localized;
}

export interface PriceItem {
  name: Localized;
  price: string;
  note?: Localized;
}

// === Club / brand =========================================================
export const club = {
  name: 'BJJ Heidelberg',
  shortName: 'BJJ/HD',
  tagline: 'Brazilian Jiu-Jitsu in Heidelberg',
  // Logo lives in /public. Replace with your own file.
  logo: '/images/logo.svg',
  logoAlt: 'Logo BJJ/HD',
  // Default thumbnail shown when a page URL is shared on social media / chat.
  // Path relative to /public. For best results use a 1200×630 PNG or JPG
  // (SVG is NOT supported by most link-preview crawlers).
  ogImage: '/images/og-image.jpg',
  ogImageAlt: 'BJJ Heidelberg – Brazilian Jiu-Jitsu',
};

// === Contact details ======================================================
export const contact = {
  legalEntity: 'BJJ Heidelberg i. G.', // i. G. = in Gründung; nach Eintragung ins Vereinsregister auf 'BJJ Heidelberg e.V.' ändern. Eigenständiger Verein, nicht Teil der TSG.
  // Vertretungsberechtigte:r (Vorstand) – fürs Impressum
  representative: 'Jan-Benedikt Jagusch',
  // Vereinssitz / eingetragene Anschrift – Impressum, Datenschutz, Footer
  street: 'Schröderstraße 21',
  zip: '69120',
  city: 'Heidelberg',
  country: 'Deutschland',
  email: 'info@bjjheidelberg.de',
  // Trainingsort (kann von der Vereinsanschrift abweichen) – Abschnitt "Ort"
  venue: 'TSG 78 Heidelberg',
  venueStreet: 'Tiergartenstraße 9–11',
  venueZip: '69120',
  venueCity: 'Heidelberg',
  // Optional Google Maps link (opens externally, no embed/tracking).
  mapsUrl:
    'https://maps.google.com/?q=Tiergartenstra%C3%9Fe+9-11+69120+Heidelberg',
};

// === About / Club =========================================================
export const about = {
  founded: '2026',
  paragraphs: [
    {
      de: 'BJJ Heidelberg wurde 2026 gegründet. Unser Ziel ist es, dir solides Brazilian Jiu-Jitsu in einer Atmosphäre beizubringen, in der sich absolute Anfänger und erfahrene Kampfsportler gleichermaßen willkommen fühlen.',
      en: 'BJJ Heidelberg was founded in 2026. Our goal is to teach you solid Brazilian Jiu-Jitsu in an atmosphere where complete beginners and experienced martial artists feel equally welcome.',
    },
    {
      de: 'Wir sind ein gemeinschaftlich geführter Verein. Sauberes Jiu-Jitsu, gegenseitiger Respekt und Spaß auf der Matte stehen an erster Stelle – nicht das Ego.',
      en: 'We are a community-driven club. Clean Jiu-Jitsu, mutual respect and having fun on the mat come first – not the ego.',
    },
  ] satisfies Localized[],
};

// === Head coach ===========================================================
export const headCoach = {
  name: 'Ben',
  role: { de: 'Cheftrainer', en: 'Head Coach' } satisfies Localized,
  belt: { de: 'Schwarzgurt', en: 'Black Belt' } satisfies Localized,
  photo: '/images/coach-1.svg', // TODO: add a real photo under /public/images
  photoAlt: {
    de: 'Porträtfoto von Cheftrainer Ben',
    en: 'Portrait photo of head coach Ben',
  } satisfies Localized,
  paragraphs: [
    {
      de: 'Ben trainiert seit über 14 Jahren Brazilian Jiu-Jitsu. Seinen schwarzen Gurt erhielt er 2023.',
      en: 'Ben has been training Brazilian Jiu-Jitsu for over 14 years. He received his black belt in 2023.',
    },
  ] satisfies Localized[],
};

// === Hero slideshow / Diashow =============================================
// Optional crossfading background images for the landing-page hero.
// Drop your photos into /public/images/slideshow/ and list them here.
// Leave the array empty to keep the plain gradient background.
export interface SlideshowImage {
  /** Path relative to /public, e.g. "/images/slideshow/mat-1.jpg". */
  src: string;
  /** Alt text describing the image (localized, for screen readers). */
  alt: Localized;
}

export const slideshow: SlideshowImage[] = [
  {
    src: '/images/slideshow/team-group.jpeg',
    alt: {
      de: 'BJJ Heidelberg – Brazilian Jiu-Jitsu',
      en: 'BJJ Heidelberg – Brazilian Jiu-Jitsu',
    },
  },
  {
    src: '/images/slideshow/team-mat.jpeg',
    alt: {
      de: 'Trainingsgruppe von BJJ Heidelberg auf der Matte',
      en: 'BJJ Heidelberg training group on the mat',
    },
  },
  {
    src: '/images/slideshow/high-ground.jpeg',
    alt: {
      de: 'Zwei Trainingspartner beim Sparring am Boden',
      en: 'Two training partners sparring on the ground',
    },
  },
];

// === Training schedule ====================================================
export const trainingSchedule: TrainingSlot[] = [
  {
    day: 'Friday',
    time: '18:30 – 20:30',
    title: { de: 'BJJ-Training', en: 'BJJ Training' },
    room: 'Gymnastikraum',
    roomUrl:
      'https://www.tsg78-hd.de/images/Abteilungen/Seniorensport/Anfahrt_Athleticon_GyR.png',
  },
  {
    day: 'Saturday',
    time: '11:00 – 13:00',
    title: { de: 'Open Mat', en: 'Open Mat' },
    room: 'Athleticon',
    roomUrl:
      'https://www.tsg78-hd.de/images/Abteilungen/Seniorensport/Anfahrt_Athleticon_GyR.png',
  },
];

// === Coaches ==============================================================
export const coaches: Coach[] = [
  {
    name: 'Bjarne',
    role: { de: 'Trainer', en: 'Coach' },
    belt: {
      de: 'Lila Gurt (BJJ) · Brauner Gurt (Judo)',
      en: 'Purple Belt (BJJ) · Brown Belt (Judo)',
    },
    photo: '/images/coach-2.svg',
    photoAlt: {
      de: 'Porträtfoto von Trainer Bjarne',
      en: 'Portrait photo of coach Bjarne',
    },
  },
  {
    name: 'Jan',
    role: { de: 'Trainer', en: 'Coach' },
    belt: { de: 'Lila Gurt', en: 'Purple Belt' },
    photo: '/images/coach-3.svg',
    photoAlt: {
      de: 'Porträtfoto von Trainer Jan',
      en: 'Portrait photo of coach Jan',
    },
  },
];

// === Pricing ==============================================================
// `price` carries only the amount; the "/ month" suffix is localized in the UI.
export const pricing: PriceItem[] = [
  { name: { de: 'Erwachsene', en: 'Adults' }, price: '€50' },
  {
    name: { de: 'Jugendliche', en: 'Youth' },
    price: '€40',
    note: { de: 'Unter 18 Jahren', en: 'Under 18 years' },
  },
  {
    name: { de: 'Studierende', en: 'Students' },
    price: '€40',
    note: { de: 'Mit gültigem Nachweis', en: 'With valid proof' },
  },
];

// === Campai application forms =============================================
export const campai = {
  scriptSrc: 'https://app.campai.com/scripts/embeddable.js',
  // Free trial class registration – the primary call to action.
  trialFormSrc:
    'https://app.campai.com/em/a3f04/applications/6a40d273f3a3d5b149e14acc',
  // Full membership application.
  membershipFormSrc:
    'https://app.campai.com/em/a3f04/applications/6a3149bfd9ff99f706bccaa2',
};

// === Documents / Vereinsdokumente =========================================
export interface ClubDocument {
  title: string;
  /** Short description shown under the title. */
  description: string;
  /** Path relative to /public, e.g. "/documents/satzung.pdf". */
  file: string;
}

export const documents: ClubDocument[] = [
  {
    title: 'Satzung',
    description: 'Die Vereinssatzung von BJJ Heidelberg.',
    file: '/documents/satzung.pdf',
  },
  {
    title: 'Beitragsordnung',
    description: 'Übersicht der Mitgliedsbeiträge und Gebühren.',
    file: '/documents/beitragsordnung.pdf',
  },
];

// === Guidelines / Trainingsregeln =========================================
export interface GuidelineItem {
  title: Localized;
  text: Localized;
}

export interface GuidelineGroup {
  /** Stable, language-neutral id used for the section anchor. */
  id: string;
  category: Localized;
  items: GuidelineItem[];
}

export const guidelines: GuidelineGroup[] = [
  {
    id: 'hygiene',
    category: { de: 'Hygiene', en: 'Hygiene' },
    items: [
      {
        title: {
          de: 'Bleib zu Hause, wenn du krank bist',
          en: 'Stay home if you are sick',
        },
        text: {
          de: 'Wenn du Anzeichen einer Erkältung oder Krankheit bemerkst, bleib bitte zu Hause, um deine Trainingspartner nicht anzustecken.',
          en: 'If you notice any signs of a cold or illness, please stay home so you don’t infect your training partners.',
        },
      },
      {
        title: {
          de: 'Keine Schuhe auf der Matte',
          en: 'No shoes on the mat',
        },
        text: {
          de: 'Damit kein Schmutz und keine Bakterien auf die Matte gelangen, zieh deine Schuhe aus, bevor du sie betrittst.',
          en: 'To keep dirt and bacteria off the mat, take your shoes off before stepping onto it.',
        },
      },
      {
        title: {
          de: 'Geh nicht barfuß von der Matte',
          en: 'Don’t walk barefoot off the mat',
        },
        text: {
          de: 'Vor allem nicht zur Toilette! Nutze Schlappen, wann immer du die Matte verlässt.',
          en: 'Especially not to the bathroom! Use slippers whenever you leave the mat.',
        },
      },
      {
        title: {
          de: 'Wasch deine Ausrüstung',
          en: 'Wash your gear',
        },
        text: {
          de: 'Wasch deinen Gi und deine Kleidung nach jedem Training – inklusive deines Gurts.',
          en: 'Wash your Gi and clothing after every session – including your belt.',
        },
      },
      {
        title: {
          de: 'Halte deine Nägel kurz',
          en: 'Keep your nails short',
        },
        text: {
          de: 'Lange Finger- und Fußnägel sind ein Verletzungsrisiko für deine Partner. Bitte schneide sie vor dem Training.',
          en: 'Long finger- and toenails are an injury risk for your partners. Please trim them before training.',
        },
      },
      {
        title: {
          de: 'Schmuck und Piercings ablegen',
          en: 'Remove jewellery and piercings',
        },
        text: {
          de: 'Sie können sich verfangen und dich oder andere verletzen.',
          en: 'They can get caught and injure you or others.',
        },
      },
      {
        title: {
          de: 'Benutze Deo',
          en: 'Use deodorant',
        },
        text: {
          de: 'Niemand trainiert gern mit einem unangenehm riechenden Partner. Bitte benutze vor dem Training Deo.',
          en: 'No one likes training with an unpleasant-smelling partner. Please use deodorant before class.',
        },
      },
      {
        title: {
          de: 'Kein Training mit offenen Wunden',
          en: 'No training with open wounds',
        },
        text: {
          de: 'Wenn du offene Wunden oder Hautausschläge hast, setz bitte aus, um nichts zu übertragen.',
          en: 'If you have open wounds or skin rashes, please sit out to avoid spreading anything.',
        },
      },
    ],
  },
  {
    id: 'safety',
    category: { de: 'Sicherheit', en: 'Safety' },
    items: [
      {
        title: {
          de: 'Verletze deine Partner nicht',
          en: 'Don’t injure your partners',
        },
        text: {
          de: 'Die Sicherheit von dir und deinen Trainingspartnern steht über allem anderen.',
          en: 'The safety of you and your training partners comes above everything else.',
        },
      },
      {
        title: {
          de: 'Manche Techniken sind nicht erlaubt',
          en: 'Some techniques are not allowed',
        },
        text: {
          de: 'Aus Sicherheitsgründen vermeiden wir bestimmte Techniken, z. B. Slams, Jumping Guard, Scherenwürfe, Neck Cranks und Heel Hooks im Gi.',
          en: 'For safety reasons we avoid certain techniques, e.g. slams, jumping guard, scissor takedowns, neck cranks and heel hooks in the Gi.',
        },
      },
      {
        title: {
          de: 'Sprich dich mit deinem Partner ab',
          en: 'Communicate with your partner',
        },
        text: {
          de: 'Flow Rolling oder eine Wettkampfrunde? Beinhebel erlaubt oder nicht? Klärt das vorher.',
          en: 'Flow rolling or a competition round? Leg locks allowed or not? Agree on it beforehand.',
        },
      },
      {
        title: {
          de: 'Beginnt sitzend, wenn die Matte voll ist',
          en: 'Start seated when the mat is full',
        },
        text: {
          de: 'Wenn es voll wird, lasst Takedowns weg, um nicht aufeinander zu treten.',
          en: 'When it gets crowded, skip takedowns to avoid stepping on each other.',
        },
      },
      {
        title: {
          de: 'Achte auf deine Umgebung',
          en: 'Watch your surroundings',
        },
        text: {
          de: 'Auf einer vollen Matte achtet aufeinander, um Zusammenstöße zu vermeiden.',
          en: 'On a full mat, keep an eye on each other to avoid collisions.',
        },
      },
      {
        title: {
          de: 'Beachte Größenunterschiede',
          en: 'Mind size differences',
        },
        text: {
          de: 'Wenn du mit kleineren Partnern rollst, nutze Technik statt Kraft und kontrolliere dein Gewicht.',
          en: 'When rolling with smaller partners, use technique instead of strength and control your weight.',
        },
      },
      {
        title: {
          de: 'Setze Submissions kontrolliert an',
          en: 'Apply submissions under control',
        },
        text: {
          de: 'Training ist kein Wettkampf. Setze Submissions langsam an und gib deinem Partner Zeit zum Abklopfen.',
          en: 'Training is not competition. Apply submissions slowly and give your partner time to tap.',
        },
      },
      {
        title: {
          de: 'Klopf früh und jederzeit ab',
          en: 'Tap early and any time',
        },
        text: {
          de: 'Wenn du in einer Submission gefangen bist, klopf ab. Deine Gesundheit ist wichtiger als dein Ego.',
          en: 'If you’re caught in a submission, tap. Your health is more important than your ego.',
        },
      },
      {
        title: {
          de: 'Setz eine Runde aus, wenn nötig',
          en: 'Sit out a round if needed',
        },
        text: {
          de: 'Brauchst du eine Pause? Kein Problem – setz ruhig eine Runde aus.',
          en: 'Need a break? No problem – feel free to sit out a round.',
        },
      },
      {
        title: {
          de: 'Melde Verletzungen',
          en: 'Report injuries',
        },
        text: {
          de: 'Wenn sich jemand verletzt, sag uns sofort Bescheid, damit wir helfen können.',
          en: 'If someone gets injured, let us know immediately so we can help.',
        },
      },
    ],
  },
  {
    id: 'training',
    category: { de: 'Training', en: 'Training' },
    items: [
      {
        title: {
          de: 'Passe die Intensität an',
          en: 'Match the intensity',
        },
        text: {
          de: 'Nicht jede Runde ist eine Wettkampfrunde. Passe dich an Können, Größe, Alter und Energie deines Partners an.',
          en: 'Not every round is a competition round. Adjust to your partner’s skill, size, age and energy.',
        },
      },
      {
        title: {
          de: 'Du darfst jeden ablehnen',
          en: 'You can turn anyone down',
        },
        text: {
          de: 'Du musst mit niemandem rollen, mit dem du nicht willst – aus welchem Grund auch immer.',
          en: 'You don’t have to roll with anyone you don’t want to – for any reason.',
        },
      },
      {
        title: {
          de: 'Stell Fragen',
          en: 'Ask questions',
        },
        text: {
          de: 'Vor, während und nach dem Training. Wir sind alle hier, um zu lernen – es gibt keine dummen Fragen.',
          en: 'Before, during and after training. We’re all here to learn – there are no stupid questions.',
        },
      },
      {
        title: {
          de: 'Cross-Training ist willkommen',
          en: 'Cross-training is welcome',
        },
        text: {
          de: 'Wir freuen uns, wenn du andere Gyms besuchst – und wir haben auch gerne Gäste auf unserer Matte.',
          en: 'We’re happy when you visit other gyms – and we love having guests on our mat too.',
        },
      },
      {
        title: {
          de: 'Hab Spaß!',
          en: 'Have fun!',
        },
        text: {
          de: 'Für die meisten von uns ist Jiu-Jitsu ein Hobby. Strebe danach, dich zu verbessern, aber hab dabei immer Spaß.',
          en: 'For most of us, Jiu-Jitsu is a hobby. Strive to improve, but always have fun doing it.',
        },
      },
    ],
  },
  {
    id: 'misc',
    category: { de: 'Sonstiges', en: 'Miscellaneous' },
    items: [
      {
        title: {
          de: 'Sei pünktlich',
          en: 'Be on time',
        },
        text: {
          de: 'Komm rechtzeitig vor Trainingsbeginn. Wenn du zu spät bist, steig ruhig und respektvoll ins laufende Training ein.',
          en: 'Arrive in good time before training starts. If you’re late, join the ongoing session calmly and respectfully.',
        },
      },
      {
        title: {
          de: 'Gib uns Feedback',
          en: 'Give us feedback',
        },
        text: {
          de: 'Unsere Mitglieder stehen an erster Stelle. Wir freuen uns immer über dein Feedback.',
          en: 'Our members matter most. We always welcome your feedback.',
        },
      },
    ],
  },
];
