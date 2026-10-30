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
  /** Optional note shown alongside the slot (e.g. "Starts in September"). */
  note?: Localized;
  room: string;
  /** Optional external link for the room. Leave empty to link to our own
   *  aerial map in the "location" section, which is usually what you want. */
  roomUrl?: string;
}

export interface VenueBuilding {
  /** Must match a TrainingSlot.room so the training days can be derived.
   *  Use a free-form key (e.g. 'Umkleiden') for rooms without training. */
  room: string;
  /** Label shown on the map marker. */
  label: Localized;
  /** Position of the PIN CENTRE in percent of the map image (0 = left/top).
   *  The label box grows from the pin towards `side`, so its width does not
   *  influence where the pin lands. */
  x: number;
  y: number;
  /** Side the label box sits on. Default: 'right'. */
  side?: 'left' | 'right';
  /** 'warm' (default) highlights training rooms, 'dark' marks facilities. */
  tone?: 'warm' | 'dark';
}

export interface Coach {
  name: string;
  role: Localized;
  belt: Localized;
  bio?: Localized;
  /** Quippy one-liner shown under the belt. */
  tagline?: Localized;
  /** Path relative to /public, e.g. "/images/coach-1.svg" */
  photo: string;
  /** Optional action shot (square) shown on hover, e.g. "/images/coaches/bjarne-action.jpg" */
  photoHover?: string;
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
  legalEntity: 'BJJ Heidelberg e.V. i.Gr.', // e.V. i.Gr. = eingetragener Verein in Gründung. Eigenständiger Verein, nicht Teil der TSG.
  // Vertretungsberechtigte:r (Vorstand) – fürs Impressum
  representative: 'Jan-Benedikt Jagusch',
  // Vereinssitz / eingetragene Anschrift – Impressum, Datenschutz, Footer
  street: 'Schröderstraße 21',
  zip: '69120',
  city: 'Heidelberg',
  country: 'Deutschland',
  email: 'info@bjj-heidelberg.org',
  // Trainingsort (kann von der Vereinsanschrift abweichen) – Abschnitt "Ort"
  venue: 'TSG 78 Heidelberg',
  venueStreet: 'Tiergartenstraße 9–11',
  venueZip: '69120',
  venueCity: 'Heidelberg',
  // Optional Google Maps link (opens externally, no embed/tracking).
  mapsUrl:
    'https://maps.google.com/?q=Tiergartenstra%C3%9Fe+9-11+69120+Heidelberg',
};

// === Social media ========================================================
// Plain links only – no embeds, no widgets, no tracking pixels. Leave a value
// empty (or remove the key) to hide the link.
export const social = {
  instagram: 'https://www.instagram.com/bjj.heidelberg/',
  /** Handle shown as the link label. */
  instagramHandle: '@bjj.heidelberg',
};

// === Venue map ============================================================
// Self-hosted aerial photo of the TSG campus with markers for the buildings we
// train in. No third-party map embed → no cookies, no consent banner.
//
// Image source: LGL Baden-Württemberg, digital orthophoto (DOP20), open data.
// Reproduce / re-fetch the exact same frame with:
//   https://owsproxy.lgl-bw.de/owsproxy/ows/WMS_LGL-BW_ATKIS_DOP_20_C
//     ?SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=IMAGES_DOP_20_RGB
//     &CRS=EPSG:4326&BBOX=49.416625,8.6564,49.418875,8.6615
//     &WIDTH=3694&HEIGHT=2488&FORMAT=image/png
// The BBOX covers ~369 x 249 m; WIDTH/HEIGHT match that ratio so the image is
// not distorted. Marker coordinates below are percentages of this BBOX, so they
// stay correct if you re-request the image at another resolution.
export const venueMap = {
  /** Alt text for the aerial photo. */
  alt: {
    de: 'Luftbild des TSG-Areals an der Tiergartenstraße mit markierten Trainingsgebäuden Athleticon und Gymnastikraum, den Umkleiden sowie Haupteingang und Eingang zum Athleticon',
    en: 'Aerial photo of the TSG grounds on Tiergartenstraße with the training buildings Athleticon and Gymnastikraum, the changing rooms and the main and Athleticon entrances marked',
  } satisfies Localized,
  /** Attribution shown below the image.
   *  Wording is prescribed by the WMS AccessConstraints of the data source:
   *  "Als Rechteinhaber und Bereitsteller ist die Datenhaltende Stelle, sowie
   *  das Jahr des Datenbezugs in Klammern anzugeben. Beispiel für
   *  Quellenvermerk: LGL-BW (2024) Datenlizenz Deutschland - Namensnennung -
   *  Version 2.0, www.lgl-bw.de"
   *  → Keep the format and update the year if you re-fetch the image. */
  attribution: {
    de: 'Luftbild: LGL-BW (2026) Datenlizenz Deutschland - Namensnennung - Version 2.0, www.lgl-bw.de',
    en: 'Aerial image: LGL-BW (2026) Datenlizenz Deutschland - Namensnennung - Version 2.0, www.lgl-bw.de',
  } satisfies Localized,
  /** Link target for the licence name in the attribution line. */
  licenceUrl: 'https://www.govdata.de/dl-de/by-2-0',
  buildings: [
    {
      room: 'Athleticon',
      label: { de: 'Athleticon', en: 'Athleticon' },
      x: 17.5,
      y: 43.0,
      side: 'right',
    },
    {
      room: 'Gymnastikraum',
      label: { de: 'Gymnastikraum', en: 'Gymnastikraum' },
      x: 41.2,
      y: 60.5,
      side: 'right',
    },
    {
      // No matching trainingSchedule entry → shown without weekdays.
      room: 'Umkleiden',
      label: { de: 'Umkleiden', en: 'Changing rooms' },
      x: 30.0,
      y: 39.0,
      side: 'right',
      tone: 'dark',
    },
    {
      room: 'Eingang Athleticon',
      label: { de: 'Eingang Athleticon', en: 'Athleticon entrance' },
      x: 19.3,
      y: 51.5,
      side: 'right',
      tone: 'dark',
    },
    {
      room: 'Haupteingang',
      label: { de: 'Haupteingang', en: 'Main entrance' },
      x: 81.8,
      y: 43.0,
      side: 'left',
      tone: 'dark',
    },
  ] satisfies VenueBuilding[],
};

