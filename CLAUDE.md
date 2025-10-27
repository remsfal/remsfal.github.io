# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the source code for the remsfal.de website - a German-language marketing and documentation site for the REMSFAL project. The site combines a Vue 3 SPA (landing page, research, support) with VitePress-based documentation.

**Important Constraints:**
- The site should only be delivered in German
- Keep dependencies minimal (no axios, no e2e testing, no i18n)
- This is purely a website (no PWA or native mobile app support desired)

## Development Commands

### Setup
```bash
npm ci  # Use ci for consistent installs
```

### Development
```bash
npm run dev                # Run both app and docs in parallel
npm run dev:app           # Run Vue app only (port 5173)
npm run dev:docs          # Run VitePress docs only (port 5174)
```

The dev server uses a proxy to route `/docs` requests to the VitePress server at port 5174.

### Building
```bash
npm run build             # Type-check + build app + build docs
npm run build:app         # Build Vue app only
npm run build:docs        # Build VitePress docs only
```

### Testing
```bash
npm run test              # Run Vitest in watch mode
npm run coverage          # Run tests with coverage report
```

Note: The README mentions `npm run test:unit` but the actual script is `npm run test`.

### Linting and Formatting
```bash
npm run lint              # ESLint (quiet mode)
npm run lint:fix          # Auto-fix ESLint issues
npm run lint:report       # Generate JSON report in reports/
npm run format            # Format with Prettier
npm run type-check        # TypeScript type checking
```

## Architecture

### Dual Build System

This project has two distinct applications that build independently:

1. **Vue 3 SPA** (main application at `/`)
   - Built with Vite
   - Located in `src/`
   - Outputs to `dist/`
   - Includes landing page, research page, support, and legal pages

2. **VitePress Documentation** (documentation at `/docs`)
   - Built with VitePress
   - Located in `docs/`
   - Outputs to `dist/docs/`
   - Standalone documentation site with its own config

During development, the Vite dev server proxies `/docs` requests to the VitePress server running on port 5174, creating a seamless experience.

### Project Structure

```
src/
  ├── components/          # Reusable Vue components
  │   ├── HeaderLayout.vue
  │   ├── FooterLayout.vue
  │   ├── EducationalSection.vue
  │   ├── FeaturesSection.vue
  │   ├── PositioningSection.vue
  │   ├── ThesisSection.vue
  │   ├── ThesisCard.vue
  │   ├── TitleWidget.vue
  │   └── Section.vue
  ├── views/              # Page-level components (route targets)
  │   ├── Landing.vue
  │   ├── ResearchView.vue
  │   ├── SupportView.vue
  │   ├── LegalNoticeView.vue
  │   ├── TermsView.vue
  │   └── PrivacyView.vue
  ├── router/
  │   └── index.ts        # Vue Router configuration
  ├── services/
  │   └── GitHubService.ts # GitHub API integration for thesis issues
  ├── assets/             # Static assets (logos, styles)
  └── main.ts             # Application entry point

docs/
  ├── .vitepress/
  │   └── config.ts       # VitePress configuration
  ├── index.md            # Docs home page
  ├── objekthierachie.md
  └── projektdokumentation.md

tests/                    # Vitest test files (*.spec.ts)
```

### Key Technologies

- **Vue 3** with Composition API
- **Vue Router** for SPA routing
- **PrimeVue** component library with Aura theme
  - Components are registered globally in `main.ts`
  - Uses system dark mode detection
  - Tailwind CSS integration via `tailwindcss-primeui`
- **VitePress** for documentation
- **Vitest** with jsdom for component testing
- **TypeScript** throughout
- **SCSS** for styles

### Environment Variables

The project uses environment-specific `.env` files:
- `.env.development` - local development URLs
- `.env.production` - production URLs

Variables:
- `VITE_BASE_URL` - Base URL for the site
- `VITE_DOCS_URL` - Documentation URL
- `VITE_RESEARCH_URL` - Research page URL
- `VITE_PLATFORM_URL` - External platform URL (remsfal.online)

### Router Configuration

The router (`src/router/index.ts`) includes:
- Standard routes for views
- Lazy-loaded routes for non-critical pages
- A special `/documentation` route that redirects to `VITE_DOCS_URL` using `window.location.href`
- An `EmptyComponent` used for external redirects
- Scroll behavior that resets to top on navigation

### GitHub Integration

`src/services/GitHubService.ts` provides:
- Fetching GitHub issues labeled "thesis" from multiple repositories
- Filtering out pull requests
- Sorting issues by update date
- Type definitions for User, Issue, Label
- Status translation to German ("Offen", "In Bearbeitung", "Abgeschlossen")

### Path Aliases

The `@` alias resolves to `src/` (configured in `vite.config.ts`).

## Testing Notes

- Tests use `@testing-library/vue` and `@vue/test-utils`
- jsdom environment for component rendering
- Coverage reports generated in `coverage/` directory
- All mocks are reset between tests

## Build Output

- Vue app builds to `dist/`
- VitePress docs build to `dist/docs/`
- Both outputs are needed for deployment
