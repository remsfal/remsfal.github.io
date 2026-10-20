<img src="https://remsfal.de/remsfal-logo.svg" alt="REMSFAL Logo" width="60%">

[![Website](https://img.shields.io/website?url=https%3A%2F%2Fremsfal.de&label=remsfal.de&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjU1LjQgOTkuOSAyMS40IDIyLjQiIGZpbGw9IiNmZmYiPjxnIHRyYW5zZm9ybT0ibWF0cml4KDEsMCwwLDEuMDIwMDUxNiwwLC0yLjAwNzAyNykiPjxwYXRoIGQ9Im0gNTUuNDk0MzI4LDEyMS41MDA5OSAwLjA4NjgzLC0xMS42MTYzOCA0LjYwMTg3NywtMS45MTM4MiAtMi42NDgyNSwzLjUxNjA3IDAuMDg2ODMsMTAuMDU4NjQgeiIvPjxwYXRoIGQ9Im0gNjEuMDk0NzI2LDEyMS41NDU1IHYgLTE5LjQ0OTY2IGwgMi41MTgwMDksLTEuODY5MzEgMC4xMzAyNDEsMjEuNDA3OTggeiIvPjxwYXRoIGQ9Im0gNTcuMzE3NzEzLDExMS40ODY4NiA0Ljc3NTUzNCwtMS43MzU3NyAxLjQ3NjA3MywtOS41NjkwNiAtMy4zODYyODcsMS42MDIyNSAwLjA0MzQxLDYuMDk3NTEgeiIvPjxwYXRoIGQ9Im0gNjguOTA5MjM1LDEyMS41MDA5OSB2IC0xNi4wNjcxMiBsIC01LjUxMzU3MSwtMy4yNDkwMiAwLjA4NjgzLC0yLjA5MTg0IDcuMjA2NzE0LDQuNDA2MjEgLTAuMDQzNDEsMTcuMDQ2MjggeiIvPjxwYXRoIGQ9Im0gNzAuNDcyMTM2LDEwNi43NjkwOSA0LjI1NDU2NywyLjU4MTQ0IC0wLjA0MzQxLDUuOTYzOTYgMS42MDYzMTcsMS4wMjM2NiAwLjA0MzQxLDUuMjUxODUgLTEuOTEwMjEzLC0wLjA0NDUgMC4wNDM0MSwtMi44MDM5NCAtNC4yNTQ1NjcsLTIuOTgxOTkgdiAtMy41NjA1OCBsIDIuODY1MzIsMi4wOTE4NCAwLjA0MzQxLC0zLjczODYgLTMuMDgyMzkyLC0xLjg2OTMgeiIvPjwvZz48L3N2Zz4=)](https://remsfal.de)
[![Build Status](https://github.com/remsfal/remsfal.github.io/actions/workflows/cd-build.yml/badge.svg)](https://github.com/remsfal/remsfal.github.io/actions/workflows/cd-build.yml)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=remsfal_remsfal.github.io&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=remsfal_remsfal.github.io)
[![License](https://img.shields.io/github/license/remsfal/remsfal.github.io)](https://github.com/remsfal/remsfal.github.io/blob/main/LICENSE)
![Contributors](https://img.shields.io/github/contributors/remsfal/remsfal.github.io)

# REMSFAL – Open Source Real Estate & Facility Management (Website)

**REMSFAL** is an open source platform for the management of residential and commercial real estate.
It connects the three parties involved in day-to-day property operations – **property managers**, **tenants**
and **contractors** – in a single system and replaces scattered emails, phone calls and spreadsheets with
structured, traceable workflows.

This repository contains the source code of the project website **[remsfal.de](https://remsfal.de)**, built with
**[VitePress](https://vitepress.dev)**, a static site generator powered by Vue and Vite. The application itself is
developed in [`remsfal-frontend`](https://github.com/remsfal/remsfal-frontend) and
[`remsfal-backend`](https://github.com/remsfal/remsfal-backend).
A live version of the platform is available at **[remsfal.online](https://remsfal.online)**.

### Requirements and General Conditions

- The site should only be delivered in German.
- The dependencies should be kept minimal.
- It is purely a website and support for native mobile apps or a PWA is not desired.

### Technology Stack

| Area            | Technology                                                    |
|-----------------|---------------------------------------------------------------|
| Site generator  | VitePress (Vue 3, Vite), Markdown                             |
| Language        | TypeScript                                                    |
| UI & Styling    | TailwindCSS 4, `tailwindcss-primeui`, PrimeIcons, Sass        |
| Content helpers | `markdown-it`, DOMPurify                                      |
| Quality         | ESLint, Prettier, SonarCloud, CodeQL                          |


## Architecture

The site content is written in Markdown, the custom landing page is built from Vue components:

```
docs/
├── *.md                # Pages (URL structure = file structure)
├── getting-started/    # Developer documentation
├── public/             # Static assets (logo, favicons, fonts, images)
└── .vitepress/
    ├── config.ts       # Site configuration: navigation, sidebar, search, meta tags
    ├── services/       # GitHub API access (e.g. thesis issues)
    └── theme/          # Custom layout, Vue components and styles
```


## Development

### Prerequisites

To develop or start this project locally, you need [Node.js](https://nodejs.org) (current LTS) and npm.

**Recommended IDE:** [IntelliJ IDEA](https://www.jetbrains.com/idea/) with the Vue.js plugin. ESLint is picked up
automatically from the project configuration.


## How to get started

```sh
npm ci
npm run dev
```

The site is served at [http://localhost:5174](http://localhost:5174) with hot module replacement.

### Configuration

Build-time configuration is done via environment variables in [`.env.development`](.env.development)
(`npm run dev`) and [`.env.production`](.env.production) (`npm run build`).

| Variable            | Description                                                 |
|---------------------|-------------------------------------------------------------|
| `VITE_PLATFORM_URL` | Target of the navigation link *Kostenlos testen*            |

### Available scripts

| Command                     | Description                                                          |
|-----------------------------|----------------------------------------------------------------------|
| `npm run dev`               | Start the dev server with hot reload on port 5174                    |
| `npm run build`             | Build the static site for production (output in `dist/`)             |
| `npm run preview`           | Serve the production build locally on port 4173                      |
| `npm run type-check`        | Run TypeScript type checking                                         |
| `npm run lint` / `lint:fix` | Lint with [ESLint](https://eslint.org/)                              |
| `npm run lint:report`       | Write an ESLint JSON report to `reports/` (used by SonarCloud)       |
| `npm run format`            | Format `docs/` with [Prettier](https://prettier.io/)                 |

### Deployment

Every push to `main` is built and deployed to GitHub Pages, which serves [remsfal.de](https://remsfal.de).

### CI/CD

This project uses GitHub Actions to build every pull request, to analyze the code with CodeQL and to check the
code quality using [SonarCloud](https://sonarcloud.io/summary/new_code?id=remsfal_remsfal.github.io&branch=main).
It is mandatory to pass the specified **Quality Gates** before a pull request can be merged.


## Contributing

Before contributing to REMSFAL, please read our [contributing guidelines](https://github.com/remsfal/.github/blob/main/CONTRIBUTING.md). Participation in the REMSFAL project is governed by the [CNCF Code of Conduct](https://github.com/cncf/foundation/blob/main/code-of-conduct.md).

> **_NOTE:_** When contributing to this repository, please **first** discuss the change you wish to make by creating an issue before making a change. Once you got feedback on your idea, feel free to fork the project and open a pull request.

> **_NOTE:_** Please only make changes in files directly related to your issue!


## License

* [MIT License](LICENSE)
