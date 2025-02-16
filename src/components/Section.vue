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
        <div class="section-title">
          {{ title }}
        </div>
      </template>
      <template #content>
        <div class="section-content">
          <slot></slot>
        </div>
      </template>
    </Card>
  </div>
</template>

<style scoped>
.section-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.section-content {
  font-size: 1.2rem;
  p {
    margin-bottom: 10px;
  }
}
</style>