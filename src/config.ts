/**
 * Central site configuration.
 *
 * ▸ Edit the values below to customise the website.
 *   Almost all text, contact details, links, coaches, training times and
 *   prices live here so you rarely have to touch the components.
 */

export interface NavLink {
  label: string;
  href: string;
}

export interface TrainingSlot {
  day: string;
  time: string;
  title: string;
  level: string;
  room: string;
  /** Optional Google Maps link for the room/building. */
  roomUrl?: string;
}

export interface Coach {
  name: string;
  role: string;
  belt: string;
  bio?: string;
  /** Path relative to /public, e.g. "/images/coach-1.svg" */
  photo: string;
  /** Alt text describing the photo for screen readers. */
  photoAlt: string;
}

export interface PriceItem {
  name: string;
  price: string;
  note?: string;
}

// === Club / brand =========================================================
export const club = {
  name: 'BJJ Heidelberg',
  shortName: 'BJJ/HD',
  tagline: 'Brazilian Jiu-Jitsu in Heidelberg',
  // Logo lives in /public. Replace with your own file.
  logo: '/images/logo.svg',
  logoAlt: 'Logo BJJ/HD',
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
  phone: '+49 6221 0000000',
  // Plain digits for tel: links.
  phoneTel: '+4962210000000',
  // Trainingsort (kann von der Vereinsanschrift abweichen) – Abschnitt "Ort"
  venue: 'TSG 78 Heidelberg',
  venueStreet: 'Tiergartenstraße 9–11',
  venueZip: '69120',
  venueCity: 'Heidelberg',
  // Optional Google Maps link (opens externally, no embed/tracking).
  mapsUrl:
    'https://maps.google.com/?q=Tiergartenstra%C3%9Fe+9-11+69120+Heidelberg',
};

// === Navigation ===========================================================
export const nav: NavLink[] = [
  { label: 'About', href: '/about' },
  { label: 'Training', href: '/#training' },
  { label: 'Location', href: '/#location' },
  { label: 'Prices', href: '/#prices' },
  { label: 'Rules', href: '/rules' },
];

// === About / Club =========================================================
export const about = {
  founded: '2026',
  paragraphs: [
    'BJJ Heidelberg was founded in 2026. Our goal is to teach you solid Brazilian Jiu-Jitsu in an atmosphere where complete beginners and experienced martial artists feel equally welcome.',
    'We are a community-driven club. Clean Jiu-Jitsu, mutual respect and having fun on the mat come first – not the ego.',
  ],
};

// === Head coach ===========================================================
export const headCoach = {
  name: 'Ben',
  role: 'Head Coach',
  belt: 'Black Belt',
  photo: '/images/coach-1.svg', // TODO: add a real photo under /public/images
  photoAlt: 'Portrait photo of head coach Ben',
  paragraphs: [
    'Ben has been training Brazilian Jiu-Jitsu for over 14 years. He received his black belt in 2023.',
  ],
};

// === Training schedule ====================================================
export const trainingSchedule: TrainingSlot[] = [
  {
    day: 'Friday',
    time: '18:30 – 20:30',
    title: 'BJJ Training',
    level: 'All levels',
    room: 'Gymnastikraum',
    roomUrl:
      'https://www.tsg78-hd.de/images/Abteilungen/Seniorensport/Anfahrt_Athleticon_GyR.png',
  },
  {
    day: 'Saturday',
    time: '11:00 – 13:00',
    title: 'Open Mat',
    level: 'All levels',
    room: 'Athleticon',
    roomUrl:
      'https://www.tsg78-hd.de/images/Abteilungen/Seniorensport/Anfahrt_Athleticon_GyR.png',
  },
];

// === Coaches ==============================================================
export const coaches: Coach[] = [
  {
    name: 'Bjarne',
    role: 'Coach',
    belt: 'Purple Belt (BJJ) · Brown Belt (Judo)',
    photo: '/images/coach-2.svg',
    photoAlt: 'Portrait photo of coach Bjarne',
  },
  {
    name: 'Jan',
    role: 'Coach',
    belt: 'Purple Belt',
    photo: '/images/coach-3.svg',
    photoAlt: 'Portrait photo of coach Jan',
  },
];

