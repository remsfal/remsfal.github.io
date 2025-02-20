<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderLayout from '@/components/HeaderLayout.vue'
import FooterLayout from '@/components/FooterLayout.vue'
</script>

<template>
  <div class="bg-surface-0 dark:bg-surface-900">
    <div id="home" class="landing-wrapper overflow-hidden">
      <header>
        <HeaderLayout />
      </header>

      <main>
        <RouterView />
      </main>

      <footer>
        <FooterLayout />
      </footer>
    </div>
  </div>
</template>
