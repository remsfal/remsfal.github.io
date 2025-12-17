# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the source code for the remsfal.de website - a German-language marketing and documentation site for the REMSFAL project. The site is built entirely with VitePress, a static site generator powered by Vue and Vite.

**Important Constraints:**
- The site should only be delivered in German
- Keep dependencies minimal
- This is purely a website (no PWA or native mobile app support desired)

## Development Commands

### Setup
```bash
npm ci  # Use ci for consistent installs
```

### Development
```bash
npm run dev               # Run VitePress dev server (port 5174)
```

### Building
```bash
npm run build             # Build VitePress site
npm run docs:preview      # Preview production build
```

### Linting and Formatting
```bash
npm run lint              # ESLint (quiet mode)
npm run lint:fix          # Auto-fix ESLint issues
npm run lint:report       # Generate JSON report in reports/
npm run format            # Format with Prettier
npm run type-check        # TypeScript type checking
```

## Architecture

### VitePress Static Site

This project is built entirely with VitePress:

- **VitePress Site** (at `/`)
  - Built with VitePress
  - Source located in `docs/`
  - Outputs to `dist/`
  - Includes home page, research pages, documentation, and legal pages
  - Served directly from root path (`/`)

### Project Structure

```
docs/
  ├── .vitepress/
  │   ├── config.ts                # VitePress configuration
  │   ├── theme/
  │   │   ├── Layout.vue          # Custom layout
  │   │   ├── index.ts            # Theme registration
  │   │   ├── components/         # Custom Vue components
  │   │   │   ├── ThesisSection.vue
  │   │   │   ├── ThesisCard.vue
  │   │   │   ├── PositioningSection.vue
  │   │   │   ├── FeaturesSection.vue
  │   │   │   ├── EducationalSection.vue
  │   │   │   ├── Footer.vue
  │   │   │   └── LandingFooterLinks.vue
  │   │   ├── services/
  │   │   │   └── GitHubService.ts # GitHub API integration
  │   │   └── styles/
  │   │       └── custom.css      # Custom styles
  │   └── public/
  │       ├── fonts/               # Custom fonts (Cybertron)
  │       └── logo.svg
  ├── index.md                     # Home page
  ├── forschung.md                 # Research page
  ├── abschlussarbeiten.md         # Thesis page
  ├── objekthierachie.md           # Object hierarchy docs
  ├── projektdokumentation.md      # Project documentation
  ├── impressum.md                 # Legal notice
  ├── nutzungsbedingungen.md       # Terms of use
  └── datenschutz.md               # Privacy policy
```

### Key Technologies

- **VitePress** - Static site generator with Vue 3 and Vite
- **Vue 3** with Composition API (for custom components)
- **TypeScript** throughout
- **Tailwind CSS** for styling with `tailwindcss-primeui`
- **PrimeIcons** for icon fonts
- **Markdown** for content
- **SCSS** for custom component styles
- **DOMPurify** for sanitizing HTML
- **markdown-it** for Markdown rendering in components

### Environment Variables

The project uses environment-specific `.env` files:
- `.env.development` - local development URLs
- `.env.production` - production URLs

Variables:
- `VITE_PLATFORM_URL` - External platform URL (remsfal.online)

### VitePress Configuration

The VitePress config (`docs/.vitepress/config.ts`) includes:
- `base: '/'` - Site is served from root path
- `outDir: '../../dist'` - Builds to project root `dist/` directory
- Navigation and sidebar configuration
- German language settings (`de-DE`)
- Local search provider
- Custom theme with slots for landing page components

### GitHub Integration

`docs/.vitepress/services/GitHubService.ts` provides:
- Fetching GitHub issues labeled "thesis" from multiple repositories
- Filtering out pull requests
- Sorting issues by update date
- Type definitions for User, Issue, Label
- Status translation to German ("Offen", "In Bearbeitung", "Abgeschlossen")

### Custom Fonts

The Cybertron font is used for the main landing page heading:
- Font file: `docs/public/fonts/Cybertron Regular.otf`
- Loaded via `@font-face` in `docs/.vitepress/theme/styles/custom.css`
- Used in PositioningSection component

## Build Output

- VitePress builds to `dist/`
- Site is served from root path `/`
- All static assets are bundled in the build output
