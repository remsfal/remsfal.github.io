import { defineConfig } from 'vitepress'
import { resolve } from 'path'

// Environment variables are automatically loaded by Vite
const mode = process.env.NODE_ENV || 'production'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: ' ',
  description: 'REMSFAL Dokumentation',
  lang: 'de-DE',
  head: [
    // Favicon
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }],

    // Meta-Tags
    ['meta', { name: 'theme-color', content: '#28602C' }],
    ['meta', { name: 'keywords', content: 'Facility Management, Smart Building, IoT, Mängelmanagement, ' +
        'Online-Ticketsystemen, Hausverwaltungen, Open-Source, Vermieter, Eigentümer, Fernzugriff, ' +
        'Überwachen, Steuern, Verwalten, Liegenschaften, Studienprojekt, Abschlussarbeit, kostenlos, ' +
        'Fernwartung, Building Management System, BMS, Gebäudeleittechnik, GLT, Managementebene' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:locale', content: 'de_DE' }],
    ['meta', { name: 'og:site_name', content: 'REMSFAL' }],
    ['meta', { name: 'og:description', content: 'Remote Management Services for connected Facilities' }],
  ],
  vite: {
    define: {
      __MODE__: JSON.stringify(mode),
    }
  },
  outDir: resolve(__dirname, '../../dist'),
  base: '/',
  themeConfig: {
    logo: 'remsfal-logo.svg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: 'Forschung',
        link: '/forschung',
      },
      {
        text: 'Dokumentation',
        link: '/projektdokumentation',
      },
      {
        text: 'Kostenlos testen',
        link: process.env.VITE_PLATFORM_URL || 'https://remsfal.online',
      },
    ],

    sidebar: [
      {
        text: 'Forschung & Lehre',
        items: [
          { text: 'Forschung', link: '/forschung' },
          { text: 'Abschlussarbeiten', link: '/abschlussarbeiten' },
        ],
      },
      {
        text: 'Inhalte',
        items: [
          { text: 'Objekthierachie', link: '/objekthierachie' },
          { text: 'Projektdokumentation', link: '/projektdokumentation' },
        ],
      },
      {
        text: 'Rechtliches',
        items: [
          { text: 'Impressum', link: '/impressum' },
          { text: 'Nutzungsbedingungen', link: '/nutzungsbedingungen' },
          { text: 'Datenschutz', link: '/datenschutz' },
        ],
      },
    ],
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
