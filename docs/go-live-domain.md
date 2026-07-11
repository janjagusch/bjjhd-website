# Go-Live unter `bjjheidelberg.de` – Schritte außerhalb des Codes

Dieses Dokument beschreibt die manuellen Schritte, die **zusätzlich** zu den
Code-Änderungen in diesem PR nötig sind, um die Website unter der eigenen Domain
`bjjheidelberg.de` (Apex/Root-Domain als primäre Adresse) zu veröffentlichen.

Die Seite wird über **GitHub Pages** ausgeliefert (Workflow
`.github/workflows/deploy.yml`).

---

## Was der Code bereits erledigt

- `astro.config.mjs`: `site` steht auf `https://bjjheidelberg.de`, `base` wurde
  entfernt (keine `/bjjhd-website`-Präfixe mehr in Links, Assets und Sitemap).
- `public/CNAME` enthält `bjjheidelberg.de` und landet beim Build in `dist/`.

---

## 1. DNS beim Domain-Registrar prüfen/bereinigen

Zugriff auf die DNS-Verwaltung des Registrars, bei dem `bjjheidelberg.de`
registriert ist, wird benötigt.

**Stand: DNS ist bereits weitgehend korrekt eingerichtet.** Es fehlt nur eine
Bereinigung (siehe unten).

### Apex-Domain (primär): A-Records

Diese vier GitHub-Pages-Records sind bereits gesetzt (behalten):

```
A   @   185.199.108.153
A   @   185.199.109.153
A   @   185.199.110.153
A   @   185.199.111.153
```

> ⚠️ **Zu entfernen:** Es existiert ein zusätzlicher, fremder A-Record
> `85.13.154.7` (kein GitHub-Server, vermutlich alter/geparkter Host). Dieser
> **muss gelöscht werden** – sonst landet ein Teil der Anfragen auf dem falschen
> Server und die Zertifikatsausstellung von GitHub kann fehlschlagen.

IPv6 (AAAA-Records) – bereits vollständig gesetzt (behalten):

```
AAAA   @   2606:50c0:8000::153
AAAA   @   2606:50c0:8001::153
AAAA   @   2606:50c0:8002::153
AAAA   @   2606:50c0:8003::153
```

### `www`-Subdomain → Weiterleitung auf Apex

Bereits gesetzt (behalten):

```
CNAME   www   janjagusch.github.io.
```

GitHub Pages leitet `www.bjjheidelberg.de` dann automatisch auf
`bjjheidelberg.de` weiter.

> Hinweis: Aktuelle GitHub-Pages-IP-Adressen ggf. in der
> [GitHub-Dokumentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
> gegenprüfen.

---

## 2. GitHub-Repository-Einstellungen

Unter **Settings → Pages**:

1. **Source**: „GitHub Actions“ (sollte bereits gesetzt sein).
2. **Custom domain**: `bjjheidelberg.de` eintragen und speichern.
   GitHub prüft dann die DNS-Konfiguration.
3. Nach erfolgreicher Zertifikatsausstellung **„Enforce HTTPS“** aktivieren.

---

## 3. Deployment & Prüfung

1. Diesen PR nach `main` mergen → der Deploy-Workflow baut und veröffentlicht
   automatisch.
2. DNS-Propagation abwarten (Minuten bis wenige Stunden).
3. Aufrufen und prüfen:
   - `https://bjjheidelberg.de` lädt korrekt.
   - `https://www.bjjheidelberg.de` leitet auf die Apex-Domain weiter.
   - Kein Rückverweis mehr auf `janjagusch.github.io/bjjhd-website`.
   - HTTPS ist aktiv (Schlosssymbol, gültiges Zertifikat).

---

## Checkliste

- [x] DNS: 4 A-Records (Apex) gesetzt
- [x] DNS: 4 AAAA-Records gesetzt
- [x] DNS: CNAME `www` → `janjagusch.github.io.`
- [ ] DNS: fremden A-Record `85.13.154.7` entfernt
- [ ] GitHub Pages: Custom Domain `bjjheidelberg.de` eingetragen
- [ ] GitHub Pages: „Enforce HTTPS“ aktiviert
- [ ] PR nach `main` gemergt, Deploy-Workflow erfolgreich
- [ ] Live-Prüfung Apex, www-Redirect und HTTPS bestanden
