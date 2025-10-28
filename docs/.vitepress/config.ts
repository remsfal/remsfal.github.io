import { defineConfig } from 'vitepress'
import dotenv from 'dotenv'
import { resolve } from 'path'

// load environment variables
const mode = process.env.NODE_ENV || 'production'
dotenv.config({
  path: resolve(__dirname, `../../.env.${mode}`),
})

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: ' ',
  description: 'REMSFAL Dokumentation',
  lang: 'de-DE',
  vite: {
    define: {
      __MODE__: JSON.stringify(mode),
    }
  },
  outDir: resolve(__dirname, '../../dist/docs'),
  base: '/docs',
  themeConfig: {
    logo: 'logo.svg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: 'Forschung',
        link: process.env.VITE_RESEARCH_URL,
        target: '_self',
      },
      {
        text: 'Dokumentation',
        link: process.env.VITE_DOCS_URL,
        target: '_self' },
      {
        text: 'Kostenlos testen',
        link: process.env.VITE_PLATFORM_URL,
      },
    ],

    sidebar: [
      {
        text: 'Inhalte',
        items: [
          { text: 'Objekthierachie', link: '/objekthierachie' },
          { text: 'Projektdokumentation', link: '/projektdokumentation' },
        ],
      },
    ],
    footer: {
      message: 'Released under the MIT License',
      copyright: 'Copyright © 2023 - present Prof. Dr.-Ing. Alexander Stanik',
    },
    lastUpdated: {
      text: 'Zuletzt aktualisiert',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'short',
      },
    },
    docFooter: {
      prev: 'Vorherige Seite',
      next: 'Nächste Seite',
    },
    search: {
      provider: 'local',
    },
    outline: {
      label: 'Auf dieser Seite',
    },
  },
})
