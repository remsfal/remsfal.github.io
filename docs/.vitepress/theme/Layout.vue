<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import Footer from './components/Footer.vue'
import PositioningSection from './components/PositioningSection.vue'
import FeaturesSection from './components/FeaturesSection.vue'
import EducationalSection from './components/EducationalSection.vue'
import LandingFooterLinks from './components/LandingFooterLinks.vue'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <!-- Home page slots -->
    <template #home-hero-before>
      <PositioningSection />
    </template>

    <template #home-features-before>
      <FeaturesSection />
    </template>

    <template #home-features-after>
      <EducationalSection />
      <LandingFooterLinks />
    </template>

    <!-- Global layout slots -->
    <template #layout-bottom>
      <Footer />
    </template>
  </Layout>
</template>
