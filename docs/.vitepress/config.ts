import { defineConfig } from 'vitepress'
import { resolve } from 'path'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: ' REMSFAL Dokumentation',
  description: "REMSFAL Dokumentation",
  lang: 'de-DE',
  outDir: resolve(__dirname, '../../dist/docs'),
  base: '/docs',
  themeConfig: {
    logo: 'logo.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Forschung', link: 'https://remsfal.de/research', target: '_self'},
      { text: 'Dokumentation', link: 'https://remsfal.de/research', target: '_self'},
      { text: 'Kostenlos testen', link: 'https://remsfal.online'}
    ],

    sidebar: [
      {
        text: 'Inhalte',
        items: [
          { text: 'Objekthierachie', link: '/objekthierachie' },
          { text: 'Projektdokumentation', link: '/projektdokumentation' }
        ]
      }
    ],
    footer: {
      message: 'Released under the MIT License',
      copyright: 'Copyright © 2023 - present Prof. Dr.-Ing. Alexander Stanik'
    },
    lastUpdated: {
    text: 'Zuletzt aktualisiert',
    formatOptions: {
    dateStyle: 'full',
    timeStyle: 'short'
    }
    },
    docFooter: {
      prev: 'Vorherige Seite',
      next: 'Nächste Seite'
    },
    search: {
      provider: 'local'
    },
    outline: {
      label: 'Auf dieser Seite',
    }
  }
})