// === About / Club =========================================================
export const about = {
  founded: '2026',
  photo: '/images/about-group.jpg',
  photoAlt: {
    de: 'Gruppenfoto der Mitglieder von BJJ Heidelberg nach dem Training',
    en: 'Group photo of BJJ Heidelberg members after training',
  } satisfies Localized,
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
  photo: '/images/coaches/ben.jpg',
  photoAlt: {
    de: 'Porträtfoto von Cheftrainer Ben',
    en: 'Portrait photo of head coach Ben',
  } satisfies Localized,
  paragraphs: [
    {
      de: 'Bens BJJ-Reise startete 2011 in Hannover unter Douglas Mayer, nachdem er zwei Jahre lang Ju-Jutsu als Einstiegsdroge ausprobiert hatte. In den Jahren darauf führte ihn das Leben nach Heidelberg, wo er im AC Ziegelhausen gemeinsam mit Mitstreitern eine BJJ-Sparte ins Leben rief. Die ersten sieben Jahre fand er sich häufig auf Wettkämpfen im In- und Ausland wieder. 2019 wechselte er nach Handschuhsheim, wo er im Trainer-Duo die sportliche und strukturelle Leitung der BJJ-Sparte übernahm. 2023 verliehen ihm Tomi Kareela und Tuomas Ylinampa den Schwarzgurt. Seit 2026 gehört er zur sportlichen Leitung des BJJ Heidelberg e.V.',
      en: "Ben's BJJ journey started in 2011 in Hannover under Douglas Mayer, after two years of trying out Ju-Jutsu as a gateway drug. In the years that followed, life brought him to Heidelberg, where he and a few fellow enthusiasts founded a BJJ department at AC Ziegelhausen. For the first seven years, he regularly found himself at competitions in Germany and abroad. In 2019 he moved on to Handschuhsheim, where he took over the athletic and organizational leadership of the BJJ department in a coaching duo. In 2023, Tomi Kareela and Tuomas Ylinampa awarded him his black belt. Since 2026, he has been part of the athletic leadership of BJJ Heidelberg e.V.",
    },
    {
      de: 'Bens Jiu-Jitsu ist von grundlegenden Basiselementen geprägt. Genau wie sein metallischer Musikgeschmack: simpel und intensiv. Er glaubt fest an stabile Fundamente und ein druckorientiertes Spiel. Er glaubt auch an eine offene Betrachtung des Sports und eine ebenso offene Lebenseinstellung. Training sollte immer fordernd sein, im besten Fall körperlich und kognitiv. In seinem Training soll es stets um die Sache Jiu-Jitsu gehen, um die innere und körperliche Auseinandersetzung und um das aktive Machen.',
      en: "Ben's Jiu-Jitsu is shaped by fundamental basics, just like his taste in metal: simple and intense. He firmly believes in solid foundations and a pressure-oriented game. He also believes in an open view of the sport and an equally open attitude to life. Training should always be demanding, ideally both physically and cognitively. In his classes, it is always about the thing itself, Jiu-Jitsu: the inner and physical confrontation, and actively doing.",
    },
    {
      de: 'Spread the love.',
      en: 'Spread the love.',
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
    day: 'Thursday',
    time: '18:00 – 19:30',
    title: { de: 'BJJ-Training', en: 'BJJ Training' },
    room: 'Athleticon',
  },
  {
    day: 'Friday',
    time: '18:30 – 20:00',
    title: { de: 'BJJ-Training', en: 'BJJ Training' },
    room: 'Gymnastikraum',
  },
  {
    day: 'Saturday',
    time: '11:00 – 12:30',
    title: { de: 'Open Mat', en: 'Open Mat' },
    room: 'Athleticon',
  },
];

// === Coaches ==============================================================
export const coaches: Coach[] = [
  {
    name: 'Bjarne',
    role: { de: 'Trainer', en: 'Coach' },
    belt: { de: 'Lila Gurt', en: 'Purple Belt' },
    tagline: {
      de: 'Judo-Braungurt. Du lernst die Hallendecke gleich aus nächster Nähe kennen.',
      en: 'Judo brown belt. Will have you staring at the ceiling before you finish saying hello.',
    },
    photo: '/images/coaches/bjarne.jpg',
    photoHover: '/images/coaches/bjarne-action.jpg',
    photoAlt: {
      de: 'Porträtfoto von Trainer Bjarne',
      en: 'Portrait photo of coach Bjarne',
    },
  },
  {
    name: 'Jan',
    role: { de: 'Trainer', en: 'Coach' },
    belt: { de: 'Lila Gurt', en: 'Purple Belt' },
    tagline: {
      de: 'Sieht steif aus, ist es nicht. Holt sich deinen Rücken und entschuldigt sich danach.',
      en: 'Looks stiff, isn’t. Will take your back and apologise afterwards.',
    },
    photo: '/images/coaches/jan.jpg',
    photoHover: '/images/coaches/jan-action.jpg',
    photoAlt: {
      de: 'Porträtfoto von Trainer Jan',
      en: 'Portrait photo of coach Jan',
    },
  },
  {
    name: 'Katja',
    role: { de: 'Trainerin', en: 'Coach' },
    belt: { de: 'Blauer Gurt', en: 'Blue Belt' },
    tagline: {
      de: 'Ihre Guard zu passieren ist ein Langzeitprojekt. Proviant nicht vergessen.',
      en: 'Passing her guard is a long-term project. Bring snacks.',
    },
    photo: '/images/coaches/katja.jpg',
    photoAlt: {
      de: 'Porträtfoto von Trainerin Katja',
      en: 'Portrait photo of coach Katja',
    },
  },
];

// === Pricing ==============================================================
// `price` carries only the amount; the "/ month" suffix is localized in the UI.
export const pricing: PriceItem[] = [
  { name: { de: 'Erwachsene', en: 'Adults' }, price: '€35' },
  {
    name: { de: 'Jugendliche', en: 'Youth' },
    price: '€25',
    note: { de: 'Unter 18 Jahren', en: 'Under 18 years' },
  },
  {
    name: { de: 'Studierende', en: 'Students' },
    price: '€25',
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
  // Registration form for the beginners course (signup only, no payment).
  beginnersCourseSrc:
    'https://app.campai.com/em/a3f04/applications/6abf8fe5f4fcc9b0e43d9ddd',
  // Ticket checkout for the beginners course, session 2 (payment, sent to people who signed up). Bookable until 2026-11-05 18:00 Berlin time.
  beginnersTicketSrc:
    'https://app.campai.com/em/a3f04/events/6ab2660b1bdd63520e9d176f',
  // Ticket checkout for instructed classes (non-members, after the trial).
  ticketsSrc:
    'https://app.campai.com/em/a3f04/events/6ab695e169253fe02a1d7677/checkout',
};

// === Beginners course / Anfängerkurs =====================================
// Standalone 8-week intro course, advertised on /beginners.
export const beginnersCourse = {
  classes: 8,
  weekday: { de: 'Donnerstag', en: 'Thursday' } satisfies Localized,
  time: '18:00',
  startDate: { de: '22. Oktober 2026', en: '22 October 2026' } satisfies Localized,
  /** Second session: payment is due by this day. */
  secondClassDate: { de: '29. Oktober 2026', en: '29 October 2026' } satisfies Localized,
  endDate: { de: '10. Dezember 2026', en: '10 December 2026' } satisfies Localized,
  /** Fee for the rest of the course, due only if you continue after the
   *  free first session. */
  price: '60 €',
  room: 'Athleticon',
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
