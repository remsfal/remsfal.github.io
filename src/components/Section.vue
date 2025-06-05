<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <div id="legal" class="py-6 px-6 lg:px-20 mx-0 my-12 lg:mx-20">
    <!-- Titel zentriert -->
    <div class="text-3xl font-bold text-left mb-8 ml-4">
          {{ title }}
        </div>

    <!-- Inhalt -->
    <div class="section-content [&>p]:text-lg [&>p]:m-8 [&>h3]:font-semibold [&>h3]:text-xl [&>h3]:ml-8 [&>h3]:-mb-4 [&>h3:first-child]:mt-6">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>

.section-content {
  p {
    margin-bottom: 10px;
    margin-top: 1.5rem
  }
}
</style>