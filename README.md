# BJJ Heidelberg – Website

Statische Website für einen Brazilian-Jiu-Jitsu-Verein, gebaut mit
[Astro](https://astro.build/). Dunkles, modernes Design, responsiv,
datenschutzfreundlich und ohne Backend. Deployment über GitHub Pages.

---

## Voraussetzungen

Node.js ≥ 20. Das Repo nutzt **pixi** für die Umgebungsverwaltung, npm
funktioniert aber genauso.

## Lokale Entwicklung

Mit pixi:

```bash
pixi run install   # Abhängigkeiten installieren
pixi run dev       # Entwicklungsserver (http://localhost:4321)
pixi run build     # Produktions-Build nach ./dist
pixi run preview   # Build lokal ansehen
```

Oder direkt mit npm:

```bash
npm install
npm run dev
npm run build
npm run preview
```

---

## Inhalte pflegen

Fast alle Texte, Kontaktdaten, Links, Trainerprofile, Trainingszeiten und Preise
liegen zentral in **`src/config.ts`**. In der Regel reicht es, diese eine Datei
zu bearbeiten.

### Vereinsname, Logo, Slogan
`club` in `src/config.ts` anpassen (`name`, `shortName`, `tagline`, `logo`).

### Adresse, E-Mail, Telefon
`contact` in `src/config.ts` anpassen. Diese Werte werden im Footer, im
Kontaktbereich, im Impressum und in der Datenschutzerklärung verwendet.

### Social-Media-Links
`social` in `src/config.ts` (Instagram, Facebook). Es werden nur normale Links
gesetzt – keine Tracking-Widgets.

### Trainingszeiten aktualisieren
Array `trainingSchedule` in `src/config.ts` bearbeiten. Jeder Eintrag hat
`day`, `time`, `title` und `level`. Zeilen einfach hinzufügen oder entfernen.

### Trainer
Array `coaches` in `src/config.ts` bearbeiten (`name`, `role`, `belt`, `bio`,
`photo`, `photoAlt`).

### Preise
Array `pricing` in `src/config.ts` bearbeiten.

### FAQ
Array `faq` in `src/config.ts` bearbeiten.

---

## Bilder ersetzen

Bilder liegen in **`public/images/`**. Beim Ersetzen den gleichen Dateinamen
verwenden (oder den Pfad in `src/config.ts` anpassen):

- `logo.svg` – Vereinslogo
- `coach-1.svg`, `coach-2.svg`, `coach-3.svg` – Trainerfotos (Platzhalter)

Echte Fotos sollten möglichst quadratisch (z. B. 640×640 px) und web-optimiert
sein (JPG/PNG/WebP). Beispiel: Datei `coach-1.jpg` ablegen und in `src/config.ts`
`photo: '/images/coach-1.jpg'` setzen. Bilder werden automatisch lazy geladen –
bitte immer einen aussagekräftigen `photoAlt`-Text vergeben.

`public/favicon.svg` ist das Browser-Icon.

---

## Impressum & Datenschutz bearbeiten

- Impressum: `src/pages/impressum.astro`
- Datenschutz: `src/pages/datenschutz.astro`

Beide Seiten sind **Vorlagen** mit Platzhaltern in der Form `[…]`. Stammdaten
(Adresse, E-Mail, Telefon) kommen aus `src/config.ts`; rechtliche Details müssen
direkt in den Seiten ergänzt werden.

> ⚠️ **Wichtig:** Die Rechtstexte sind nur Vorlagen und ersetzen keine
> Rechtsberatung. Bitte vor Veröffentlichung vollständig prüfen, alle
> `[…]`-Platzhalter ausfüllen und – insbesondere den Campai-Abschnitt – rechtlich
> abnehmen lassen.

---

## Datenschutzfreundliche Voreinstellungen

- Kein Google Analytics, keine Tracking-Pixel, keine Tracking-Cookies
- Keine eingebetteten Social-Media-Widgets (nur Links)
- Keine Google Fonts von Google-Servern (System-Schriftarten)
- Keine direkt eingebettete Google-Maps-Karte (nur externer Link)
- Externe Links öffnen mit `rel="noopener noreferrer"`

Das eingebettete Campai-Anmeldeformular lädt Inhalte von `app.campai.com`.
Entsprechender Hinweis steht in der Datenschutzerklärung (Abschnitt prüfen).

---

## Deployment auf GitHub Pages

Ein Workflow unter `.github/workflows/deploy.yml` baut und deployt die Seite bei
jedem Push auf `main` automatisch.

Einmalige Einrichtung:

1. Repository auf GitHub anlegen und Code pushen.
2. In den Repo-Einstellungen: **Settings → Pages → Build and deployment →
   Source: „GitHub Actions“** auswählen.
3. In `astro.config.mjs` die `site`-URL setzen:
   - **Eigene Domain** (empfohlen): `site` auf deine Domain setzen und die Datei
     `public/CNAME` mit dieser Domain pflegen.
   - **Projektseite** (`https://<user>.github.io/<repo>`): zusätzlich
     `base: '/<repo>'` setzen.
4. Push auf `main` → der Workflow baut und veröffentlicht automatisch.

Die Datei `public/.nojekyll` verhindert die Jekyll-Verarbeitung durch GitHub
Pages.

---

## Projektstruktur

```
src/
  config.ts              # zentrale Inhalte (hier zuerst editieren)
  layouts/BaseLayout.astro
  components/            # Header, Footer, Hero, TrainingSchedule, CoachCard, Faq, CampaiSignup
  pages/                 # index, impressum, datenschutz
  styles/global.css      # Design-Tokens (Farben, Abstände, Fonts, Radius)
public/
  images/                # Logo & Fotos
  favicon.svg, CNAME, .nojekyll
```

Farben, Abstände, Schriftarten und Eckenradien sind als CSS-Variablen in
`src/styles/global.css` definiert. Die Akzentfarbe lässt sich über
`--color-accent` an einer Stelle ändern.
