<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderLayout from "@/components/HeaderLayout.vue";
import FooterLayout from "@/components/FooterLayout.vue";
</script>

<template>
  <HeaderLayout />

  <RouterView />

</template>
