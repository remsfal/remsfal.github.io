<script setup lang="ts">
import Card from 'primevue/card'

defineProps<{
  title: string
}>()
</script>

<template>
  <div id="legal" class="py-6 px-6 lg:px-20 mx-0 my-12 lg:mx-20">
    <Card>
      <template #title>
        <div class="section-title text-2xl m-8">
          {{ title }}
        </div>
      </template>
      <template #content>
        <div class="section-content [&>p]:text-lg [&>p]:m-8 [&>h3]:font-semibold [&>h3]:text-xl [&>h3]:ml-8 [&>h3]:-mb-4 [&>h3:first-child]:mt-6">
          <slot></slot>
        </div>
      </template>
    </Card>
  </div>
</template>

<style scoped>
.section-title {
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.section-content {
  p {
    margin-bottom: 10px;
    margin-top: 1.5rem
  }
}
</style>