import { defineConfig } from 'vitepress'
import { resolve } from 'path'
import { text } from 'node:stream/consumers'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: ' ',
  description: "Remsfal Dokumentation",
  outDir: resolve(__dirname, '../../dist/docs'),
  base: '/docs/',
  themeConfig: {
    logo: '/docs/public/logo.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Forschung', link: 'https://remsfal.de/research', target: '_self'},
      { text: 'Dokumentation', link: 'https://remsfal.de/research', target: '_self'},
      { text: 'Kostenlos testen', link: 'https://remsfal.online/api/v1/authentication/login'}
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],
    footer: {
      message: 'Released under the MIT License',
      copyright: 'Copyright © 2023 - present Prof. Dr.-Ing. Alexander Stanik'
    },
    lastUpdated: {
    text: 'Updated at',
    formatOptions: {
    dateStyle: 'full',
    timeStyle: 'medium'
    }
    }
  }
})