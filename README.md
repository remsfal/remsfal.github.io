# remsfal-de

This repository holds the source code for the website that runs [remsfal.de](https://remsfal.de).

The site is built with [VitePress](https://vitepress.dev/), a static site generator powered by Vue and Vite.

## Requirements and General Conditions

- The site should only be delivered in German.
- The dependencies should be kept minimal.
- It is purely a website and support for native mobile apps or a PWA is not desired.

## Project Setup

```sh
npm ci
```

### Development Server with Hot-Reload

```sh
npm run dev
```

The development server will start on `http://localhost:5174/`.

### Build for Production

```sh
npm run build
```

The built site will be output to the `dist/` directory.

### Preview Production Build

```sh
npm run docs:preview
```

### Type Checking

```sh
npm run type-check
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### Format with [Prettier](https://prettier.io/)

```sh
npm run format
```