// === Pricing ==============================================================
export const pricing: PriceItem[] = [
  { name: 'Adults', price: '€50 / month' },
  { name: 'Youth', price: '€40 / month', note: 'Under 18 years' },
  { name: 'Students', price: '€40 / month', note: 'With valid proof' },
];

// === Campai application form ==============================================
export const campai = {
  iframeSrc:
    'https://app.campai.com/em/a3f04/applications/6a3149bfd9ff99f706bccaa2',
  scriptSrc: 'https://app.campai.com/scripts/embeddable.js',
};

// === Guidelines / Trainingsregeln =========================================
export interface GuidelineItem {
  title: string;
  text: string;
}

export interface GuidelineGroup {
  category: string;
  items: GuidelineItem[];
}

export const guidelines: GuidelineGroup[] = [
  {
    category: 'Hygiene',
    items: [
      {
        title: 'Stay home if you are sick',
        text: 'If you notice any signs of a cold or illness, please stay home so you don’t infect your training partners.',
      },
      {
        title: 'No shoes on the mat',
        text: 'To keep dirt and bacteria off the mat, take your shoes off before stepping onto it.',
      },
      {
        title: 'Don’t walk barefoot off the mat',
        text: 'Especially not to the bathroom! Use slippers whenever you leave the mat.',
      },
      {
        title: 'Wash your gear',
        text: 'Wash your Gi and clothing after every session – including your belt.',
      },
      {
        title: 'Keep your nails short',
        text: 'Long finger- and toenails are an injury risk for your partners. Please trim them before training.',
      },
      {
        title: 'Remove jewellery and piercings',
        text: 'They can get caught and injure you or others.',
      },
      {
        title: 'Use deodorant',
        text: 'No one likes training with an unpleasant-smelling partner. Please use deodorant before class.',
      },
      {
        title: 'No training with open wounds',
        text: 'If you have open wounds or skin rashes, please sit out to avoid spreading anything.',
      },
    ],
  },
  {
    category: 'Safety',
    items: [
      {
        title: 'Don’t injure your partners',
        text: 'The safety of you and your training partners comes above everything else.',
      },
      {
        title: 'Some techniques are not allowed',
        text: 'For safety reasons we avoid certain techniques, e.g. slams, jumping guard, scissor takedowns, neck cranks and heel hooks in the Gi.',
      },
      {
        title: 'Communicate with your partner',
        text: 'Flow rolling or a competition round? Leg locks allowed or not? Agree on it beforehand.',
      },
      {
        title: 'Start seated when the mat is full',
        text: 'When it gets crowded, skip takedowns to avoid stepping on each other.',
      },
      {
        title: 'Watch your surroundings',
        text: 'On a full mat, keep an eye on each other to avoid collisions.',
      },
      {
        title: 'Mind size differences',
        text: 'When rolling with smaller partners, use technique instead of strength and control your weight.',
      },
      {
        title: 'Apply submissions under control',
        text: 'Training is not competition. Apply submissions slowly and give your partner time to tap.',
      },
      {
        title: 'Tap early and any time',
        text: 'If you’re caught in a submission, tap. Your health is more important than your ego.',
      },
      {
        title: 'Sit out a round if needed',
        text: 'Need a break? No problem – feel free to sit out a round.',
      },
      {
        title: 'Report injuries',
        text: 'If someone gets injured, let us know immediately so we can help.',
      },
    ],
  },
  {
    category: 'Training',
    items: [
      {
        title: 'Match the intensity',
        text: 'Not every round is a competition round. Adjust to your partner’s skill, size, age and energy.',
      },
      {
        title: 'You can turn anyone down',
        text: 'You don’t have to roll with anyone you don’t want to – for any reason.',
      },
      {
        title: 'Ask questions',
        text: 'Before, during and after training. We’re all here to learn – there are no stupid questions.',
      },
      {
        title: 'Cross-training is welcome',
        text: 'We’re happy when you visit other gyms – and we love having guests on our mat too.',
      },
      {
        title: 'Have fun!',
        text: 'For most of us, Jiu-Jitsu is a hobby. Strive to improve, but always have fun doing it.',
      },
    ],
  },
  {
    category: 'Miscellaneous',
    items: [
      {
        title: 'Be on time',
        text: 'Arrive in good time before training starts. If you’re late, join the ongoing session calmly and respectfully.',
      },
      {
        title: 'Give us feedback',
        text: 'Our members matter most. We always welcome your feedback.',
      },
    ],
  },
];
