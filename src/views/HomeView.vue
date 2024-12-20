<script setup lang="ts">
import HeroSection from '../components/HeroSection.vue';
import FeaturesSection from '../components/FeaturesSection.vue';
import EducationalSection from '../components/EducationalSection.vue';
import IssuesSection from "../components/IssuesSection.vue";
import FAQSection from "../components/FAQSection.vue";
import FooterLayout from "../components/FooterLayout.vue";
</script>

<template>
  <div class="min-h-screen bg-gradient">
    <!-- Add pt-[60px] or use the CSS variable -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" style="padding-top: calc(var(--header-height) + 8rem);">
      <HeroSection />
      <FeaturesSection />
      <EducationalSection />
      <IssuesSection />
      <FAQSection />
      <FooterLayout />

    </div>
  </div>
</template>

<style scoped>
.bg-gradient {
  background: linear-gradient(135deg, #2e6022 0%, #4a8c3c 50%, #2e6022 100%);
}
</style>