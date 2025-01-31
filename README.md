# remsfal-de

This repository holds the source code for the website that runs [remsfal.de](https://remsfal.de).

## Requirements and General Conditions

- The site should only be delivered in German.
- The dependencies should be kept minimal, i.e. no axios, no e2e testing, no i18n, etc.
- It is purely a website and support for native mobile apps or a PWA is not desired.

## Project Setup

```sh
npm ci
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
