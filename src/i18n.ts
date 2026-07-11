/**
 * Internationalisation layer.
 *
 * German is the default language and is served at the site root (/, /ueber-uns
 * …). English lives under /en. This file holds:
 *   - the locale definitions
 *   - the route map (route key → path per locale) used for nav + hreflang
 *   - all repeated UI strings (nav, buttons, headings, weekday labels …)
 *
 * Page-specific prose with inline links lives in the matching content
 * component, since it is easier to read with the markup next to it.
 */

export const locales = ['de', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'de';

/** A string that exists in every locale. */
export type Localized = Record<Locale, string>;

export function altLocale(lang: Locale): Locale {
  return lang === 'de' ? 'en' : 'de';
}

// === Route map ============================================================
// Paths are WITHOUT the deploy base path; wrap them in withBase() at use time.
export const routes = {
  home: { de: '/', en: '/en' },
  about: { de: '/ueber-uns', en: '/en/about' },
  beginners: { de: '/einsteiger', en: '/en/beginners' },
  rules: { de: '/regeln', en: '/en/rules' },
  signup: { de: '/mitglied-werden', en: '/en/signup' },
  confirmation: { de: '/danke', en: '/en/thank-you' },
} as const;

export type RouteKey = keyof typeof routes;

/** Build an anchor link on the home page for the given locale. */
export function homeAnchor(lang: Locale, id: string): string {
  const home = routes.home[lang];
  return home === '/' ? `/#${id}` : `${home}#${id}`;
}

// === UI strings ===========================================================
interface NavStrings {
  about: string;
  training: string;
  location: string;
  prices: string;
  rules: string;
  signup: string;
}

interface ScheduleStrings {
  caption: string;
  day: string;
  time: string;
  class: string;
  room: string;
}

interface UI {
  nav: NavStrings;
  ctaTrial: string;
  ctaMember: string;
  skip: string;
  mainNav: string;
  openMenu: string;
  closeMenu: string;
  homeAria: string;
  langSwitchLabel: string;
  langSwitchAria: string;
  // Home page
  trainingHeading: string;
  startPrefix: string;
  startDate: string;
  startSuffix: string;
  locationHeading: string;
  locationIntro: string;
  mapsLink: string;
  mapsAria: string;
  showerInfo: string;
  trialHeading: string;
  pricesHeading: string;
  priceSuffix: string;
  joinHeading: string;
  joinIntro: string;
  // Home "What is BJJ?" teaser
  whatHeading: string;
  whatLink: string;
  // About / Rules
  aboutHeading: string;
  teamHeading: string;
  rulesHeading: string;
  rulesIntro: string;
  signupHeading: string;
  // Confirmation page
  confirmationHeading: string;
  confirmationBody: string;
  confirmationBack: string;
  // Beginner's guide
  beginnersHeading: string;
  beginnersIntro: string;
  // Schedule
  schedule: ScheduleStrings;
  weekdays: Record<string, string>;
  // Footer
  footerContact: string;
  footerLegal: string;
  footerImpressum: string;
  footerDatenschutz: string;
  footerDocuments: string;
}

export const ui: Record<Locale, UI> = {
  de: {
    nav: {
      about: 'Über uns',
      training: 'Training',
      location: 'Ort',
      prices: 'Preise',
      rules: 'Regeln',
      signup: 'Mitglied werden',
    },
    ctaTrial: 'Probetraining buchen',
    ctaMember: 'Mitglied werden',
    skip: 'Zum Inhalt springen',
    mainNav: 'Hauptnavigation',
    openMenu: 'Menü öffnen',
    closeMenu: 'Menü schließen',
    homeAria: 'Startseite',
    langSwitchLabel: 'EN',
    langSwitchAria: 'Switch to English',
    trainingHeading: 'Training',
    startPrefix: 'Unser Training startet am ',
    startDate: '1. August',
    startSuffix: '.',
    locationHeading: 'Wo wir trainieren',
    locationIntro: 'Wir trainieren in den Räumen der TSG 78 Heidelberg.',
    mapsLink: 'Route auf Google Maps öffnen ↗',
    mapsAria: 'Route auf Google Maps öffnen (öffnet in einem neuen Tab)',
    showerInfo: 'Die Dusche kostet 50 Cent (Münzautomat).',
    trialHeading: 'Probetraining buchen',
    pricesHeading: 'Preise',
    priceSuffix: '/ Monat',
    joinHeading: 'Bereit beizutreten?',
    joinIntro:
      'Hat dir dein Probetraining gefallen und du möchtest regelmäßig mit uns trainieren? Werde Mitglied und tritt dem Verein bei.',
    whatHeading: 'Was ist Brazilian Jiu-Jitsu?',
    whatLink: 'Zum Einsteiger-Guide →',
    aboutHeading: 'Über uns',
    teamHeading: 'Team',
    rulesHeading: 'Regeln & Richtlinien',
    rulesIntro:
      'Diese Regeln halten unsere Matte sicher, fair und respektvoll für alle. Bitte lies sie – sie gelten für alle, egal ob Anfänger oder Fortgeschrittener.',
    signupHeading: 'Mitglied werden',
    confirmationHeading: 'Vielen Dank!',
    confirmationBody:
      'Wir haben deine Anmeldung erhalten und melden uns so bald wie möglich bei dir. Bitte prüfe auch deinen Spam-Ordner, falls du nichts von uns hörst.',
    confirmationBack: 'Zurück zur Startseite',
    beginnersHeading: 'Einsteiger-Guide',
    beginnersIntro:
      'Neu im Brazilian Jiu-Jitsu? Dieser Guide erklärt, was BJJ ist, wie es funktioniert und was du für dein erstes Training brauchst.',
    schedule: {
      caption: 'Wöchentliche Trainingszeiten',
      day: 'Tag',
      time: 'Zeit',
      class: 'Kurs',
      room: 'Raum',
    },
    weekdays: {
      monday: 'Montag',
      tuesday: 'Dienstag',
      wednesday: 'Mittwoch',
      thursday: 'Donnerstag',
      friday: 'Freitag',
      saturday: 'Samstag',
      sunday: 'Sonntag',
    },
    footerContact: 'Kontakt',
    footerLegal: 'Rechtliches',
    footerImpressum: 'Impressum',
    footerDatenschutz: 'Datenschutz',
    footerDocuments: 'Dokumente',
  },
  en: {
    nav: {
      about: 'About',
      training: 'Training',
      location: 'Location',
      prices: 'Prices',
      rules: 'Rules',
      signup: 'Sign up',
    },
    ctaTrial: 'Book free trial class',
    ctaMember: 'Become a member',
    skip: 'Skip to content',
    mainNav: 'Main navigation',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    homeAria: 'Home',
    langSwitchLabel: 'DE',
    langSwitchAria: 'Auf Deutsch wechseln',
    trainingHeading: 'Training',
    startPrefix: 'Our training starts on ',
    startDate: 'August 1st',
    startSuffix: '.',
    locationHeading: 'Where we train',
    locationIntro: 'We train in the facilities of TSG 78 Heidelberg.',
    mapsLink: 'Open route on Google Maps ↗',
    mapsAria: 'Open route on Google Maps (opens in a new tab)',
    showerInfo: 'Using the shower costs 50 cents (coin-operated).',
    trialHeading: 'Book a free trial class',
    pricesHeading: 'Prices',
    priceSuffix: '/ month',
    joinHeading: 'Ready to join?',
    joinIntro:
      'Loved your trial and want to train with us regularly? Become a member and join the club.',
    whatHeading: 'What is Brazilian Jiu-Jitsu?',
    whatLink: 'Read the beginner’s guide →',
    aboutHeading: 'About',
    teamHeading: 'Team',
    rulesHeading: 'Rules & Guidelines',
    rulesIntro:
      'These rules keep our mat safe, fair and respectful for everyone. Please read them – they apply to everybody, whether you’re a beginner or advanced.',
    signupHeading: 'Become a member',
    confirmationHeading: 'Thank you!',
    confirmationBody:
      'We’ve received your registration and will get back to you as soon as possible. Please also check your spam folder in case you don’t hear from us.',
    confirmationBack: 'Back to home',
    beginnersHeading: 'Beginner’s Guide',
    beginnersIntro:
      'New to Brazilian Jiu-Jitsu? This guide explains what BJJ is, how it works and what you need for your first session.',
    schedule: {
      caption: 'Weekly training times',
      day: 'Day',
      time: 'Time',
      class: 'Class',
      room: 'Room',
    },
    weekdays: {
      monday: 'Monday',
      tuesday: 'Tuesday',
      wednesday: 'Wednesday',
      thursday: 'Thursday',
      friday: 'Friday',
      saturday: 'Saturday',
      sunday: 'Sunday',
    },
    footerContact: 'Contact',
    footerLegal: 'Legal',
    footerImpressum: 'Impressum',
    footerDatenschutz: 'Privacy',
    footerDocuments: 'Documents',
  },
};

/** Header navigation items for a locale. */
export function getNav(lang: Locale) {
  return [
    { label: ui[lang].nav.about, href: routes.about[lang] },
    { label: ui[lang].nav.training, href: homeAnchor(lang, 'training') },
    { label: ui[lang].nav.location, href: homeAnchor(lang, 'location') },
    { label: ui[lang].nav.prices, href: homeAnchor(lang, 'prices') },
    { label: ui[lang].nav.rules, href: routes.rules[lang] },
    { label: ui[lang].nav.signup, href: routes.signup[lang] },
  ];
}
