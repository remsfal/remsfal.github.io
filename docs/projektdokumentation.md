---
title: Projektdokumentation
description: Übersicht zur Architektur, Einrichtung und Entwicklung des remsfal.de Projekts
---

# Projektdokumentation

## Einleitung

Dieses Projekt stellt die Codebasis der Website **[remsfal.de](https://remsfal.de)** dar.  
Es wurde mit [Vue 3](https://vuejs.org/), [Vite](https://vitejs.dev/), [TypeScript](https://www.typescriptlang.org/), [PrimeVue](https://primevue.org/) und [Tailwind CSS](https://tailwindcss.com/) umgesetzt.  
Ziel ist es, eine modulare, wartbare und responsive Webanwendung zu entwickeln.

Diese Dokumentation hilft dir, die Struktur des Projekts zu verstehen und es lokal zu starten oder weiterzuentwickeln.

## Projekt starten

### Voraussetzungen

- Node.js 18+
- Paketmanager: `npm` (alternativ `pnpm` oder `yarn`)

### Installation

```bash
npm ci
```

### Lokale Entwicklungsumgebung starten
```bash 
npm run dev
```

### Produktion kompilieren
```bash
npm run build
```

### Tests und Linting
Unit Tests mit [Vitest](https://vitest.dev/)
```bash
npm run test:unit
```
Linting mit [ESLint](https://eslint.org/)
```bash
npm run lint
```

## Projektstruktur

```txt
├── src/
│   ├── assets/            → Layout- und Style-Dateien
│   ├── components/        → Wiederverwendbare UI-Komponenten (Header, Footer etc.)
│   ├── router/            → Seitenrouting (vue-router)
│   ├── services/          → Hilfsfunktionen (z. B. GitHubService.ts)
│   ├── views/             → Einzelseiten (z. B. DocumentationView.vue)
│   └── App.vue            → Einstiegspunkt mit globalem Layout
├── tests/                 → Vitest-Komponententests + Snapshots
├── vite.config.ts         → Vite-Konfiguration
├── tailwind.config.cjs    → Tailwind-Konfiguration
└── tsconfig.*.json        → TypeScript-Konfigurationen
```

## Wichtige Technologien

- **Vue 3 mit Composition API**  
  Moderne Komponentenstruktur mit `<script setup>` Syntax

- **Vite**  
  Schneller Dev-Server und Bundler

- **Tailwind CSS**  
  Utility-first CSS-Framework für das Layout

- **PrimeVue**  
  UI-Komponenten (z. B. Buttons, Dialoge)

- **Vitest**  
  Test-Framework für Unit-Tests

- **TypeScript**  
  Typsicherheit im gesamten Projekt

## Für neue Entwickler:innen

Wenn du neu im Projekt bist, solltest du dich zuerst mit folgenden Themen vertraut machen:

- **Vue 3 Single File Components (SFCs)**  
  Aufbau einer Komponente mit Template, `<script setup>` und scoped Styles

- **Routing mit vue-router**  
  Die Seitenstruktur wird über die Datei `src/router/index.ts` definiert

- **Tailwind & PrimeVue**  
  Tailwind wird für das Layout und Styling verwendet, PrimeVue liefert interaktive UI-Komponenten

- **Services (API)**  
  Beispiel: `GitHubService.ts` zeigt, wie `fetch`-Anfragen an externe APIs gestellt werden

- **Testing mit Vitest**  
  In `tests/EducationalSection.spec.ts` siehst du, wie Komponenten gemountet und getestet werden
