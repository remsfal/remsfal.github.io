import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import ThesisSection from './components/ThesisSection.vue'
import 'primeicons/primeicons.css'
import './styles/custom.css'
import type { Theme } from 'vitepress'

export default {
    extends: DefaultTheme,
    Layout,
    enhanceApp({ app }) {
        app.component('ThesisSection', ThesisSection)
    }
} satisfies Theme
